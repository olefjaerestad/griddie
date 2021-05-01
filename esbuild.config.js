import esBuild from "esbuild";
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
  entryPoints: ['src/index.tsx', 'src/style.scss'],
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

    // @ts-ignore: No overload matches this call.
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
  // @ts-ignore: No overload matches this call.
  esBuild.build(BUILD_OPTIONS)
    .then(() => {
      console.info('Project built successfully');
      process.exit(0);
    })
    .catch((error) => {
      console.error('Error when building project:', error);
      process.exit(1);
    });
}
