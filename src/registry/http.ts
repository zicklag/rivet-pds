import { Hono } from "hono";
import { actor } from "rivetkit";
import type { registry } from "../registry";

/** Create an HTTP actor for handling requests. */
export const http = actor({
  onRequest(c, req) {
    const client = c.client<typeof registry>();
    const authServer = client.authServer.getOrCreate("main");

    const app = new Hono();

    app.get(
      "/.well-known/oauth-authorization-server",
      async () =>
        new Response(await authServer.getMetadata(), {
          headers: {
            "content-type": "application/json",
          },
        }),
    );

    return app.fetch(req);
  },
});
