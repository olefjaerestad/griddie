import csso from 'csso';
import esBuild from "esbuild";
import fs from 'fs';
import path from 'path';
import sassPlugin from 'esbuild-plugin-sass';
import { fileURLToPath } from 'url';
import { Server } from "@olefjaerestad/hmr";

const NODE_ENV = JSON.stringify(process.env.NODE_ENV);
const IS_PROD = NODE_ENV === '"production"';
const IS_DEV = NODE_ENV === '"development"';

const BUILD_OPTIONS = {
  bundle: true,
  define: {
    '__NODE_ENV__': NODE_ENV,
    'process.env.NODE_ENV': NODE_ENV
  },
  entryPoints: IS_PROD ? ['src/style.scss'] : ['src/index.tsx', 'src/style.scss'],
  incremental: !IS_PROD,
  minify: IS_PROD,
  outdir: IS_PROD ? 'build' : 'dev',
  plugins: [
    sassPlugin(),
  ],
  sourcemap: !IS_PROD,
}

if (IS_DEV) { 
  const hmrServer = new Server({
    hostname: 'localhost',
    port: 3001,
    watch: {
      notifyClientsOnFileChange: false,
      paths: [
        path.join(fileURLToPath(import.meta.url), '../src'),
      ],
    },
  });

  hmrServer.addEventListener('change', (e) => {
    let changedFile = e.value.filename;
    const isCssChange = changedFile.endsWith('.scss');
    
    if (isCssChange) {
      changedFile = 'style.css';
    }

    esBuild.build(BUILD_OPTIONS)
      .then(() => {
        hmrServer.notifyConnectedClients({
          type: 'change',
          filename: changedFile,
        });
      })
      .catch((e) => console.error(e.message));
  });
} else {
  esBuild.build(BUILD_OPTIONS)
    .then(() => {
      /** Compress CSS */
      fs.readFile(path.join('./build/style.css'), 'utf-8', (err, css) => {
        if (err) throw err;
        const compressedCss = csso.minify(css, {forceMediaMerge: true}).css;
        const reduction = (css.length - compressedCss.length) / css.length * 100;

        fs.writeFile(path.join('./build/style.css'), compressedCss, {encoding: 'utf-8'}, () => {
          console.info(
            `Project built successfully. CSS minified successfully - ` + 
            `${Math.round(reduction)}% reduction, from ${css.length}B to ${compressedCss.length}B.`
          );
          process.exit(0);
        });
      });
    })
    .catch((error) => {
      console.error('Error when building project:', error);
      process.exit(1);
    });
}
