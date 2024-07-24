import { env } from "@/env";
import { defineConfig } from "drizzle-kit";

console.log(env.DATABASE_URL);

export default defineConfig({
	schema: "./src/db/schema.ts",
	dialect: "postgresql",
	out: "./drizzle",
	dbCredentials: {
		url: env.DATABASE_URL,
	},
	verbose: true,
	strict: true,
});
