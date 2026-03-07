import { setup } from "rivetkit";

import { authServer } from "./registry/authServer";
import { http } from "./registry/http";

export const registry = setup({
  use: { http, authServer },
});
