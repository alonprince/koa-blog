var app = require('koa')();
var [port = 8000] = [process.env.PORT];

require('./config/router.js')(app);


app.listen(port);
console.log(`Your app listen on ${port}`);