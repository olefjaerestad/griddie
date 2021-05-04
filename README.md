# Griddie
Another CSS grid library. That's all.

- [See example site](https://olefjaerestad.github.io/griddie/)
- [Interactive Storybook documentation](https://olefjaerestad.github.io/griddie/storybook/)

## Table of contents
- [Use](#use)
- [Configuration](#configuration)
- [Browser support](#browser-support)
- [Dev](#dev)
- [Todo](#todo)

## <span id="use">Use</span>
`npm i @olefjaerestad/griddie`

The package structure looks like this:

<pre>
<code>
├─ build
   ├─ style.css     The full library. Compiled and minified with default settings.
   ├─ style.scss    The full library. Can be configured with custom options. See 'Configure with Sass'.
   ├─ partials      You can import only the functionality you need from here. style.css/style.scss use all these.
      ├─ _cell.scss
      ├─ _grid.scss
      ├─ _offset.scss
      ├─ _variables.scss
</code>
</pre>

> How to import the files into your project will depend on which bundler, if any, you're using. See [Use with vanilla CSS](#use-vanilla-css) and [Use with Scss/Sass](#use-scss-sass) for examples of common patterns.

### <span id="use-vanilla-css">Vanilla CSS</span>
Without bundler:

```css
/* style.css */

@import './node_modules/@olefjaerestad/griddie/build/style.css';
```

With a bundler that supports importing CSS from node_modules,
the import statement should probably look something like this
(depending on the bundler configuration):

```css
/* style.css */

@import '~@olefjaerestad/griddie/build/style.css';
/* or */
@import '@olefjaerestad/griddie/build/style.css';
/* or */
@import '~@olefjaerestad/griddie';
/* or maybe even */
@import '@olefjaerestad/griddie';
```

### <span id="use-scss-sass">Scss/Sass</span>
If you use Sass, you probably want to import the Sass version of Griddie:

```scss
/* style.scss */

@import '@olefjaerestad/griddie/build/style.scss';
```

Using Sass, you can choose to import only the functionality you need:

```scss
/* style.scss */

/**
 * Variables must be defined before importing the other partials.
 * If you don't provide Sass variables yourself (see 'Configure with Sass'), 
 * _variables.scss must always be imported.
 */
@import '@olefjaerestad/griddie/build/partials/_variables.scss';
@import '@olefjaerestad/griddie/build/partials/_grid.scss';
@import '@olefjaerestad/griddie/build/partials/_cell.scss';
@import '@olefjaerestad/griddie/build/partials/_offset.scss';
```

> If you use Sass, you can configure the variables used by Griddie. See [Configure with Sass](#configure-with-sass).

### <span id="use-markup">Markup</span>
Griddie uses the concept of grids and cells. A cell must always be a direct child of a grid, 
and a grid can consist of zero or more cells. 
At its simplest, you can add a horizontal grid with cells like this:

```html
<div class="g-x">
  <div class="c-4">I am a cell with a width of 4 columns.</div>
  <div class="c-8">I am a cell with a width of 8 columns.</div>
</div>
```

### <span id="use-available-classes">Available classes</span>
#### <span id="use-available-classes-grid">Grid</span>
- `.g-x`: Horizontal grid. Can be combined with vertical grid.
- `.g-y`: Vertical grid. Can be combined with horizontal grid.

#### <span id="use-available-classes-cell">Cell</span>
- `.c-6`: A cell spanning 6 columns or rows, depending on whether parent grid is horizontal or vertical. If parent grid is both horizontal and vertical, the cell spans both 6 columns and rows.
- `.c-6-x`: A cell spanning 6 columns, independently of whether parent grid is horizontal or vertical or both.
- `.c-6-y`: A cell spanning 6 rows, independently of whether parent grid is horizontal or vertical or both.
- `.c-md-6`: A cell spanning 6 columns or rows on medium viewport widths and above, depending on whether parent grid is horizontal or vertical. If parent grid is both horizontal and vertical, the cell spans both 6 columns and rows.
- `.c-md-6-x`: A cell spanning 6 columns on medium viewport widths and above, independently of whether parent grid is horizontal or vertical or both..
- `.c-md-6-y`: A cell spanning 6 rows on medium viewport widths and above, independently of whether parent grid is horizontal or vertical or both.

#### <span id="use-available-classes-celloffset">Cell offset (aka cell positioning)</span>
By default, cells will flow naturally. Use these classes to explicitly position them.

- `.o-6`: Use on a cell to force it to start at grid line 6. If parent grid is horizontal, this will offset the element horizontally. If parent grid is vertical, the element will be offset vertically. If parent grid is both horizontal and vertical, the element will be offset both horizontally and vertically.
- `.o-6-x`: Use on a cell to force it to start at grid line 6 in the horizontal axis, independently of whether parent grid is horizontal or vertical or both.
- `.o-6-y`: Use on a cell to force it to start at grid line 6 in the vertical axis, independently of whether parent grid is horizontal or vertical or both.
- `.o-md-6`: Use on a cell to force it to start at grid line 6 on medium viewport widths and above. If parent grid is horizontal, this will offset the element horizontally. If parent grid is vertical, the element will be offset vertically. If parent grid is both horizontal and vertical, the element will be offset both horizontally and vertically.
- `.o-md-6-x`: Use on a cell to force it to start at grid line 6 in the horizontal axis on medium viewport widths and above, independently of whether parent grid is horizontal or vertical or both.
- `.o-md-6-y`: Use on a cell to force it to start at grid line 6 in the vertical axis on medium viewport widths and above, independently of whether parent grid is horizontal or vertical or both.

> In the examples above, `md` can be replaced with any key in `$breakpoints`. `6` can be replaced with any number between `1` and `$maxColumns`. See [Configure with Sass](#configure-with-sass) for more info.

## <span id="configuration">Configuration</span>
Griddie uses CSS custom properties, which allow you to configure some of its behaviour. 
The properties can be defined on any parent element of `.g-x` or `.g-y` (including itself and :root) 
and Griddie will use them. Below is a list of the properties you can use and their default values.

```css
.g-x,
.g-y {
  /* The number of columns in a grid. Should not exceed $maxColumns (see 'Configure with Sass'). */
  --columns: 12;
  /* The number of rows in a grid. Should not exceed $maxRows (see 'Configure with Sass'). */
  --rows: 12;
  /* Horizontal space between columns. */
  --gap-x: 1rem;
  /* Vertical space between rows. */
  --gap-y: 1rem;
  /**
   * Addtionally, based on your $breakpoints (see 'Configure with Sass'), you can use properties in
   * the following format to overwrite spacing at specific breakpoints. These have no default values: 
   */
  --gap-sm-x
  --gap-md-y
  --gap-lg-x
}
```

### <span id="configure-with-sass">Configure with Sass</span>
If you're using the Sass version of Griddie, you can configure additional 
variables/options by defining these before you [import the Griddie CSS](#use-scss-sass). 
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
 * horizontal grids, you could reduce $maxRows to 0 to reduce file size.
 * Higher numbers = larger file size.
 */
$maxColumns: 12;
$maxRows: 12;
```

## <span id="browser-support">Browser support</span>
| Browser                  | Supported? |
| :--                      | :--        |
| Chrome >= 66             | ✅         |
| Edge >= 16               | ✅         |
| Firefox >= 61            | ✅         |
| Internet Explorer        | ❌         |
| Opera >= 53              | ✅         |
| Safari >= 12.1           | ✅         |
| Chrome for Android > 66  | ✅         |
| Firefox for Android > 61 | ✅         |
| Opera for Android > 47   | ✅         |
| Safari for iOS > 12      | ✅         |

## <span id="dev">Dev</span>
If you want to work with the source code, all you need to do is:

```sh
npm i
```

```sh
npm run dev
```

> Tests will run on commit. If any of the tests fail, the commit will fail. To bypass, pass `--no-verify`. Example: `git commit -m "WIP" --no-verify`.

### <span id="tech-stack">Tech stack</span>
- Bundling: [esbuild](https://esbuild.github.io/)
- Dev server: [fastify](https://www.fastify.io/)
- Hot reloading: [@olefjaerestad/hmr](https://www.npmjs.com/package/@olefjaerestad/hmr)
- Testing: [Jest](https://jestjs.io/en/) and [Playwright](https://playwright.dev/)
- Documentation: [Storybook](https://storybook.js.org/)

### <span id="build-for-prod">Build for prod</span>
```sh
npm i
```

```sh
npm run build
```

### <span id="build-docs">Build docs</span>
Build a new version of the Griddie documentation website.

```sh
npm i
```

```sh
npm run build:docs
```

### <span id="testing">Testing</span>
```sh
npm i
```

#### <span id="unit-tests">Unit tests</span>
```sh
npm run test:unit
```

Watch mode:

```sh
npm run test:unit -- --watch
```

#### <span id="e2e-tests">E2E (End-To-End) tests</span>
```sh
npm run test:e2e
```

#### <span id="all-tests">All tests</span>
```sh
npm run test
```

### <span id="interactive-documentation">Interactive documentation</span>
```sh
npm run storybook
```

## <span id="todo">TODO:</span>
- Add e2e tests.
