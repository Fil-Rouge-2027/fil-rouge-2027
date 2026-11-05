import { Link, useHydrated, useRouter } from "@tanstack/react-router";
import { type FormEvent, useState } from "react";
import { loginFn } from "../../server/auth";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export default function LoginForm() {
	const router = useRouter();
	const hydrated = useHydrated();
	const [error, setError] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	async function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);

		setError("");
		setIsLoading(true);

		try {
			const result = await loginFn({
				data: {
					email: String(formData.get("email")),
					password: String(formData.get("password")),
				},
			});

			if ("error" in result && result.error) {
				setError(result.error);
				return;
			}

			await router.invalidate();
			await router.navigate({ to: "/" });
		} catch {
			setError("Une erreur est survenue. Réessaie.");
		} finally {
			setIsLoading(false);
		}
	}

	return (
		<form method="post" onSubmit={handleSubmit} className="w-full max-w-sm">
			<fieldset disabled={!hydrated || isLoading} className="space-y-4">
				<h1 className="text-center text-2xl font-bold">
					Login to your account
				</h1>

				<div className="space-y-2">
					<Label htmlFor="email">Email</Label>
					<Input
						id="email"
						name="email"
						type="email"
						autoComplete="username"
						required
					/>
				</div>

				<div className="space-y-2">
					<Label htmlFor="password">Password</Label>
					<Input
						id="password"
						name="password"
						type="password"
						autoComplete="current-password"
						required
					/>
				</div>

				<p role="alert" className="text-sm text-destructive">
					{error}
				</p>

				<Button type="submit" className="w-full">
					{isLoading ? "Logging in..." : "Login"}
				</Button>

				<p className="text-center text-sm">
					Don't have an account? <Link to="/register">Sign up</Link>
				</p>
			</fieldset>
		</form>
	);
}