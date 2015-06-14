(function() {
  this.Phishing = this.Phishing || {};

  Phishing.main = (function() {
    var init;
    init = function() {
      var $article, $hShadow, $header, oldScroll;
      $header = $('#header');
      $hShadow = $('#header .shadow');
      $article = $('.article-item');
      oldScroll = 0;
      window.onresize = function() {
        return $header.height(document.documentElement.clientHeight);
      };
      return $('body').on('wheel', function(e) {
        var $cuTarget, headerHeight, scrollTop;
        $cuTarget = $(e.currentTarget);
        scrollTop = $cuTarget.scrollTop();
        if (Math.abs(scrollTop - oldScroll) > 50) {
          headerHeight = $header.height();
          oldScroll = scrollTop;
          return (function() {
            var opcity, percent;
            percent = scrollTop / headerHeight;
            if (percent > 1) {
              percent = 1;
            }
            opcity = percent * 0.7 + 0.2;
            return $hShadow.css('background', "rgba(0, 0, 0, " + opcity + ")");
          })();
        }
      });
    };
    return {
      init: init
    };
  })();

}).call(this);
