import { createServerFn } from "@tanstack/react-start";
import { eq } from "drizzle-orm";
import { z } from "zod";
import { db } from "../db/index";
import { users } from "../db/schema";
import { hashPassword, verifyPassword } from "./password.server";
import { getAppSession } from "./session.server";

const emailSchema = z.string().trim().toLowerCase().pipe(z.email().max(255));

const registerSchema = z.object({
	name: z.string().trim().min(2).max(100),
	email: emailSchema,
	password: z.string().min(12).max(128),
});

const loginSchema = z.object({
	email: emailSchema,
	password: z.string().min(1).max(128),
});

export const registerFn = createServerFn({ method: "POST" })
	.validator(registerSchema)
	.handler(async ({ data }) => {
		const userPasswordHash = await hashPassword(data.password);

		const [user] = await db
			.insert(users)
			.values({
				userName: data.name,
				userEmail: data.email,
				userPasswordHash,
			})
			.onConflictDoNothing({ target: users.userEmail })
			.returning({ userId: users.userId });

		if (!user) {
			return { error: "Inscription impossible avec ces informations." };
		}

		const session = await getAppSession();
		session.userId = user.userId;
		await session.save();

		return { success: true };
	});

export const loginFn = createServerFn({ method: "POST" })
	.validator(loginSchema)
	.handler(async ({ data }) => {
		const [user] = await db
			.select({
				userId: users.userId,
				userPasswordHash: users.userPasswordHash,
			})
			.from(users)
			.where(eq(users.userEmail, data.email))
			.limit(1);

		const isValid =
			user && (await verifyPassword(data.password, user.userPasswordHash));

		if (!isValid) {
			return { error: "E-mail ou mot de passe incorrect." };
		}

		const session = await getAppSession();
		session.userId = user.userId;
		await session.save();

		return { success: true };
	});

export const logoutFn = createServerFn({ method: "POST" }).handler(async () => {
	const session = await getAppSession();
	session.destroy();

	return { success: true };
});

export const getCurrentUserFn = createServerFn({ method: "GET" }).handler(
	async () => {
		const session = await getAppSession();

		if (!session.userId) return null;

		const [user] = await db
			.select({
				userId: users.userId,
				userName: users.userName,
				userEmail: users.userEmail,
				userAvatarUrl: users.userAvatarUrl,
			})
			.from(users)
			.where(eq(users.userId, session.userId))
			.limit(1);

		return user ?? null;
	},
);