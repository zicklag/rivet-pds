import { actor, ActorDefinition } from "rivetkit";
import { CONFIG } from "../config";
import {
  Account,
  AuthenticateAccountData,
  AuthorizedClientData,
  AuthorizedClients,
  Awaitable,
  ClientId,
  Code,
  CreateAccountData,
  CreateTokenData,
  DeviceAccount,
  DeviceData,
  DeviceId,
  FoundRequestResult,
  Keyset,
  LexiconData,
  NewTokenData,
  OAuthClientMetadata,
  OAuthProvider,
  RefreshToken,
  RequestData,
  RequestId,
  ResetPasswordConfirmInput,
  ResetPasswordRequestInput,
  Sub,
  TokenId,
  TokenInfo,
  UpdateRequestData,
} from "@atproto/oauth-provider";

export const authServer = actor({
  state: {
    accounts: [] as CreateAccountData[],
  },
  vars: undefined as unknown as {
    provider: OAuthProvider;
  },
  createVars: (c) => {
    return {
      provider: new OAuthProvider({
        issuer: CONFIG.publicEndpoint,
        keyset: new Keyset([]),
        accountStore: {
          createAccount: function (
            data: CreateAccountData,
          ): Awaitable<Account> {
            throw new Error("Function not implemented.");
          },
          authenticateAccount: function (
            data: AuthenticateAccountData,
          ): Awaitable<Account> {
            throw new Error("Function not implemented.");
          },
          setAuthorizedClient: function (
            sub: Sub,
            clientId: ClientId,
            data: AuthorizedClientData,
          ): Awaitable<void> {
            throw new Error("Function not implemented.");
          },
          getAccount: function (sub: Sub): Awaitable<{
            account: Account;
            authorizedClients: AuthorizedClients;
          }> {
            throw new Error("Function not implemented.");
          },
          upsertDeviceAccount: function (
            deviceId: DeviceId,
            sub: Sub,
          ): Awaitable<void> {
            throw new Error("Function not implemented.");
          },
          getDeviceAccount: function (
            deviceId: DeviceId,
            sub: Sub,
          ): Awaitable<DeviceAccount | null> {
            throw new Error("Function not implemented.");
          },
          removeDeviceAccount: function (
            deviceId: DeviceId,
            sub: Sub,
          ): Awaitable<void> {
            throw new Error("Function not implemented.");
          },
          listDeviceAccounts: function (
            filter: { sub: Sub } | { deviceId: DeviceId },
          ): Awaitable<DeviceAccount[]> {
            throw new Error("Function not implemented.");
          },
          resetPasswordRequest: function (
            data: ResetPasswordRequestInput,
          ): Awaitable<null | Account> {
            throw new Error("Function not implemented.");
          },
          resetPasswordConfirm: function (
            data: ResetPasswordConfirmInput,
          ): Awaitable<null | Account> {
            throw new Error("Function not implemented.");
          },
          verifyHandleAvailability: function (handle: string): Awaitable<void> {
            throw new Error("Function not implemented.");
          },
        },
        deviceStore: {
          createDevice: function (
            deviceId: DeviceId,
            data: DeviceData,
          ): Awaitable<void> {
            throw new Error("Function not implemented.");
          },
          readDevice: function (
            deviceId: DeviceId,
          ): Awaitable<DeviceData | null> {
            throw new Error("Function not implemented.");
          },
          updateDevice: function (
            deviceId: DeviceId,
            data: Partial<DeviceData>,
          ): Awaitable<void> {
            throw new Error("Function not implemented.");
          },
          deleteDevice: function (deviceId: DeviceId): Awaitable<void> {
            throw new Error("Function not implemented.");
          },
        },
        tokenStore: {
          createToken: function (
            tokenId: TokenId,
            data: CreateTokenData,
            refreshToken?: RefreshToken,
          ): Awaitable<void> {
            throw new Error("Function not implemented.");
          },
          readToken: function (tokenId: TokenId): Awaitable<null | TokenInfo> {
            throw new Error("Function not implemented.");
          },
          deleteToken: function (tokenId: TokenId): Awaitable<void> {
            throw new Error("Function not implemented.");
          },
          rotateToken: function (
            tokenId: TokenId,
            newTokenId: TokenId,
            newRefreshToken: RefreshToken,
            newData: NewTokenData,
          ): Awaitable<void> {
            throw new Error("Function not implemented.");
          },
          findTokenByRefreshToken: function (
            refreshToken: RefreshToken,
          ): Awaitable<null | TokenInfo> {
            throw new Error("Function not implemented.");
          },
          findTokenByCode: function (code: Code): Awaitable<null | TokenInfo> {
            throw new Error("Function not implemented.");
          },
          listAccountTokens: function (sub: Sub): Awaitable<TokenInfo[]> {
            throw new Error("Function not implemented.");
          },
        },
        clientStore: {
          findClient: function (
            clientId: ClientId,
          ): Awaitable<OAuthClientMetadata> {
            throw new Error("Function not implemented.");
          },
        },
        replayStore: {
          unique: function (
            namespace: string,
            nonce: string,
            timeFrame: number,
          ): Awaitable<boolean> {
            throw new Error("Function not implemented.");
          },
        },
        lexiconStore: {
          findLexicon: function (nsid: string): Awaitable<LexiconData | null> {
            throw new Error("Function not implemented.");
          },
          storeLexicon: function (
            nsid: string,
            data: LexiconData,
          ): Awaitable<void> {
            throw new Error("Function not implemented.");
          },
          deleteLexicon: function (nsid: string): Awaitable<void> {
            throw new Error("Function not implemented.");
          },
        },
        requestStore: {
          createRequest: function (
            requestId: RequestId,
            data: RequestData,
          ): Awaitable<void> {
            throw new Error("Function not implemented.");
          },
          readRequest: function (
            requestId: RequestId,
          ): Awaitable<RequestData | null> {
            throw new Error("Function not implemented.");
          },
          updateRequest: function (
            requestId: RequestId,
            data: UpdateRequestData,
          ): Awaitable<void> {
            throw new Error("Function not implemented.");
          },
          deleteRequest: function (
            requestId: RequestId,
          ): void | Awaitable<void> {
            throw new Error("Function not implemented.");
          },
          consumeRequestCode: function (
            code: Code,
          ): Awaitable<FoundRequestResult | null> {
            throw new Error("Function not implemented.");
          },
        },
      }),
    };
  },
  actions: {
    getMetadata: (c) => {
      return JSON.stringify(c.vars.provider.metadata);
    },
  },
});
