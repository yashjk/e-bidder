import { env } from "@/env";
import * as schema from "./schema";
import { PostgresJsDatabase, drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

declare global {
  var database: PostgresJsDatabase<typeof schema> | undefined;
};

let database: PostgresJsDatabase<typeof schema>;
let pg: ReturnType<typeof postgres>;

if (env.NODE_ENV === "production") {
  pg = postgres(env.DATABASE_URL);
  database = drizzle(pg, { schema });
} else {
  if(!global.database) {
    pg = postgres();
    database = drizzle(pg, { schema });
  }
  database = global.database;
};

export { database, pg };
