
module.exports = function(app) {
    app.use(function *(){
      this.body = '<h1>Hello</h1>';
    });
}