# Griddie
Another CSS grid library. That's all.

- [See example markup](https://olefjaerestad.github.io/griddie/)
- [Interactive Storybook documentation](https://olefjaerestad.github.io/griddie/storybook/index.html)

## Use
`npm i @olefjaerestad/griddie`

### Add the CSS

Without bundler:

```css
/* style.css */
@import './node_modules/@olefjaerestad/griddie/build/style.css';
```

With bundler:

```css
/* style.css */
@import '@olefjaerestad/griddie';
```

If you use Sass, you can also import only the functionality you need:

```scss
/* style.scss */
/**
 * If you don't provide Sass variables yourself (see configure with Sass), 
 * _variables.scss must always be imported.
 */
@import '@olefjaerestad/griddie/partials/_variables.scss';
@import '@olefjaerestad/griddie/partials/_grid.scss';
@import '@olefjaerestad/griddie/partials/_cell.scss';
@import '@olefjaerestad/griddie/partials/_offset.scss';
```

### Markup
Griddie uses the concept of grids and cells. A cell must always be a direct child of a grid, 
and a grid can consist of zero or more cells. 
At its simplest, you can add a horizontal grid with cells like this:

```html
<div class="g g-x">
  <div class="c-4">I am a cell with a width of 4 columns.</div>
  <div class="c-8">I am a cell with a width of 8 columns.</div>
</div>
```

#### Available classes:
##### Grid:
- `.g`: Base grid styling. All grids need this.
- `.g-x`: Horizontal grid. Can be combined with vertical grid.
- `.g-y`: Vertical grid. Can be combined with horizontal grid.

##### Cell:
- `.c-6`: A cell spanning 6 columns or rows, depending on whether parent grid is horizontal or vertical. If parent grid is both horizontal and vertical, the cell spans both 6 columns and rows. `6` can be replaced with any number between `1` and `$maxColumns` (see configure with Sass).
- `.c-6-x`: A cell spanning 6 columns, independently of whether parent grid is horizontal or vertical or both. `6` can be replaced with any number between `1` and `$maxColumns` (see configure with Sass).
- `.c-6-y`: A cell spanning 6 rows, independently of whether parent grid is horizontal or vertical or both. `6` can be replaced with any number between `1` and `$maxColumns` (see configure with Sass).
- `.c-md-6`: A cell spanning 6 columns or rows on medium viewport widths and above, depending on whether parent grid is horizontal or vertical. If parent grid is both horizontal and vertical, the cell spans both 6 columns and rows. `md` can be replaced with any key in `$breakpoints` (see configure with Sass). `6` can be replaced with any number between `1` and `$maxColumns` (see configure with Sass).
- `.c-md-6-x`: A cell spanning 6 columns on medium viewport widths and above, independently of whether parent grid is horizontal or vertical or both. `md` can be replaced with any key in `$breakpoints` (see configure with Sass). `6` can be replaced with any number between `1` and `$maxColumns` (see configure with Sass).
- `.c-md-6-y`: A cell spanning 6 rows on medium viewport widths and above, independently of whether parent grid is horizontal or vertical or both. `md` can be replaced with any key in `$breakpoints` (see configure with Sass). `6` can be replaced with any number between `1` and `$maxColumns` (see configure with Sass).

##### Cell offset (aka cell positioning). By default, cells will flow naturally. Use these classes to explicitly position them:
- `.o-6`: Use on a cell to force it to start at grid line 6. If parent grid is horizontal, this will offset the element horizontally. If parent grid is vertical, the element will be offset vertically. If parent grid is both horizontal and vertical, the element will be offset both horizontally and vertically. `6` can be replaced with any number between `1` and `$maxColumns` (see configure with Sass).
- `.o-6-x`: Use on a cell to force it to start at grid line 6 in the horizontal axis, independently of whether parent grid is horizontal or vertical or both. `6` can be replaced with any number between `1` and `$maxColumns` (see configure with Sass).
- `.o-6-y`: Use on a cell to force it to start at grid line 6 in the vertical axis, independently of whether parent grid is horizontal or vertical or both. `6` can be replaced with any number between `1` and `$maxColumns` (see configure with Sass).
- `.o-md-6`: Use on a cell to force it to start at grid line 6 on medium viewport widths and above. If parent grid is horizontal, this will offset the element horizontally. If parent grid is vertical, the element will be offset vertically. If parent grid is both horizontal and vertical, the element will be offset both horizontally and vertically. `md` can be replaced with any key in `$breakpoints` (see configure with Sass). `6` can be replaced with any number between `1` and `$maxColumns` (see configure with Sass).
- `.o-md-6-x`: Use on a cell to force it to start at grid line 6 in the horizontal axis on medium viewport widths and above, independently of whether parent grid is horizontal or vertical or both. `md` can be replaced with any key in `$breakpoints` (see configure with Sass). `6` can be replaced with any number between `1` and `$maxColumns` (see configure with Sass).
- `.o-md-6-y`: Use on a cell to force it to start at grid line 6 in the vertical axis on medium viewport widths and above, independently of whether parent grid is horizontal or vertical or both. `md` can be replaced with any key in `$breakpoints` (see configure with Sass). `6` can be replaced with any number between `1` and `$maxColumns` (see configure with Sass).

## Configuration
Griddie uses CSS custom properties, which allow you to configure some of its behaviour. 
The properties can be defined on any parent element of `.g` (including the `.g` itself and :root) 
and Griddie will use them. Below is a list of the properties you can use and their default values.

```css
.g {
  /* The number of columns in a grid. Should not exceed $maxColumns (see configure with Sass). */
  --columns: 12;
  /* The number of rows in a grid. Should not exceed $maxRows (see configure with Sass). */
  --rows: 12;
  /* Horizontal space between columns. */
  --gap-x: 1rem;
  /* Vertical space between rows. */
  --gap-y: 1rem;
  /**
   * Addtionally, based on your $breakpoints (see configure with Sass), you can use properties in
   * the following format to overwrite spacing at specific breakpoints: 
   */
  --gap-sm-x
  --gap-md-y
  --gap-lg-x
}
```

### Configure with Sass
If you're using Sass, you can configure additional variables/options by 
defining these before you include the Griddie CSS. 
Below is a list of these variables and their default values:

```scss
/*
 * Used to generate cell and offset classes, e.g. `.c-md-4` and `.o-lg-2`.
 * You can add/remove as many breakpoints as you need here.
 * More breakpoints = larger file size.
 */
$breakpoints: (
  'sm': 480px,
  'md': 720px,
  'lg': 960px,
);

/*
 * Used to generate cell and offset classes, e.g. `.c-4` and `.o-2`.
 * You can increase/decrease these as much as you need.
 * These do not have to be the same. For example, if you only need 
 * horizontal grids, you could reduce $maxRows to 1 to reduce file size.
 * Higher numbers = larger file size.
 */
$maxColumns: 12;
$maxRows: 12;
```

## Dev
```sh
npm i
```

```sh
npm run dev
```

> Tests will run on commit. If any of the tests fail, the commit will fail. To bypass, pass `--no-verify`. Example: `git commit -m "WIP" --no-verify`.

## Tech stack
- Bundling: [esbuild](https://esbuild.github.io/)
- Dev server: [fastify](https://www.fastify.io/)
- Hot reloading: [@olefjaerestad/hmr](https://www.npmjs.com/package/@olefjaerestad/hmr)
- Testing: [Jest](https://jestjs.io/en/) and [Playwright](https://playwright.dev/)
- Documentation: [Storybook](https://storybook.js.org/)

## Build for prod
```sh
npm i
```

```sh
npm run build
```

## Build docs
Build a new version of the Griddie documentation website.

```sh
npm i
```

```sh
npm run build:docs
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

## Interactive documentation
```sh
npm run storybook
```

## TODO:
- Add e2e tests.
- Make sure docs are correct after battle testing Griddie.
