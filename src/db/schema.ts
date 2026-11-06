import { sql } from "drizzle-orm";
import { pgTable, text, timestamp, uuid, varchar } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
	userId: uuid("user_id").primaryKey().default(sql`uuidv7()`),
	userName: varchar("user_name", { length: 100 }).notNull(),
	userEmail: varchar("user_email", { length: 255 }).notNull().unique(),
	userPasswordHash: text("user_password_hash").notNull(),
	userAvatarUrl: text("user_avatar_url"),
	userCreatedAt: timestamp("user_created_at", { withTimezone: true })
		.notNull()
		.defaultNow(),
});