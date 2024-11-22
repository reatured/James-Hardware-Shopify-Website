

// Section with Editor
$(document).on('shopify:section:load', function(e){ 
  $('#' + e.target.id).find('[data-section]').sectionJs();
}).ready(function() {
  $('[data-section]').each(function(){ $(this).sectionJs() });
});
$.fn.sectionJs = function(){
  var $this = this;
  if($this.data('section') == "SlideShow") {
    $this.find('.hero-slider-active').SlideShow();
  }else if($this.data('section') == "TabWithProduct") {
    $this.find('.product-carousel-4').TabWithProduct();
  }else if($this.data('section') == "CollectionBanner") {
    $this.find('.product-banner-carousel').CollectionBanner();
  }else if($this.data('section') == "FeatureCollection") {
    $this.find('.product-carousel-4_2').FeatureCollectionActive();
  }else if($this.data('section') == "TestimonialSection") {
    $this.find('.testimonial-content-carousel').TestimonialContent();
    $this.find('.testimonial-thumb-carousel').TestimonialThumb();
  }else if($this.data('section') == "BannerWithCollection") {
    $this.BannerWithCollection();
  }else if($this.data('section') == "LatestBlog") {
    $this.find('.blog-carousel-active').LatestBlog();
  }else if($this.data('section') == "BrandLogo") {
    $this.find('.brand-logo-carousel').BrandLogoActive();
  }else if($this.data('section') == "BrandLogo_2") {
    $this.BrandLogo_2_Active();
  }else if($this.data('section') == "CollectionBanner_2") {
    $this.CollectionBanner_2_Active();
  }else if($this.data('section') == "feature_collection_3") {
    $this.feature_collection_3_Active();
  }else if($this.data('section') == "feature_collection_4") {
    $this.feature_collection_4_Active();
  }else if($this.data('section') == "SlideShow_2") {
    $this.SlideShow_2_Active();
  }else if($this.data('section') == "header_5") {
    $this.header_5_Active();
  }else if($this.data('section') == "CollectionThumbnail") {
    $this.find('.group-list-carousel--3').CollectionThumbnail();
  }else if($this.data('section') == "HotDeals") {
    $this.find('.deals-carousel-active').HotDeals();
  }else if($this.data('section') == "CollectionBannerSlideshow") {
    $this.find('.hero-slider-active-4').CollectionBannerSlideshow();
  }else if($this.data('section') == "HeaderSection") {
    $this.HeaderSection();
  }else if($this.data('section') == "CollectionTemplate") {
    $this.CollectionTemplateActivation();
  }else if($this.data('section') == "InstagramSlider") {
    $this.InstagramSection();
  }else if($this.data('section') == "ProductTemplate") {
    $this.ProductTemplate();
  }else if($this.data('section') == "FooterSection") {
    $this.FooterSection();
  }else if($this.data('section') == "FeaturedProduct") {
    $this.FeaturedProduct();
  }else if($this.data('section') == "TeamMember_2") {
    $this.TeamMember_2_active();
  }else if($this.data('section') == "TestimonialSection_2") {
    $this.TestimonialSection_2_active();
  }else if($this.data('section') == "SlideShow_3") {
    $this.SlideShow_3_active();
  }else if($this.data('section') == "ShopCategories") {
    $this.ShopCategories_active();
  }else if($this.data('section') == "CategoriesProduct") {
    $this.CategoriesProduct_active();
  }else if($this.data('section') == "SlideShow_4") {
    $this.SlideShow_4_active();
  }else if($this.data('section') == "SlideShow_5") {
    $this.SlideShow_5_active();
  }else if($this.data('section') == "SlideShow_6") {
    $this.SlideShow_6_active();
  }else if($this.data('section') == "feature_collection_6") {
    $this.feature_collection_6_active();
  }else if($this.data('section') == "SlideShow_7") {
    $this.SlideShow_7_active();
  }else if($this.data('section') == "SlideShow_8") {
    $this.SlideShow_8_active();
  }else if($this.data('section') == "SlideShow_10") {
    $this.SlideShow_10_active();
  }else if($this.data('section') == "SlideShow_9") {
    $this.SlideShow_9_active();
  }else if($this.data('section') == "feature_collection_12") {
    $this.feature_collection_12_active();
  }else if($this.data('section') == "SlideShow_11") {
    $this.SlideShow_11_active();
  }else if($this.data('section') == "DealProduct") {
    $this.DealProduct_active();
  }else if($this.data('section') == "InstagramAlternativeSlider") {
    $this.find('.instagram-alternative-carousel').InstagramAlternativeSlider();
  }else if($this.data('section') == "VideoSlider") {
    $this.VideoSlider();
  }else{}   
}

// Slideshow active js
$.fn.SlideShow = function() {
  var $SlideShowVAR = this;
  $SlideShowVAR.slick({
    fade: true,
    speed: 1000,
    dots: false,
    autoplay: false,
    lazyLoad: 'ondemand',prevArrow: '<button type="button" class="slick-prev"><i class="pe-7s-angle-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="pe-7s-angle-right"></i></button>',responsive: [{
      breakpoint: 992,
      settings: {
        arrows: false,
        dots: true
      }
    }]
  });
  // Background Image JS start
  var bgSelector = $(".bg-img-active");
  bgSelector.each(function (index, elem) {
    var element = $(elem),
        bgSource = element.data('bg');
    element.css('background-image', 'url(' + bgSource + ')');
  });
};
// Tab With Product active js
$.fn.TabWithProduct = function() {
  var $TabWithProductVAR = this;
  $TabWithProductVAR.slick({
    speed: 1000,
    adaptiveHeight: true,prevArrow: '<button type="button" class="slick-prev"><i class="pe-7s-angle-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="pe-7s-angle-right"></i></button>',});
};
// product banner active js
$.fn.CollectionBanner = function() {
  var $CollectionBannerVAR = this;
  $CollectionBannerVAR.slick({
    speed: 1000,
    arrows: false,});
};
// Featured Collection active js
$.fn.FeatureCollectionActive = function() {
  var $FeatureCollectionActiveVAR = this;
  if($FeatureCollectionActiveVAR.length > 0){
    $FeatureCollectionActiveVAR.slick({
      speed: 1000,
      adaptiveHeight: true,prevArrow: '<button type="button" class="slick-prev"><i class="pe-7s-angle-left"></i></button>',
      nextArrow: '<button type="button" class="slick-next"><i class="pe-7s-angle-right"></i></button>',});
  };
};
// Testimonial active js
$.fn.TestimonialContent = function() {
  var $TestimonialContentVAR = this;
  $TestimonialContentVAR.slick({
    arrows: false,
    asNavFor: '.testimonial-thumb-carousel',});
};
$.fn.TestimonialThumb = function() {
  var $TestimonialThumbVAR = this;
  $TestimonialThumbVAR.slick({
    slidesToShow: 3,
    asNavFor: '.testimonial-content-carousel',
    centerMode: true,
    arrows: false,centerPadding: 0,
    focusOnSelect: true
  });
};
// Banner with collection active js
$.fn.BannerWithCollection = function() {
  $('.group-list-carousel').each(function () {
    var $this = $(this);
    var $arrowContainer = $(this).parent().siblings('.section-title-append').find('.slick-append');
    $this.slick({
      infinite: true,prevArrow: '<button type="button" class="slick-prev"><i class="pe-7s-angle-left"></i></button>',
      nextArrow: '<button type="button" class="slick-next"><i class="pe-7s-angle-right"></i></button>',appendArrows: $arrowContainer
    });
  });
};
// Latest blog active js
$.fn.LatestBlog = function() {
  var $LatestBlogVAR = this;
  $LatestBlogVAR.slick({
    speed: 1000,prevArrow: '<button type="button" class="slick-prev"><i class="pe-7s-angle-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="pe-7s-angle-right"></i></button>',});
};
// Brand logo active js
$.fn.BrandLogoActive = function() {
  var $BrandLogoVAR = this;
  $BrandLogoVAR.slick({
    speed: 1000,
    adaptiveHeight: true,prevArrow: '<button type="button" class="slick-prev"><i class="pe-7s-angle-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="pe-7s-angle-right"></i></button>',});
};
// Collection Thumbnail active js
$.fn.CollectionThumbnail = function() {
  var $CollectionThumbnailVAR = this;
  $CollectionThumbnailVAR.slick({
    speed: 1000,
    adaptiveHeight: true,prevArrow: '<button type="button" class="slick-prev"><i class="pe-7s-angle-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="pe-7s-angle-right"></i></button>',});
};
// Hot Deal active js
$.fn.HotDeals = function() {
  var $HotDealsVAR = this;
  $HotDealsVAR.slick({
    speed: 1000,
    adaptiveHeight: false,prevArrow: '<button type="button" class="slick-prev"><i class="pe-7s-angle-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="pe-7s-angle-right"></i></button>',});
};
// Collection Banner active js
$.fn.CollectionBannerSlideshow = function() {
  var $CollectionBannerSlideshowVAR = this;
  $CollectionBannerSlideshowVAR.slick({
    speed: 1000,
    arrows: false,});
};
// Header Section active js
$.fn.HeaderSection = function() {
  // offcanvas minicart button js
  $(".minicart-btn").on('click', function(){
    $("body").addClass('fix');
    $(".minicart-inner").addClass('show')
  })

  $(".offcanvas-close, .minicart-close,.offcanvas-overlay").on('click', function(){
    $("body").removeClass('fix');
    $(".minicart-inner").removeClass('show')
  });
  // Search trigger js
  $(".search-trigger").on('click', function(){
    $(".header-search-box").toggleClass('search-box-open');
  });
  // Sticky menu
  var $window = $(window);
  $window.on('scroll', function () {
    var scroll = $window.scrollTop();
    if (scroll < 300) {
      $(".sticky").removeClass("is-sticky");
    } else {
      $(".sticky").addClass("is-sticky");
    }
  });// Off Canvas Open close
  $(".mobile-menu-btn").on('click', function () {
    $("body").addClass('fix');
    $(".off-canvas-wrapper").addClass('open');
  });

  $(".btn-close-off-canvas,.off-canvas-overlay").on('click', function () {
    $("body").removeClass('fix');
    $(".off-canvas-wrapper").removeClass('open');
  });

  // offcanvas mobile menu
  var $offCanvasNav = $('.mobile-menu'),
      $offCanvasNavSubMenu = $offCanvasNav.find('.dropdown');

  /*Add Toggle Button With Off Canvas Sub Menu*/
  $offCanvasNavSubMenu.parent().prepend('<span class="menu-expand"><i></i></span>');

  /*Close Off Canvas Sub Menu*/
  $offCanvasNavSubMenu.slideUp();

  /*Category Sub Menu Toggle*/
  $offCanvasNav.on('click', 'li a, li .menu-expand', function(e) {
    var $this = $(this);
    if ( ($this.parent().attr('class').match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/)) && ($this.attr('href') === '#' || $this.hasClass('menu-expand')) ) {
      e.preventDefault();
      if ($this.siblings('ul:visible').length){
        $this.parent('li').removeClass('active');
        $this.siblings('ul').slideUp();
      } else {
        $this.parent('li').addClass('active');
        $this.closest('li').siblings('li').removeClass('active').find('li').removeClass('active');
        $this.closest('li').siblings('li').find('ul:visible').slideUp();
        $this.siblings('ul').slideDown();
      }
    }
  });
  
  // Currency and Language
  class LocalizationForm extends HTMLElement {
    constructor() {
      super();
      this.elements = {
        input: this.querySelector('input[name="language_code"], input[name="country_code"]'),
        button: this.querySelector('button'),
        panel: this.querySelector('ul'),
      };
      this.elements.button.addEventListener('click', this.openSelector.bind(this));
      this.elements.button.addEventListener('focusout', this.closeSelector.bind(this));
      this.addEventListener('keyup', this.onContainerKeyUp.bind(this));

      this.querySelectorAll('a').forEach(item => item.addEventListener('click', this.onItemClick.bind(this)));
    }

    hidePanel() {
      this.elements.button.setAttribute('aria-expanded', 'false');
      this.elements.panel.setAttribute('hidden', true);
    }

    onContainerKeyUp(event) {
      if (event.code.toUpperCase() !== 'ESCAPE') return;

      this.hidePanel();
      this.elements.button.focus();
    }

    onItemClick(event) {
      event.preventDefault();
      const form = this.querySelector('form');
      this.elements.input.value = event.currentTarget.dataset.value;
      if (form) form.submit();
    }

    openSelector() {
      this.elements.button.focus();
      this.elements.panel.toggleAttribute('hidden');
      this.elements.button.setAttribute('aria-expanded', (this.elements.button.getAttribute('aria-expanded') === 'false').toString());
    }

    closeSelector(event) {
      const shouldClose = event.relatedTarget && event.relatedTarget.nodeName === 'BUTTON';
      if (event.relatedTarget === null || shouldClose) {
        this.hidePanel();
      }
    }
  }

  customElements.define('localization-form', LocalizationForm);
  
};
// Collection Template active js
$.fn.CollectionTemplateActivation = function() {
  // product view mode change js
  $('.product-view-mode a').on('click', function (e) {
    e.preventDefault();
    var shopProductWrap = $('.shop-product-wrap');
    var viewMode = $(this).data('target');
    $('.product-view-mode a').removeClass('active');
    $(this).addClass('active');
    shopProductWrap.removeClass('grid-view list-view').addClass(viewMode);
  });
};
// Instgram active js
$.fn.InstagramSection = function(){
  var activation = this.find('[data-username]'),
      activeId = activation.attr('id'),
      clientUsername = activation.attr('data-username'),
      instagramHastag = activation.attr('data-hashtag'),
      ItemsLimit = activation.attr('data-limit'),
      imageSize = activation.attr('data-size'),
      instaslider = ".instagram-carousel";

  $.instagramFeed({
    'tag': instagramHastag,
    'username': clientUsername,
    'container': "#"+activeId,
    'display_profile': false,
    'display_biography': false,
    'display_gallery': true,
    'styling': false,
    'items': ItemsLimit,
    'margin': 1,
    'image_size': imageSize
  });

  var $instagramNews = "#"+activeId+instaslider,
      $slidesToShow = activation.data('slidetoshow'),
      $slideshowtablet = activation.data('slideshowtablet'),
      $slideshowsmmobile = activation.data('slideshowsmmobile');

  $($instagramNews).on("DOMNodeInserted", function (e) {
    if (e.target.className == 'instagram_gallery') {
      $("." + e.target.className).slick({
        slidesToShow: $slidesToShow,
        slidesToScroll: 1,
        
        dots: false,
        arrows: false,
        responsive: [
          {
            breakpoint: 480,
            settings: {
              slidesToShow: $slideshowsmmobile,
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: $slideshowtablet,
            }
          },
          {
            breakpoint: 991,
            settings: {
              slidesToShow: $slideshowtablet,
            }
          }

        ]
      })
    }
  });  
};
// Product Template active js
$.fn.ProductTemplate = function() {
  // prodct details slider active
  $('.product-large-slider').slick({
    fade: true,
    arrows: false,asNavFor: '.pro-nav',
    draggable: false,
    swipeToSlide: false,
    touchMove: false
  });
  // product details slider nav active
  $('.pro-nav').slick({
    slidesToShow: 4,
    speed: 1000,
    infinite: true,
    centerPadding: 0,
    focusOnSelect: true,prevArrow: '<button type="button" class="slick-prev"><i class="pe-7s-angle-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="pe-7s-angle-right"></i></button>',responsive: [
      {
        breakpoint: 767,
        settings: {
          arrows: false,
          dots: true
        }
      }
    ]
  });
  
  jQuery('<div class="quantity-button quantity-down dec qtybtn">-</div>').insertBefore('.quantity input');
  jQuery('<div class="quantity-button quantity-up inc qtybtn">+</div>').insertAfter('.quantity input');
  jQuery('.quantity').each(function() {
    var spinner = jQuery(this),
        input = spinner.find('input[type="number"]'),
        btnUp = spinner.find('.quantity-up'),
        btnDown = spinner.find('.quantity-down'),
        min = input.attr('min'),
        max = input.attr('max');

    btnUp.click(function() {
      var oldValue = parseFloat(input.val());
      if (oldValue >= max) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue + 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });

    btnDown.click(function() {
      var oldValue = parseFloat(input.val());
      if (oldValue <= min) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue - 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });
  });
  
  $('.single-product-countdown [data-countdown]').each(function() {
    var $this = $(this), finalDate = $(this).data('countdown');
    $this.countdown(finalDate, function(event) {
      $this.html(event.strftime('<div class="single-countdown"><span class="single-countdown__time">%D</span><span class="single-countdown__text">Days</span></div><div class="single-countdown"><span class="single-countdown__time">%H</span><span class="single-countdown__text">Hours</span></div><div class="single-countdown"><span class="single-countdown__time">%M</span><span class="single-countdown__text">Mins</span></div><div class="single-countdown"><span class="single-countdown__time">%S</span><span class="single-countdown__text">Secs</span></div>'));
    });
  });
      
      var $window_2 = $(window);
      $window_2.on('scroll', function () {
        var scroll = $window_2.scrollTop();
        if (scroll < 500) {
          $(".product-addtocart-sticky").removeClass("is-sticky-2");
        } else {
          $(".product-addtocart-sticky").addClass("is-sticky-2");
        }
      });
};
// Footer Section active js
$.fn.FooterSection = function() {/* Slidebar collapse */ 
      if( $(window).width() < 767 ) {
        $('.widget-collapse h6').on("click", function(){
          $(this).siblings('.widget-collapse-hide').slideToggle();
          $(this).toggleClass('widget-collapse-show');
        });
      }
};
// Featured product active js
$.fn.FeaturedProduct = function() {
  $('.featured-product [data-countdown]').each(function() {
    var $this = $(this), finalDate = $(this).data('countdown');
    $this.countdown(finalDate, function(event) {
      $this.html(event.strftime('<div class="single-countdown"><span class="single-countdown__time">%D</span><span class="single-countdown__text">Days</span></div><div class="single-countdown"><span class="single-countdown__time">%H</span><span class="single-countdown__text">Hours</span></div><div class="single-countdown"><span class="single-countdown__time">%M</span><span class="single-countdown__text">Mins</span></div><div class="single-countdown"><span class="single-countdown__time">%S</span><span class="single-countdown__text">Secs</span></div>'));
    });
  });
};
// Instagram Alternative active js
$.fn.InstagramAlternativeSlider = function() {
  var $InstagramAlternativeSliderVAR = this;
  $InstagramAlternativeSliderVAR.slick({
    speed: 1000,
    adaptiveHeight: false,prevArrow: '<button type="button" class="slick-prev"><i class="pe-7s-angle-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="pe-7s-angle-right"></i></button>',});
};


// Video Slider active js
$.fn.VideoSlider = function() {
  
  /*------------------------------------
	    Autoplay Video Slider
	    ------------------------------------- */
      var slideWrapper = $(".autoplay-video_slider"),
          iframes = slideWrapper.find('.embed-player'),
          lazyImages = slideWrapper.find('.slide-image'),
          lazyCounter = 0;

      // POST commands to YouTube or Vimeo API
      function postMessageToPlayer(player, command) {
        if (player == null || command == null) return;
        player.contentWindow.postMessage(JSON.stringify(command), "*");
      }

      // When the slide is changing
      function playPauseVideo(slick, control) {
        var currentSlide, slideType, startTime, player, video;

        currentSlide = slick.find(".slick-current");
        slideType = currentSlide.attr("class").split(" ")[1];
        player = currentSlide.find("iframe").get(0);
        startTime = currentSlide.data("video-start");

        if (slideType === "youtube") {
          switch (control) {
            case "play":
              postMessageToPlayer(player, {
                "event": "command",
                "func": "mute"
              });
              postMessageToPlayer(player, {
                "event": "command",
                "func": "playVideo"
              });
              break;
            case "pause":
              postMessageToPlayer(player, {
                "event": "command",
                "func": "pauseVideo"
              });
              break;
          }
        }
      }

      // Resize player
      function resizePlayer(iframes, ratio) {
        if (!iframes[0]) return;
        var win = $(".autoplay-video_slider"),
            width = win.width(),
            playerWidth,
            height = win.height(),
            playerHeight,
            ratio = ratio || 16 / 9;

        iframes.each(function () {
          var current = $(this);
          if (width / ratio < height) {
            playerWidth = Math.ceil(height * ratio);
            current.width(playerWidth).height(height).css({
              left: (width - playerWidth) / 2,
              top: 0
            });
          } else {
            playerHeight = Math.ceil(width / ratio);
            current.width(width).height(playerHeight).css({
              left: 0,
              top: (height - playerHeight) / 2
            });
          }
        });
      }

      // DOM Ready
      $(function () {
        // Initialize
        slideWrapper.on("init", function (slick) {
          slick = $(slick.currentTarget);
          setTimeout(function () {
            playPauseVideo(slick, "play");
          }, 1000);
          resizePlayer(iframes, 16 / 9);
        });
        slideWrapper.on("beforeChange", function (event, slick) {
          slick = $(slick.$slider);
          playPauseVideo(slick, "pause");
        });
        slideWrapper.on("afterChange", function (event, slick) {
          slick = $(slick.$slider);
          playPauseVideo(slick, "play");
        });
        slideWrapper.on("lazyLoaded", function (event, slick, image, imageSource) {
          lazyCounter++;
          if (lazyCounter === lazyImages.length) {
            lazyImages.addClass('show');
            // slideWrapper.slick("slickPlay");
          }
        });

        //start the slider
        slideWrapper.slick({
          fade: true,
          autoplay: false,
          draggable: false,
          swipeToSlide: true,
          swipe: true,
          autoplaySpeed: 10000,
          lazyLoad: "progressive",
          pauseOnHover: false,
          pauseOnFocus: false,
          speed: 20,
          arrows: true,prevArrow: '<button type="button" class="slick-prev"><i class="pe-7s-angle-left"></i></button>',
          nextArrow: '<button type="button" class="slick-next"><i class="pe-7s-angle-right"></i></button>',dots: false,
          cssEase: "cubic-bezier(0.87, 0.03, 0.41, 0.9)"
        });
      });

      // Resize event
      $(window).on("resize.slickVideoPlayer", function () {
        resizePlayer(iframes, 16 / 9);
      });
  
};

// Banner with collection active js 
$.fn.BrandLogo_2_Active = function() {
  var swiper = new Swiper(".rts-brandSlide1", {
    slidesPerView: 4,
    spaceBetween: 30,
    slidesPerGroup: 1,
    speed: 1500,
    loop: true,
    loopFillGroupWithBlank: true,
    centeredSlides: false,
    breakpoints: {
      1600: {
        slidesPerView: 6,
      },
      1300: {
        slidesPerView: 6,
      },
      1220: {
        slidesPerView: 5,
      },
      1200: {
        slidesPerView: 5,
      },
      900: {
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 3,
      },
      633: {
        slidesPerView: 3,
      },
      500: {
        slidesPerView: 2,
      },
      0: {
        slidesPerView: 1,
      }
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pag",
      clickable: true,
    }
  });
};
// Banner with collection active js feature_collection_3_Active
$.fn.feature_collection_3_Active = function() {
   var swiper = new Swiper(".rts-sixSlide-over", {
    slidesPerView: 4,
    spaceBetween: 30,
    slidesPerGroup: 1,
    speed: 1500,
    loop: true,
    loopFillGroupWithBlank: true,
    centeredSlides: false,
    breakpoints: {
      1600: {
        slidesPerView: 5,
      },
      1300: {
        slidesPerView: 5.6,
      },
      1220: {
        slidesPerView: 5,
      },
      1200: {
        slidesPerView: 4.5,
      },
      900: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 3,
      },
      633: {
        slidesPerView: 3,
      },
      500: {
        slidesPerView: 2,
      },
      0: {
        slidesPerView: 1,
      }
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pag",
      clickable: true,
    }
  });
};
// Banner with collection active js feature_collection_3_Active
$.fn.CollectionBanner_2_Active = function() {
 // Common-slider-over
  var swiper = new Swiper(".rts-cmmnSlider-over", {
    slidesPerView: 4,
    spaceBetween: 30,
    slidesPerGroup: 2,
    speed: 1500,
    loop: true,
    loopFillGroupWithBlank: true,
    centeredSlides: false,
    breakpoints: {
      1600: {
        slidesPerView: 4,
      },
      1300: {
        slidesPerView: 4,
      },
      1220: {
        slidesPerView: 4,
      },
      1200: {
        slidesPerView: 3,
      },
      900: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 2,
      },
      633: {
        slidesPerView: 2,
      },
      500: {
        slidesPerView: 1,
      },
      0: {
        slidesPerView: 1,
      }
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pag",
      clickable: true,
    }
  });
};

// Banner with collection active js feature_collection_3_Active
$.fn.SlideShow_2_Active = function() {
 // Common-slider-over
   var swiper = new Swiper(".bannerSlide2", {
    slidesPerView: 1,
    spaceBetween: 0,
    slidesPerGroup: 1,
    speed: 700,
    effect: 'fade',
    loop: false,
    loopFillGroupWithBlank: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    centeredSlides: false,
    breakpoints: {
      1500: {
        slidesPerView: 1,
      },
      991: {
        slidesPerView: 1,
      },
      767: {
        slidesPerView: 1,
      },
      575: {
        slidesPerView: 1,
      },
      0: {
        slidesPerView: 1,
      }
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    }
  });

};

// Banner with collection active js feature_collection_3_Active
$.fn.header_5_Active = function() {
 var swiper = new Swiper(".rts-topSlide1", {
    slidesPerView: 3,
    spaceBetween: 0,
    slidesPerGroup: 1,
    speed: 700,
    effect: 'fade',
    loop: false,
    loopFillGroupWithBlank: false,
    autoplay: {
      delay: 3000,
      disableOnInteraction: true
    },
    centeredSlides: false,
    breakpoints: {
      1500: {
        slidesPerView: 1,
      },
      991: {
        slidesPerView: 1,
      },
      767: {
        slidesPerView: 1,
      },
      575: {
        slidesPerView: 1,
      },
      0: {
        slidesPerView: 1,
      }
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    }
  });
};

// Banner with collection active js feature_collection_3_Active
$.fn.TeamMember_2_active = function() {
  var swiper = new Swiper(".rts-cmmnSlider-over2", {
    slidesPerView: 4,
    spaceBetween: 30,
    slidesPerGroup: 1,
    speed: 1500,
    loop: true,
    loopFillGroupWithBlank: true,
    centeredSlides: false,
    breakpoints: {
      1600: {
        slidesPerView: 5,
      },
      1300: {
        slidesPerView: 5.6,
      },
      1220: {
        slidesPerView: 5,
      },
      1200: {
        slidesPerView: 4.5,
      },
      900: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 2,
      },
      633: {
        slidesPerView: 2,
      },
      500: {
        slidesPerView: 1,
      },
      0: {
        slidesPerView: 1,
      }
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pag",
      clickable: true,
    }
  });
};

// Banner with collection active js feature_collection_3_Active
$.fn.TestimonialSection_2_active = function() {
   var menu = ['', '', '', '']
  var swiper = new Swiper(".testimonialSlide", {
    slidesPerView: 5,
    spaceBetween: 10,
    slidesPerGroup: 1,
    speed: 1500,
    loop: true,
    autoplay: true,
    loopFillGroupWithBlank: true,
    centeredSlides: false,
    breakpoints: {
      1500: {
        slidesPerView: 1,
      },
      992: {
        slidesPerView: 1,
      },
      991: {
        slidesPerView: 1,
      },
      600: {
        slidesPerView: 1,
      },
      450: {
        slidesPerView: 1,
      },
      0: {
        slidesPerView: 1,
      }
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (menu[index]) + '</span>';
      },
    },
  });
};



// Banner with collection active js feature_collection_3_Active
$.fn.SlideShow_3_active = function() {

  
  var swiper = new Swiper(".productSlide", {
    slidesPerView: 1,
    slidesPerGroup: 1,
    speed: 500,
    loop: true,
    loopFillGroupWithBlank: true,
    centeredSlides: false,
    navigation: {
      nextEl: ".button-next",
      prevEl: ".button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    }
  });
  
   // productSlide2
  var swiper2 = new Swiper(".productSlide2", {
    slidesPerView: 1,
    slidesPerGroup: 1,
    speed: 500,
    loop: true,
    loopFillGroupWithBlank: true,
    centeredSlides: false,
    navigation: {
      nextEl: ".button-next2",
      prevEl: ".button-prev2",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    }
  });
};

// Banner with collection active js feature_collection_3_Active
$.fn.ShopCategories_active = function() {
   // productSlide2
 var swiper = new Swiper(".rts-cmmnSlider-over3", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 1,
    speed: 1500,
    loop: true,
    loopFillGroupWithBlank: true,
    centeredSlides: false,
    breakpoints: {
      1600: {
        slidesPerView: 3,
      },
      1300: {
        slidesPerView: 3,
      },
      1220: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 3,
      },
      900: {
        slidesPerView: 2,
      },
      576: {
        slidesPerView: 2,
      },
      0: {
        slidesPerView: 1,
      }
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: true
    },
    navigation: {
      prevEl: ".swiper-button-prev",
      nextEl: ".swiper-button-next",
    },
    pagination: {
      el: ".swiper-pag",
      clickable: true,
    }
  });
};

// Banner with collection active js feature_collection_3_Active
$.fn.CategoriesProduct_active = function() {
   var swiper = new Swiper(".rts-cmmnSlider-over", {
    slidesPerView: 4,
    spaceBetween: 30,
    slidesPerGroup: 2,
    speed: 1500,
    loop: true,
    loopFillGroupWithBlank: true,
    centeredSlides: false,
    breakpoints: {
      1600: {
        slidesPerView: 4,
      },
      1300: {
        slidesPerView: 4,
      },
      1220: {
        slidesPerView: 4,
      },
      1200: {
        slidesPerView: 3,
      },
      900: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 2,
      },
      633: {
        slidesPerView: 2,
      },
      500: {
        slidesPerView: 1,
      },
      0: {
        slidesPerView: 1,
      }
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pag",
      clickable: true,
    }
  });
};

// Banner with collection active js feature_collection_3_Active
$.fn.SlideShow_4_active = function() {
   
  var swiper = new Swiper(".rts-topSlide2", {
    slidesPerView: 4,
    spaceBetween: 30,
    slidesPerGroup: 1,
    speed: 1500,
    loop: false,
    autoplay: false,
    loopFillGroupWithBlank: true,
    centeredSlides: false,
    breakpoints: {
      1600: {
        slidesPerView: 1,
      },
      1300: {
        slidesPerView: 1,
      },
      1220: {
        slidesPerView: 1,
      },
      1200: {
        slidesPerView: 1,
      },
      900: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      633: {
        slidesPerView: 1,
      },
      500: {
        slidesPerView: 1,
      },
      0: {
        slidesPerView: 1,
      }
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: true
    },
    pagination: {
      el: ".swiper-pag-2",
      clickable: true,
    }
  });

  
};

// Banner with collection active js feature_collection_3_Active
$.fn.SlideShow_5_active = function() {
  var swiper = new Swiper(".rts-topSlide6", {
    slidesPerView: 3,
    spaceBetween: 0,
    slidesPerGroup: 1,
    speed: 700,
    effect: 'fade',
    loop: false,
    loopFillGroupWithBlank: false,
    autoplay: {
      delay: 3000,
      disableOnInteraction: true
    },
    centeredSlides: false,
    breakpoints: {
      1500: {
        slidesPerView: 1,
      },
      991: {
        slidesPerView: 1,
      },
      767: {
        slidesPerView: 1,
      },
      575: {
        slidesPerView: 1,
      },
      0: {
        slidesPerView: 1,
      }
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    }
  });
};

// Banner with collection active js feature_collection_3_Active
$.fn.feature_collection_4_Active = function() {
   // Common-slider-over
  var swiper = new Swiper(".rts-sixSlide-over", {
    slidesPerView: 4,
    spaceBetween: 30,
    slidesPerGroup: 1,
    speed: 1500,
    loop: true,
    loopFillGroupWithBlank: true,
    centeredSlides: false,
    breakpoints: {
      1600: {
        slidesPerView: 5,
      },
      1300: {
        slidesPerView: 5.6,
      },
      1220: {
        slidesPerView: 5,
      },
      1200: {
        slidesPerView: 4.5,
      },
      900: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 3,
      },
      633: {
        slidesPerView: 3,
      },
      500: {
        slidesPerView: 2,
      },
      0: {
        slidesPerView: 1,
      }
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pag",
      clickable: true,
    }
  });
};


// Banner with collection active js feature_collection_3_Active
$.fn.SlideShow_6_active = function() {
  var swiper = new Swiper(".bannerSlide_6", {
    slidesPerView: 3,
    spaceBetween: 0,
    slidesPerGroup: 1,
    speed: 700,
    effect: 'fade',
    loop: false,
    loopFillGroupWithBlank: false,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    centeredSlides: false,
    breakpoints: {
      1500: {
        slidesPerView: 1,
      },
      991: {
        slidesPerView: 1,
      },
      767: {
        slidesPerView: 1,
      },
      575: {
        slidesPerView: 1,
      },
      0: {
        slidesPerView: 1,
      }
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    }
  });
};


// Banner with collection active js feature_collection_3_Active
$.fn.feature_collection_6_active = function() {
  var swiper = new Swiper(".rts-fiveSlide", {
    slidesPerView: 5,
    spaceBetween: 10,
    slidesPerGroup: 1,
    speed: 1500,
    loop: true,
    loopFillGroupWithBlank: true,
    centeredSlides: false,
    breakpoints: {
      1600: {
        slidesPerView: 5,
      },
      1300: {
        slidesPerView: 5,
      },
      1220: {
        slidesPerView: 5,
      },
      1200: {
        slidesPerView: 4,
      },
      900: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 3,
      },
      633: {
        slidesPerView: 3,
      },
      500: {
        slidesPerView: 2,
      },
      0: {
        slidesPerView: 1,
      }
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pag",
      clickable: true,
    }
  });
};


// Banner with collection active js feature_collection_3_Active
$.fn.SlideShow_7_active = function() {
  var swiper = new Swiper(".bannerSlide_8", {
    slidesPerView: 3,
    spaceBetween: 0,
    slidesPerGroup: 1,
    speed: 700,
    effect: 'fade',
    loop: false,
    loopFillGroupWithBlank: false,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    centeredSlides: false,
    breakpoints: {
      1500: {
        slidesPerView: 1,
      },
      991: {
        slidesPerView: 1,
      },
      767: {
        slidesPerView: 1,
      },
      575: {
        slidesPerView: 1,
      },
      0: {
        slidesPerView: 1,
      }
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    }
  });
};


// Banner with collection active js feature_collection_3_Active
$.fn.SlideShow_8_active = function() {
  var swiper = new Swiper(".bannerSlide2", {
    slidesPerView: 1,
    spaceBetween: 0,
    slidesPerGroup: 1,
    speed: 700,
    effect: 'fade',
    loop: false,
    loopFillGroupWithBlank: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    centeredSlides: false,
    breakpoints: {
      1500: {
        slidesPerView: 1,
      },
      991: {
        slidesPerView: 1,
      },
      767: {
        slidesPerView: 1,
      },
      575: {
        slidesPerView: 1,
      },
      0: {
        slidesPerView: 1,
      }
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    }
  });
};


// Banner with collection active js feature_collection_3_Active
$.fn.SlideShow_10_active = function() {
    // banner slider
  var swiper = new Swiper(".bannerSlide2", {
    slidesPerView: 1,
    spaceBetween: 0,
    slidesPerGroup: 1,
    speed: 700,
    effect: 'fade',
    loop: false,
    loopFillGroupWithBlank: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    centeredSlides: false,
    breakpoints: {
      1500: {
        slidesPerView: 1,
      },
      991: {
        slidesPerView: 1,
      },
      767: {
        slidesPerView: 1,
      },
      575: {
        slidesPerView: 1,
      },
      0: {
        slidesPerView: 1,
      }
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    }
  });
};


// Banner with collection active js feature_collection_3_Active
$.fn.feature_collection_12_active = function() {
     var swiper = new Swiper(".rts-cmmnSlider-over", {
    slidesPerView: 4,
    spaceBetween: 30,
    slidesPerGroup: 2,
    speed: 1500,
    loop: true,
    loopFillGroupWithBlank: true,
    centeredSlides: false,
    breakpoints: {
      1600: {
        slidesPerView: 4,
      },
      1300: {
        slidesPerView: 4,
      },
      1220: {
        slidesPerView: 4,
      },
      1200: {
        slidesPerView: 3,
      },
      900: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 2,
      },
      633: {
        slidesPerView: 2,
      },
      500: {
        slidesPerView: 1,
      },
      0: {
        slidesPerView: 1,
      }
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pag",
      clickable: true,
    }
  });
};


// Banner with collection active js feature_collection_3_Active
$.fn.DealProduct_active = function() {
  var swiper = new Swiper(".productSlide", {
    slidesPerView: 1,
    slidesPerGroup: 1,
    speed: 500,
    loop: true,
    loopFillGroupWithBlank: true,
    centeredSlides: false,
    navigation: {
      nextEl: ".button-next",
      prevEl: ".button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    }
  });
  
};



// Banner with collection active js feature_collection_3_Active
$.fn.SlideShow_9_active = function() {

  
  var swiper = new Swiper(".productSlide_5", {
    slidesPerView: 1,
    slidesPerGroup: 1,
    speed: 500,
    loop: true,
    loopFillGroupWithBlank: true,
    centeredSlides: false,
    navigation: {
      nextEl: ".button-next",
      prevEl: ".button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    }
  });
  
};

// Banner with collection active js feature_collection_3_Active
$.fn.SlideShow_11_active = function() {

  
  var swiper = new Swiper(".productSlide_9", {
    slidesPerView: 1,
    slidesPerGroup: 1,
    speed: 500,
    loop: true,
    loopFillGroupWithBlank: true,
    centeredSlides: false,
    navigation: {
      nextEl: ".button-next",
      prevEl: ".button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    }
  });
  
};
  
  
(function($) {
  "use strict";
  jQuery(document).ready(function(){
	// tooltip active js
	$('[data-toggle="tooltip"]').tooltip();

    // Product grid color variant activation code. 
    $('.product-color li.color-swatch-li label').click(function(){
      $('li.color-swatch-li label').removeClass("active");
      jQuery(this).addClass('active');
      var variantImage = jQuery(this).parent().find('.hidden a').attr('href');
      var variantURL = jQuery(this).parent().find('.product-url a').attr('href');
      jQuery(this).parents('.product-wrapper').find('.popup_cart_image').attr({ src: variantImage, srcset: variantImage });
      jQuery(this).parents('.product-wrapper').find('.product-name a').attr({ href: variantURL }); 
      jQuery(this).parents('.product-wrapper').find('.product-thumb-inner a').attr({ href: variantURL }); 
      return false;
    });


    $('.ajax-spin-cart-drawer').on('click', function() {
      setTimeout(function () {
        $('.minicart-inner').addClass('show');
      },1000);
    });

    
      //preloader
      $(window).on('load', function () {
        $("#rts__preloader").delay(0).fadeOut(1000);
      })
      $(window).on('load', function () {
        $("#weiboo-load").delay(0).fadeOut(1000);
      })
    
     
      /* magnificPopup video view */
      $('.popup-videos').magnificPopup({
        type: 'iframe'
      });
    
    
      // Video Popup
      if ($(".play-video").length) {
        $('.play-video').magnificPopup({
          delegate: 'a',
          type: 'iframe',
          removalDelay: 0,
          callbacks: {
            beforeOpen: function () {
              this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
              this.st.mainClass = this.st.el.attr('data-effect');
            }
          },
          closeOnContentClick: true,
          midClick: true
        });
      }
    
    
      // Search Bar show & hide
      $(document).on('click', '.search-icon', function () {
        $(".search-input-area").addClass("show");
      });
      $(document).on('click', '.search-input-area input', function () {
        $(".search-input-area").addClass("show");
      });
      $(document).on('click', '.search-input-inner before', function () {
        $(".search-input-area").addClass("show");
      });
      $('html').click(function (e) {
        if (!$(e.target).hasClass('show')) {
          $(".search-input-area").removeClass("show");
        }
        $(document).on('click', '.search-close-icon', function () {
          $(".search-input-area").removeClass("show");
        });
      });
    
    
      // Cart Bar show & hide
      $(document).on('click', '.cart-icon', function () {
        $(".cart-bar").addClass("show");
        $(".anywere").addClass("bgshow");
      });
      $(document).on('click', '.close-cart', function () {
        $(".cart-bar").removeClass("show");
        $(".anywere").removeClass("bgshow");
      });
      $(document).on('click', '.anywere', function () {
        $(".cart-bar").removeClass("show");
        $(".anywere").removeClass("bgshow");
      });
    
    
      $(function () {
        var header = $(".start-style");
        $(window).scroll(function () {
          var scroll = $(window).scrollTop();
    
          if (scroll >= 10) {
            header.removeClass('start-style').addClass("scroll-on");
          } else {
            header.removeClass("scroll-on").addClass('start-style');
          }
        });
      });
    
      //Animation
      $(document).ready(function () {
        $('body.hero-anime').removeClass('hero-anime');
      });
    
      //Menu On Hover
      $('body').on('mouseenter mouseleave', '.nav-item', function (e) {
        if ($(window).width() > 750) {
          var _d = $(e.target).closest('.nav-item');
          _d.addClass('show');
          setTimeout(function () {
            _d[_d.is(':hover') ? 'addClass' : 'removeClass']('show');
          }, 1);
        }
      });
      //Switch light/dark
    
      $("#switch").on('click', function () {
        if ($("body").hasClass("dark")) {
          $("body").removeClass("dark");
          $("#switch").removeClass("switched");
        } else {
          $("body").addClass("dark");
          $("#switch").addClass("switched");
        }
      });
    
    
      // Image popup
      $(document).ready(function () {
        $('.image-popup-vertical-fit').magnificPopup({
          type: 'image',
          mainClass: 'mfp-with-zoom',
          gallery: {
            enabled: true
          },
    
          zoom: {
            enabled: true,
    
            duration: 300,
            easing: 'ease-in-out',
    
            opener: function (openerElement) {
    
              return openerElement.is('img') ? openerElement : openerElement.find('img');
            }
          }
        });
      });
    
    
      // Sidebar open & close
      $('.hamburger').on('click', function () {
        $(".hamburger").toggleClass("active");
      });
    
      $('.hamburger').on('click', function () {
        $(".slide-bar").toggleClass("show");
        $(".anywere").addClass("bgshow");
        $(".hamburger").addClass("move");
      });
    
      $('.mobile-hamburger').click('click', function () {
        $(".slide-bar").removeClass("show");
        $(".anywere").removeClass("bgshow");
        $(".hamburger").addClass("move");
      });
    
      $('.anywere').on('click', function () {
        $(".slide-bar").removeClass("show");
        $(".anywere").removeClass("bgshow");
        $(".hamburger").removeClass("active");
      });
    
      $('.action-item').on('click', function () {
        $(".slide-bar").removeClass("show");
        $(".anywere").removeClass("bgshow");
        $(".hamburger").removeClass("active");
      });
    
      $(function () {
        $('.toggle-menu').on('focus', function () {
          $('.rts-menu').toggleClass('display');
        });
      });
      $('.hamburger-1').on('click', function () {
        $(".hamburger-1").toggleClass("active");
      });
    
      $('.hamburger-1').on('click', function () {
        $(".slide-bar").toggleClass("show");
        $(".anywere").addClass("bgshow");
        $(".hamburger-1").addClass("move");
      });
    
      $('.mobile-hamburger-1').click('click', function () {
        $(".slide-bar").removeClass("show");
        $(".anywere").removeClass("bgshow");
        $(".hamburger-1").addClass("move");
      });
    
      $('.anywere').on('click', function () {
        $(".slide-bar").removeClass("show");
        $(".anywere").removeClass("bgshow");
        $(".hamburger-1").removeClass("active");
      });
    
      $('.action-item').on('click', function () {
        $(".slide-bar").removeClass("show");
        $(".anywere").removeClass("bgshow");
        $(".hamburger-1").removeClass("active");
      });
    
      $(function () {
        $('.toggle-menu').on('focus', function () {
          $('.rts-menu').toggleClass('display');
        });
      });
    
    
      /*------------------------------------
    		Mobile Menu
    	--------------------------------------*/
    
      $('#mobile-menu-active').metisMenu();
    
      $('#mobile-menu-active .has-dropdown a').on('click', function (e) {
        e.preventDefault();
      });
    
    
      $(".hamburger-menu > a").on("click", function (e) {
        e.preventDefault();
        $(".slide-bar").toggleClass("show");
        $("body").addClass("on-side");
        $('.body-overlay').addClass('active');
        $(this).addClass('active');
      });
    
      /* Search
      	-------------------------------------------------------*/
      var $searchWrap = $('.search-wrap');
      var $navSearch = $('.nav-search');
      var $searchClose = $('#search-close');
    
      $('.search-trigger').on('click', function (e) {
        e.preventDefault();
        $searchWrap.animate({
          opacity: 'toggle'
        }, 500);
        $navSearch.add($searchClose).addClass("open");
      });
    
      $('.search-close').on('click', function (e) {
        e.preventDefault();
        $searchWrap.animate({
          opacity: 'toggle'
        }, 500);
        $navSearch.add($searchClose).removeClass("open");
      });
    
      function closeSearch() {
        $searchWrap.fadeOut(200);
        $navSearch.add($searchClose).removeClass("open");
      }
    
      $(document.body).on('click', function (e) {
        closeSearch();
      });
    
      $(".search-trigger, .main-search-input").on('click', function (e) {
        e.stopPropagation();
      });
    
    
      //sticky-menu
      $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 200) {
          $(".navbar-sticky").removeClass("sticky-menu");
          $(".navbar-sticky-mobile").removeClass("sticky-menu-mobile");
        } else {
          $(".navbar-sticky").addClass("sticky-menu");
          $(".navbar-sticky-mobile").addClass("sticky-menu-mobile");
        }
      });
    
      // Scroll to top
      var btn = $('.scroll-top-btn');
      $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
          btn.addClass('jumpTop');
        } else {
          btn.removeClass('jumpTop');
        }
      });
    
      btn.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
          scrollTop: 0
        }, '300');
      });
    
      $("#nav ul li a[href^='#']").on('click', function (e) {
        e.preventDefault();
        var hash = this.hash;
    
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 1000, function () {
          window.location.hash = hash;
        });
      });
    
      $("#nav div div a[href^='#']").on('click', function (e) {
        e.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 1000, function () {
          window.location.hash = hash;
        });
    
      });
    
      $("#nav ul li a[href^='#']").on('click', function (e) {
        e.preventDefault();
    
        // store hash
        var hash = this.hash;
    
        // animate
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 1000, function () {
          window.location.hash = hash;
        });
    
      });
    
      $("#nav div div a[href^='#']").on('click', function (e) {
        e.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 1000, function () {
          window.location.hash = hash;
        });
      });
    
      // Filter item
      $(document).on('click', '.filter-btn', function () {
        var show = $(this).data('show');
        $(show).removeClass("hide").siblings().addClass("hide");
      });
    
      $(document).on('click', '.filter-btn', function () {
        $(this).addClass('active').siblings().removeClass('active')
      })
    
    
    
      // Isotope Filter
      var $grid = $('.grid').isotope({
        itemSelector: '.element-item',
        layoutMode: 'fitRows'
      });
      // filter functions
      var filterFns = {
        // show if number is greater than 50
        numberGreaterThan50: function () {
          var number = $(this).find('.number').text();
          return parseInt(number, 10) > 50;
        },
        // show if name ends with -ium
        ium: function () {
          var name = $(this).find('.name').text();
          return name.match(/ium$/);
        }
      };
      // bind filter button click
      $('.filter-buttons-group').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        // use filterFn if matches value
        filterValue = filterFns[filterValue] || filterValue;
        $grid.isotope({
          filter: filterValue
        });
      });
      // change is-checked class on buttons
      $('.button-group').each(function (i, buttonGroup) {
        var $buttonGroup = $(buttonGroup);
        $buttonGroup.on('click', 'button', function () {
          $buttonGroup.find('.checked').removeClass('checked');
          $(this).addClass('checked');
        });
      });
    
      $(function () {
        $(".button").on("click", function () {
          var $button = $(this);
          var $parent = $button.parent();
          var oldValue = $parent.find('.input').val();
    
          if ($button.text() == "+") {
            var newVal = parseFloat(oldValue) + 1;
          } else {
            // Don't allow decrementing below zero
            if (oldValue > 1) {
              var newVal = parseFloat(oldValue) - 1;
            } else {
              newVal = 1;
            }
          }
          $parent.find('a.add-to-cart').attr('data-quantity', newVal);
          $parent.find('.input').val(newVal);
        });
      });
      var countdown = $('.countdown');
    
      if (countdown.length) {
    
        $(function () {
          const second = 1000,
            minute = second * 60,
            hour = minute * 60,
            day = hour * 24;
          let today = new Date(),
            dd = String(today.getDate()).padStart(2, "0"),
            mm = String(today.getMonth() + 1).padStart(2, "0"),
            yyyy = today.getFullYear(),
            nextYear = yyyy + 1,
            dayMonth = "09/30/",
            counterday = dayMonth + yyyy;
    
          today = mm + "/" + dd + "/" + yyyy;
          if (today > counterday) {
            counterday = dayMonth + nextYear;
          }
          //end
    
          const countDown = new Date(counterday).getTime(),
            x = setInterval(function () {
    
              const now = new Date().getTime(),
                distance = countDown - now;
    
              document.getElementById("days").innerText = Math.floor(distance / (day)),
                document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
                document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
                document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
    
            }, 0)
        }());
      }
    
    
      // init Isotope
      var $grid = $('.fill').isotope({
        itemSelector: '.element-item',
        layoutMode: 'fitRows'
      });
      // filter functions
      var filterFns = {
        // show if number is greater than 50
        numberGreaterThan50: function () {
          var number = $(this).find('.number').text();
          return parseInt(number, 10) > 50;
        },
        // show if name ends with -ium
        ium: function () {
          var name = $(this).find('.name').text();
          return name.match(/ium$/);
        }
      };
      // bind filter on select change
      $('.filters-select').on('change', function () {
        // get filter value from option value
        var filterValue = this.value;
        // use filterFn if matches value
        filterValue = filterFns[filterValue] || filterValue;
        $grid.isotope({
          filter: filterValue
        });
      });
    
      $('.custom-select').each(function () {
        var $this = $(this),
          numberOfOptions = $(this).children('option').length;
    
        $this.addClass('select-hidden');
        $this.wrap('<div class="select"></div>');
        $this.after('<div class="select-styled"></div>');
    
        var $styledSelect = $this.next('div.select-styled');
        $styledSelect.text($this.children('option').eq(0).text());
    
        var $list = $('<ul />', {
          'class': 'select-options'
        }).insertAfter($styledSelect);
    
        for (var i = 0; i < numberOfOptions; i++) {
          $('<li />', {
            text: $this.children('option').eq(i).text(),
            rel: $this.children('option').eq(i).val()
          }).appendTo($list);
        }
    
        var $listItems = $list.children('li');
    
    
        $styledSelect.on('click', function (e) {
          e.stopPropagation();
          $('div.select-styled.active').not(this).each(function () {
            $(this).removeClass('active').next('ul.select-options').hide();
          });
          $(this).toggleClass('active').next('ul.select-options').toggle();
        });
    
        $listItems.on('click', function (e) {
          e.stopPropagation();
          $styledSelect.text($(this).text()).removeClass('active');
          $this.val($(this).attr('rel'));
          $list.hide();
        });
    
        $(document).click(function () {
          $styledSelect.removeClass('active');
          $list.hide();
        });
    
      });
      $('.custom-select2').each(function () {
        var $this = $(this),
          numberOfOptions = $(this).children('option').length;
    
        $this.addClass('select-hidden');
        $this.wrap('<div class="select2"></div>');
        $this.after('<div class="select-styled"></div>');
    
        var $styledSelect = $this.next('div.select-styled');
        $styledSelect.text($this.children('option').eq(0).text());
    
        var $list = $('<ul />', {
          'class': 'select-options'
        }).insertAfter($styledSelect);
    
        for (var i = 0; i < numberOfOptions; i++) {
          $('<li />', {
            text: $this.children('option').eq(i).text(),
            rel: $this.children('option').eq(i).val()
          }).appendTo($list);
        }
    
        var $listItems = $list.children('li');
    
    
        $styledSelect.on('click', function (e) {
          e.stopPropagation();
          $('div.select-styled.active').not(this).each(function () {
            $(this).removeClass('active').next('ul.select-options').hide();
          });
          $(this).toggleClass('active').next('ul.select-options').toggle();
        });
    
        $listItems.on('click', function (e) {
          e.stopPropagation();
          $styledSelect.text($(this).text()).removeClass('active');
          $this.val($(this).attr('rel'));
          $list.hide();
        });
    
        $(document).click(function () {
          $styledSelect.removeClass('active');
          $list.hide();
        });
    
      });
    
      var cookies = document.cookie.split(';')
        .reduce((res, c) => {
          const [key, val] = c.trim().split('=').map(decodeURIComponent)
          return Object.assign(res, {
            [key]: val
          })
        }, {});
    
    
      $(".header-topbar5").on('click', function () {
        $(".header-topbar5").addClass("close");
      });
    
      $(".category-item-inner").on('click', function () {
        var cateItem = $(this).parent(".category-item")
        cateItem.toggleClass('show');
        cateItem.siblings(".category-item").removeClass('show');
      });
    
    
      $(".color-item").one('click', function () {
        $(this).toggleClass('selected');
    
      });
    
    
      $(".coupon-click").on('click', function () {
        $(".coupon-input-area").toggleClass('show');
      });
    
    
      var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
      var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
      })
    
    
      // Newsletter popup
      $(document).ready(function () {
        function showpanel() {
          $(".anywere-home").addClass("bgshow");
          $(".rts-newsletter-popup").addClass("popup");
        }
        setTimeout(showpanel, 4000)
      });
    
      $(".anywere-home").on('click', function () {
        $(".rts-newsletter-popup").removeClass("popup")
        $(".anywere-home").removeClass("bgshow")
      });
      $(".newsletter-close-btn").on('click', function () {
        $(".rts-newsletter-popup").removeClass("popup")
        $(".anywere-home").removeClass("bgshow")
      });
    
      // Product details popup
      $(".product-details-popup-btn").on('click', function () {
        $(".product-details-popup-wrapper").addClass("popup")
        $(".anywere").addClass("bgshow")
      });
      $(".product-bottom-action .view-btn").on('click', function () {
        $(".product-details-popup-wrapper").addClass("popup")
        $(".anywere").addClass("bgshow")
      });
      $(".product-details-popup-wrapper .cart-edit").on('click', function () {
        $(".product-details-popup-wrapper").addClass("popup")
        $(".anywere-home").addClass("bgshow")
      });
    
      $(".product-details-close-btn").on('click', function () {
        $(".product-details-popup-wrapper").removeClass("popup")
        $(".anywere").removeClass("bgshow")
      });
      $(".anywere").on('click', function () {
        $(".product-details-popup-wrapper").removeClass("popup")
        $(".anywere").removeClass("bgshow")
      });

    
  });
})(jQuery);


function zoom(e) {
  var zoomer = e.currentTarget;
  e.offsetX ? offsetX = e.offsetX : offsetX = e.touches[0].pageX
  e.offsetY ? offsetY = e.offsetY : offsetX = e.touches[0].pageX
  x = offsetX / zoomer.offsetWidth * 100
  y = offsetY / zoomer.offsetHeight * 100
  zoomer.style.backgroundPosition = x + '% ' + y + '%';
}

var nstSlider = $('.nstSlider');

if (nstSlider.length) {
  $('.nstSlider').nstSlider({
    "left_grip_selector": ".leftGrip",
    "right_grip_selector": ".rightGrip",
    "value_bar_selector": ".bar",
    "value_changed_callback": function (cause, leftValue, rightValue) {
      $(this).parent().find('.leftLabel').text(leftValue);
      $(this).parent().find('.rightLabel').text(rightValue);
    }
  });
}

