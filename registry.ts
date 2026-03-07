import { actor, setup } from "rivetkit";

// Create an HTTP actor for handling requests
export const http = actor({
  // Create a raw request handler
  onRequest(_c, req) {
    // Return whatever URL comes from the request as the text body
    return new Response(`Url: ${req.url}`);
  },
});

export const registry = setup({
  use: { http },
});
