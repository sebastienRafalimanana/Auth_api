var http = require('http');
const CONFIG = require('../config');
const app = require('../app')



const server = http.createServer(app)
server.listen(CONFIG.PORT);

console.log("server started on port " + CONFIG.PORT);