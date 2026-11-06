import { randomBytes, scrypt, timingSafeEqual } from "node:crypto";

const KEY_LENGTH = 64;
const OPTIONS = { N: 2 ** 17, r: 8, p: 1, maxmem: 256 * 1024 * 1024 };

function deriveKey(password: string, salt: string) {
	return new Promise<Buffer>((resolve, reject) => {
		scrypt(password, salt, KEY_LENGTH, OPTIONS, (error, key) => {
			if (error) {
				reject(error);
			} else {
				resolve(key);
			}
		});
	});
}

export async function hashPassword(password: string) {
	const salt = randomBytes(16).toString("hex");
	const key = await deriveKey(password, salt);
	return `${salt}:${key.toString("hex")}`;
}

export async function verifyPassword(password: string, storedHash: string) {
	const [salt, storedKey] = storedHash.split(":");
	if (!salt || !storedKey) return false;

	const key = await deriveKey(password, salt);
	return timingSafeEqual(key, Buffer.from(storedKey, "hex"));
}