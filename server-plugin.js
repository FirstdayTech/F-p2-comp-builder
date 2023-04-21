import apiMiddleware from './src/api/index.js';

export default function apiPlugin() {
  return {
    name: 'api-plugin',
    configureServer(server) {
      server.middlewares.use(apiMiddleware);
    },
  };
}