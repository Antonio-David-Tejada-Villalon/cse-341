const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Library API-1',
    description: 'A William Shakespeare Collection',
  },
  host: 'antonio-david-tejada-villalon-l05.onrender.com',
  schemes: ['https'],
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

/* NOTE: if you use the express Router, you must pass in the 
   'endpointsFiles' only the root file where the route starts,
   such as index.js, app.js, routes.js, ... */

swaggerAutogen(outputFile, endpointsFiles, doc);