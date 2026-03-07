import { createClient } from "rivetkit/client";
import { registry } from "./registry";
import { serve } from "@hono/node-server";
import { Hono } from "hono";

// Connect to Rivet
const client = createClient<typeof registry>();

// Get the http handler actor
const http = client.http.getOrCreate("main");

// Create a webserver
const app = new Hono();

// Forward all requests to the http handler
app.all("*", (c) => http.fetch(c.req.raw));

// Run the node.js webserver
serve(app, (info) => {
  console.log(`Listening on http://localhost:${info.port}`);
});
