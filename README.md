# Rivet PDS

An [ATProto](https://atproto.com) PDS written on top of [Rivet](https://rivet.dev) actors.

## Running

Install dependencies:

```
pnpm i
```

In one terminal start the Rivet runner.

```
$ pnpm runner
  RivetKit 2.1.6 (File System - Runner)
  - Inspector:    http://127.0.0.1:6420/ui/
  - Actors:       2
  - Data:         /home/zicklag/.local/share/rivetkit/rivet-pds-7e2a2e69
  - Instances:    4
```

In another terminal start the gateway.

```
$ pnpm gateway
Listening on http://localhost:3000
```

Now you can hit the PDS on localhost:3000
