import { getCookie, setCookie } from "@tanstack/react-start/server";
import { getIronSession } from "iron-session";

type SessionData = {
	userId?: string;
};

export function getAppSession() {
	const password = process.env.SESSION_SECRET;

	if (!password || password.length < 32) {
		throw new Error("SESSION_SECRET doit contenir au moins 32 caractères");
	}

	return getIronSession<SessionData>(
		{ read: getCookie, write: setCookie },
		{
			cookieName: "app-session",
			password,
			ttl: 7 * 24 * 60 * 60,
			cookieOptions: {
				httpOnly: true,
				secure: process.env.NODE_ENV === "production",
				sameSite: "lax",
				path: "/",
			},
		},
	);
}