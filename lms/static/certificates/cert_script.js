    var pageWidth, pageHeight;

    var basePage = {
      width: 1003,
      height: 700,
      scale: 1,
      scaleX: 1,
      scaleY: 1
    };

    $(function(){
      var $page = $('#certificate');

      getPageSize();
      scalePages($page, pageWidth, pageHeight);

      $(window).resize(function () {
        getPageSize();
        scalePages($page, pageWidth, pageHeight);
      });


    function getPageSize() {
      pageHeight = $('#certificate_wrapper').height();
      pageWidth = $('#certificate_wrapper').width();
    }

    function scalePages(page, maxWidth, maxHeight) {
      var scaleX = 1, scaleY = 1;
      scaleX = maxWidth / basePage.width;
      scaleY = maxHeight / basePage.height;
      basePage.scaleX = scaleX;
      basePage.scaleY = scaleY;
      basePage.scale = (scaleX > scaleY) ? scaleY : scaleX;

      if(basePage.scale>1) {
        basePage.scale=1;
      }

      var newLeftPos = Math.abs(Math.floor(((basePage.width * basePage.scale) - maxWidth)/2));
      var newTopPos = Math.abs(Math.floor(((basePage.height * basePage.scale) - maxHeight)/2));

      page.attr('style', 'transform:scale(' + basePage.scale + ');left:' + newLeftPos + 'px;top:' + newTopPos + 'px;');
    }
    });
