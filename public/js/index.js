(function() {
  this.Phishing = this.Phishing || {};

  Phishing.main = (function() {
    var init;
    init = function() {
      return $('body').on('wheel', function(e) {
        var $cuTarget, headerHeight, opcity, percent, scrollTop;
        $cuTarget = $(e.currentTarget);
        scrollTop = $cuTarget.scrollTop();
        headerHeight = $('#header').height();
        percent = scrollTop / headerHeight;
        if (percent > 1) {
          percent = 1;
        }
        opcity = percent * 0.7 + 0.2;
        return $('#header .shadow').css('background', "rgba(0, 0, 0, " + opcity + ")");
      });
    };
    return {
      init: init
    };
  })();

}).call(this);
