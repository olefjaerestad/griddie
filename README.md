# Griddie
Another CSS grid library. That's all.

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

## Build for prod
```sh
npm i
```

```sh
npm run build
```

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

## TODO:
- Add e2e tests.
- Write documentation in Storybook, Readme and index.html.
