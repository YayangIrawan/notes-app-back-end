// import dep, config
const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
  const server = Hapi.server({
    port: 8000,
    host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
    //penerapan CORS pada config pembuatan server (u/ seluruh route)
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  server.route(routes); //route config

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
