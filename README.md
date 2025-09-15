# Arkyv Demo

This is a demo of a simple website to archive media. It is built with [Honox.js](https://github.com/honojs/honox) and deployed on [Deno](https://deno.com/deploy).

![demo](demo.png)

### Usage

Build the project:

```
deno task make
```

Start the project:

```
deno task dev
```

This will watch the project directory and restart as necessary.

## Info
The `deploy.yml` has been moved from the `.github/workflows` folder to the root because it is no longer needed for deployment in Deno Deploy v2. It is lefthere for reference purposes.

## Deno deploy settings
[Join Deno Deploy<sup>EA</sup>](https://docs.deno.com/deploy/early-access/) (Early Access) and set up a [new app](https://app.deno.com/mastrojs/~/new) with the following build configuration:

- Framework preset: No Preset
- Install command: `deno install`
- Build command: `deno task make`
- Dynamic App -> Entrypoint: `dist/index.js`


## Credits
- [Lunecake](https://lunecake.com)

