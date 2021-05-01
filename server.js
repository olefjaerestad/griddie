import fastify from 'fastify';
import fastifyStatic from 'fastify-static';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

/**
 * Server is just for serving static files during development and tests.
 */
export function createServer(port = 3000) {
  const server = fastify();

  server.register(fastifyStatic, {
    root: getRelativePath('dev'),
    prefix: '/',
    redirect: true,
  });
  server.register(fastifyStatic, {
    root: getRelativePath('node_modules'),
    prefix: '/node_modules/',
    decorateReply: false,
  });
  server.setNotFoundHandler(async (request, reply) => {
    reply.sendFile(
      'index.html',
      getRelativePath('dev')
    );
  });

  server.listen(port, (err, address) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`Web server listening on ${address}`);
    }
  });

  return server;
}

// @ts-ignore: Parameter 'relativePath' implicitly has an 'any' type.ts(7006)
function getRelativePath(relativePath) {
  // Pr. March 4 2021 there are certain issues with using import.meta in Jest.
  // https://github.com/facebook/jest/issues/9430
  // https://apple.stackexchange.com/questions/171530/how-do-i-downgrade-node-or-install-a-specific-previous-version-using-homebrew
  // return path.join(path.dirname(fileURLToPath(import.meta.url)), path);

  return path.join(
    path.dirname(fileURLToPath(pathToFileURL('.').href + '/server.js')),
    relativePath,
  );
}
