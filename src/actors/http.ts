import { Hono } from "hono";
import { actor } from "rivetkit";
import type { registry } from "../actors";

/** Create an HTTP actor for handling requests. */
export const http = actor({
  onRequest(c, req) {
    const client = c.client<typeof registry>();
    const authServer = client.authServer.getOrCreate("main");

    const app = new Hono();

    let res = new Response();

    app.use(({ req }) => {

      new P

    })

    return app.fetch(req);
  },
});
