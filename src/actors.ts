import { setup } from "rivetkit";

import { authServer } from "./actors/authServer";
import { http } from "./actors/http";

export const registry = setup({
  use: { http, authServer },
});
