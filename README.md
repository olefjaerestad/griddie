# React client side template
Template repository for react client side projects.

- Frontend: [react](https://reactjs.org/) and [typescript](https://www.typescriptlang.org/)
- Bundling: [esbuild](https://esbuild.github.io/)
- Dev server: [fastify](https://www.fastify.io/)
- Hot reloading: [@olefjaerestad/hmr](https://www.npmjs.com/package/@olefjaerestad/hmr)
- Testing: [Jest](https://jestjs.io/en/) and [Playwright](https://playwright.dev/)
- Documentation: [Storybook](https://storybook.js.org/)

## Dev
```sh
npm i
```

```sh
npm run dev
```

> Tests will run on commit. If any of the tests fail, the commit will fail. To bypass, pass `--no-verify`. Example: `git commit -m "WIP" --no-verify`.

## Prod
```sh
npm i
```

```sh
npm run build
```

> There's no `npm run start`. All code runs on the client, so simply upload the resulting `build` folder to wherever you like.

## Testing
```sh
npm i
```

### Unit tests
```sh
npm run test:unit
```

Watch mode:

```sh
npm run test:unit -- --watch
```

### E2E (End-To-End) tests
```sh
npm run test:e2e
```

### All tests
```sh
npm run test
```

## Documentation
```sh
npm run storybook
```

## Todo
- Place files processed by the [external file loader](https://esbuild.github.io/content-types/#external-file) in a `static` folder [once esbuild supports it](https://github.com/evanw/esbuild/issues/361).
- Add support for CSS modules [once esbuild supports it](https://github.com/evanw/esbuild/issues/20).
