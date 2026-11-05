CREATE TABLE "users" (
	"user_id" uuid PRIMARY KEY DEFAULT uuidv7() NOT NULL,
	"user_name" varchar(100) NOT NULL,
	"user_email" varchar(255) NOT NULL,
	"user_password_hash" text NOT NULL,
	"user_avatar_url" text,
	"user_created_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "users_user_email_unique" UNIQUE("user_email")
);
