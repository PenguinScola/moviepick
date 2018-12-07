const routes = module.exports = require('next-routes')()

routes
    .add({ pattern : '/', page : 'index' })
    .add({ pattern : '/movie/:id', page : 'movie' })