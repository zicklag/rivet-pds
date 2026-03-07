import { actor } from "rivetkit";
import { CONFIG } from "../config";

export const authServer = actor({
  actions: {
    getMetadata() {
      return JSON.stringify({
        issuer: CONFIG.publicEndpoint,
      });
    },
  },
});
