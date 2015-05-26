$(document).ready(function() {

  $('[data-clampedwidth]').each(function () {
    var elem = $(this);
    var parentPanel = elem.data('clampedwidth');
    var resizeFn = function () {
      var sideBarNavWidth = $(parentPanel).width() - parseInt(elem.css('paddingLeft')) - parseInt(elem.css('paddingRight')) - parseInt(elem.css('marginLeft')) - parseInt(elem.css('marginRight')) - parseInt(elem.css('borderLeftWidth')) - parseInt(elem.css('borderRightWidth'));
      elem.css('width', sideBarNavWidth);
    };

    resizeFn();
    $(window).resize(resizeFn);
  });
  var bodyheight=$("#leftCol").offset();
  $('#arxiv-toggle-list').affix({
    offset: {
      top: bodyheight.top-80
    }
  });

  var $body   = $(document.body);
  var navHeight = $('.navbar').outerHeight(true);

  $body.scrollspy({
    target: '#leftCol',
    offset: navHeight
  });
});