import { pgTable, serial } from "drizzle-orm/pg-core";

export const bids = pgTable("eb_bids", {
  id: serial("id").primaryKey(),
})
