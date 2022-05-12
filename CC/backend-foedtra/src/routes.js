const {} = require('./handler');

const routes = [
  {
    method: 'GET', 
    path: '/',
    config: { 
      auth: 'firebase' 
    },
    handler(request, reply) { 
      return "Can't touch this!" 
    }
  },
//   {
//     method: 'POST',
//     path: '/',
//     handler: ,
//   },
//   {
//     method: 'GET',
//     path: '/',
//     handler: ,
//   },
//   {
//     method: 'PUT',
//     path: '/',
//     handler: ,
//   },
//   {
//     method: 'DELETE',
//     path: '/books/{bookId}',
//     handler: ,
//   },
];

module.exports = routes;
