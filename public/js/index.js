(function() {
  this.Phishing = this.Phishing || {};

  Phishing.main = (function() {
    var init;
    init = function() {
      return $('html,body').on('wheel', function(e) {
        return console.log(e);
      });
    };
    return {
      init: init
    };
  })();

}).call(this);
