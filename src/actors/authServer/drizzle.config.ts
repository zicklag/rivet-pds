import { defineConfig } from "rivetkit/db/drizzle";

export default defineConfig({
  schema: "./src/actors/authServer/schema.ts",
  out: "./src/actors/authServer/drizzle",
});
