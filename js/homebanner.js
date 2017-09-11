function homeBannerFullWidth(){
  var scrWidth,
  srcHeight,
  dataHomeBanner;

  scrWidth = $(window).width();
  srcHeight = $(window).height();
  dataHomeBanner = '[data-homebanner]';

  $(dataHomeBanner).width(scrWidth).height(srcHeight);
}

homeBannerFullWidth();
  $(window).resize(function(){
      homeBannerFullWidth();
  }
);
