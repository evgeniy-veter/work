$(document).ready(function(){

  $('.burger').on('click', function () {
      $(this).toggleClass('active');
      $('.nav_block').slideToggle();
      $('.overlay').toggleClass('active');
  });

  $('.nav_block_close, .overlay').on('click', function () {
      $('.nav_block').slideToggle();
      $('.overlay').toggleClass('active');
      $('.burger').toggleClass('active');
      return false
  });

  $('.open_filter').on('click', function () {
      $('.filter_column').slideToggle();
      return false
  });

  $(document).click( function(event){
    if( $(event.target).closest(".account_wrap").length ) 
      return;
    $(".account_drop").slideUp("5000");
    $(".account").removeClass('active');
    event.stopPropagation();
  });
  $('.account').click( function() {
    $(this).toggleClass('active');
    $("div.account_drop").slideToggle("5000");
  });

  $(document).click( function(event){
    if( $(event.target).closest(".locations_item").length ) 
      return;
    $(".locations_drop").slideUp("5000");
    $(".locations").removeClass('active');
    event.stopPropagation();
  });
  $('.locations').click( function() {
    $(this).toggleClass('active');
    $("div.locations_drop").slideToggle("5000");
  });

  $(document).click( function(event){
    if( $(event.target).closest(".top_tool_phone_item").length ) 
      return;
    $(".top_tool_phone_drop").slideUp("5000");
    $(".top_tool_phone").removeClass('active');
    event.stopPropagation();
  });
  $('.top_tool_phone').click( function() {
    $(this).toggleClass('active');
    $("div.top_tool_phone_drop").slideToggle("5000");
  });

  $(document).click( function(event){
    if( $(event.target).closest(".working_hours_item").length ) 
      return;
    $(".working_hours_drop").slideUp("5000");
    $(".working_hours").removeClass('active');
    event.stopPropagation();
  });
  $('.working_hours').click( function() {
    $(this).toggleClass('active');
    $("div.working_hours_drop").slideToggle("5000");
  });

  $(document).click( function(event){
    if( $(event.target).closest(".language_item").length ) 
      return;
    $(".language_drop").slideUp("5000");
    $(".language").removeClass('active');
    event.stopPropagation();
  });
  $('.language').click( function() {
    $(this).toggleClass('active');
    $("div.language_drop").slideToggle("5000");
  });

  $(document).click( function(event){
    if( $(event.target).closest(".currency_item").length ) 
      return;
    $(".currency_drop").slideUp("5000");
    $(".currency").removeClass('active');
    event.stopPropagation();
  });
  $('.currency').click( function() {
    $(this).toggleClass('active');
    $("div.currency_drop").slideToggle("5000");
  });

  $(document).click( function(event){
    if( $(event.target).closest(".heart_item1").length ) 
      return;
    $(".heart_drop").slideUp("5000");
    $(".heart").removeClass('active');
    event.stopPropagation();
  });
  $('.heart').click( function() {
    $(this).toggleClass('active');
    $("div.heart_drop").slideToggle("5000");
  });

  $(document).click( function(event){
    if( $(event.target).closest(".heart_item2").length ) 
      return;
    $(".heart_drop2").slideUp("5000");
    $(".bar_chart").removeClass('active');
    event.stopPropagation();
  });
  $('.bar_chart').click( function() {
    $(this).toggleClass('active');
    $("div.heart_drop2").slideToggle("5000");
  });

  $(document).click( function(event){
    if( $(event.target).closest(".heart_item3").length ) 
      return;
    $(".heart_drop3").slideUp("5000");
    $(".cart").removeClass('active');
    event.stopPropagation();
  });
  $('.cart').click( function() {
    $(this).toggleClass('active');
    $("div.heart_drop3").slideToggle("5000");
  });

  $(document).click( function(event){
    if( $(event.target).closest(".to_catalog_btn").length ) 
      return;
    $(".catalog_nav_wrap").slideUp("5000");
    $(".to_catalog_btn").removeClass('active');
    event.stopPropagation();
  });
  $('.to_catalog_btn').click( function() {
    $(this).toggleClass('active');
    $("div.catalog_nav_wrap").slideToggle("5000");
  });

	$('select').styler({ selectSearch: true });

  $(".open_popup").magnificPopup({removalDelay:300,type:"inline"});

  $('.nav_hidden > li').hover(function () {
		clearTimeout($.data(this,'timer'));
		$('.drop_nav_list',this).stop(true,true).slideDown(200);
	}, function () {
	   $.data(this,'timer', setTimeout($.proxy(function() {
		 $('.drop_nav_list',this).stop(true,true).slideUp(200);
	   }, this), 100));
	});

  $('ul.main_reviews_tabs').on('click', 'li:not(.active)', function() {
		$(this) .addClass('active').siblings().removeClass('active') .closest('div.box_wrap').find('div.main_reviews_box').removeClass('active').eq($(this).index()).addClass('active');
	});

  $('ul.dop_info_tabs').delegate('li:not(.active)', 'click', function() {
    $(this) .addClass('active').siblings().removeClass('active') .closest('div.dop_info').find('div.dop_info_box').removeClass('active').eq($(this).index()).addClass('active');
	})

  $('ul.blog_article_tabs').delegate('li:not(.active)', 'click', function() {
		$(this).addClass('active').siblings().removeClass('active')
		.parents('div.blog_article').find('div.blog_article_box').hide().eq($(this).index()).fadeIn(150);
	})

  $('ul.products_day_tabs').delegate('li:not(.active)', 'click', function() {
		$(this).addClass('active').siblings().removeClass('active')
		.parents('div.products_day_desc').find('div.products_day_box').hide().eq($(this).index()).fadeIn(150);
	})

  $("#datepicker").datepicker({ monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь','Октябрь', 'Ноябрь', 'Декабрь'],
 dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'], firstDay: 1, });

 $('a[href="#plus"]').click(function () {
    var inp = $(this).parent('span').find('input');
    inp.val(parseInt(inp.val())+1);
    return false;
  });
  $('a[href="#minus"]').click(function () {
    var inp = $(this).parent('span').find('input');
    if(inp.val()>1) inp.val(parseInt(inp.val())-1);
    return false;
  });
  $(".favorites_scrollbar").mCustomScrollbar({
    axis:"y"
  });
  $(".drop_scroll").mCustomScrollbar({
    axis:"y"
  });
  $(".catalog_nav_scroll").mCustomScrollbar({
    axis:"y"
  });
  $(".dop_info_tabs").mCustomScrollbar({
    axis:"y"
  });
  $(".contact_content").mCustomScrollbar({
    axis:"y"
  });

  var accordion = $(".accordion");
    if(accordion.length){
      accordion.each(function(){
        var all_panels = $(this).find('.ac_inner').hide();
        var all_titles = $(this).find('.ac_title');
        $(this).find('.ac_inner.active').slideDown();
        all_titles.on("click", function() {
          var acc_title = $(this);
          var acc_inner =  acc_title.next();
          if(!acc_inner.hasClass('active')){
             all_panels.removeClass('active').slideUp();
             acc_inner.addClass('active').slideDown();
             all_titles.removeClass('active');
             acc_title.addClass('active');
          } else {
            all_panels.removeClass('active').slideUp();
            all_titles.removeClass('active');
          }
        });
      });
    }

    $(function() {
      $('#price_l').change(function () {
      var val = $(this).val();
      $('#slider_price').slider("values",0,val);
      });	
      
      $('#price_r').change( function() {
        var val2 = $(this).val();
        $('#slider_price').slider("values",1,val2);
      });
    
      $( "#slider_price" ).slider({
        range: true,
        min: 0,
        step:10,
        max: 8000,
        values: [ 0, 4300 ],
        slide: function( event, ui ) {
          $('#price_l').val(ui.values[0]);
          $('#price_r').val(ui.values[1]);
        }
      });
        $('#price_l').val($('#slider_price').slider("values",0));
        $('#price_r').val($('#slider_price').slider("values",1));
    });

  $(".main_slider").slick({
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      speed: 1000,
      arrows: false,
  });

  $(".main_about_slider_vertical").slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
    arrows: false,
  });

  $(".nav_list").slick({
      dots: false,
      slidesToShow: 14,
      slidesToScroll: 1,
      infinite: false,
      variableWidth: true,
      arrows: true,
  });

  $(".sub_nav_slider").slick({
      dots: false,
      slidesToShow: 9,
      slidesToScroll: 1,
      infinite: false,
      variableWidth: true,
      arrows: true,
  });

  $(".advantages_slider").slick({
      dots: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      speed: 1000,
      arrows: true,
      prevArrow: $('.advantages_prev1'),
      nextArrow: $('.advantages_next1'),
      responsive: [
        {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
        },
      {
        breakpoint:820 ,
        settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        }
        },
      {
        breakpoint:780 ,
        settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        }
        },
      {
        breakpoint:580 ,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        }
        }
      ]
  });
  $(".main_about_slider").slick({
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      speed: 1000,
      prevArrow: $('.advantages_prev2'),
      nextArrow: $('.advantages_next2'),
  });
  
  $(".text_slider").slick({
      dots: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      speed: 1000,
      prevArrow: $('.advantages_prev4'),
      nextArrow: $('.advantages_next4'),
  });

  $(".main_gallery_slider").slick({
    dots: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
    arrows: true,
    prevArrow: $('.advantages_prev3'),
    nextArrow: $('.advantages_next3'),
    responsive: [
      {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
      },
    {
      breakpoint:820 ,
      settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
      }
      },
    {
      breakpoint:780 ,
      settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
      }
      },
    {
      breakpoint:580 ,
      settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
      }
      }
    ]
    });

    try {
      $('.reviews_slider').each(function(){
        $(this).slick({
          dots: true,
          slidesToShow: $(this).data('show'),
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
          speed: 1000,
          arrows: true,
          prevArrow: $(this).parent().find('.advantages_prev'),
          nextArrow: $(this).parent().find('.advantages_next'),
          responsive: [
            {
            breakpoint: 1000,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
            },
          {
            breakpoint:580 ,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            }
            }
          ]
      });
    });
    } catch {}



    
    $(".main_note_slider2").slick({
      dots: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      speed: 1000,
      arrows: true,
      prevArrow: $('.advantages_prev6'),
      nextArrow: $('.advantages_next6'),
      responsive: [
        {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
        },
      {
        breakpoint:820 ,
        settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        }
        },
      {
        breakpoint:780 ,
        settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        }
        },
      {
        breakpoint:580 ,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        }
        }
      ]
    });
    $(".main_note_slider3").slick({
      dots: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      speed: 1000,
      arrows: true,
      prevArrow: $('.advantages_prev7'),
      nextArrow: $('.advantages_next7'),
      responsive: [
        {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
        },
      {
        breakpoint:820 ,
        settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        }
        },
      {
        breakpoint:780 ,
        settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        }
        },
      {
        breakpoint:580 ,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        }
        }
      ]
    });
    $(".main_reviews_slider").slick({
      dots: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      speed: 1000,
      arrows: true,
      prevArrow: $('.advantages_prev8'),
      nextArrow: $('.advantages_next8'),
      responsive: [
        {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
        },
      {
        breakpoint:820 ,
        settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        }
        },
      {
        breakpoint:780 ,
        settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        }
        },
      {
        breakpoint:580 ,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        }
        }
      ]
    });
    $(".main_team_slider").slick({
      dots: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      speed: 1000,
      arrows: true,
      prevArrow: $('.advantages_prev9'),
      nextArrow: $('.advantages_next9'),
      responsive: [
        {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
        },
      {
        breakpoint:820 ,
        settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        }
        },
      {
        breakpoint:780 ,
        settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        }
        },
      {
        breakpoint:580 ,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        }
        }
      ]
    });
    $(".main_partners_slider").slick({
      dots: true,
      slidesToShow: 6,
      slidesToScroll: 2,
      autoplay: true,
      autoplaySpeed: 3000,
      speed: 1000,
      arrows: true,
      prevArrow: $('.advantages_prev10'),
      nextArrow: $('.advantages_next10'),
      responsive: [
        {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
        },
      {
        breakpoint:820 ,
        settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        }
        },
      {
        breakpoint:780 ,
        settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        }
        },
      {
        breakpoint:580 ,
        settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        }
        }
      ]
    });
    $(".main_rates_slider").slick({
      dots: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      speed: 1000,
      arrows: true,
      prevArrow: $('.advantages_prev11'),
      nextArrow: $('.advantages_next11'),
      responsive: [
        {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
        },
      {
        breakpoint:820 ,
        settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        }
        },
      {
        breakpoint:780 ,
        settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        }
        },
      {
        breakpoint:580 ,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        }
        }
      ]
    });
    $(".main_categories_slider").slick({
      dots: true,
      slidesToShow: 6,
      slidesToScroll: 2,
      autoplay: true,
      autoplaySpeed: 3000,
      speed: 1000,
      arrows: true,
      prevArrow: $('.advantages_prev12'),
      nextArrow: $('.advantages_next12'),
      responsive: [
        {
        breakpoint: 1340,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 2,
        }
        },
      {
        breakpoint:1100 ,
        settings: {
        slidesToShow: 4,
        slidesToScroll: 2,
        }
        },
      {
        breakpoint:780 ,
        settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        }
        },
      {
        breakpoint:580 ,
        settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        }
        }
      ]
    });
    $(".blog_aside_info_slider").slick({
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1000,
        arrows: true,
    });
    $(".blog_aside_slider").slick({
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      speed: 1000,
      arrows: true,
      prevArrow: $('.advantages_prev13'),
      nextArrow: $('.advantages_next13'),
  });
  $(".blog_article_description_slider").slick({
      dots: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: false,
      autoplay: false,
      autoplaySpeed: 3000,
      speed: 1000,
      arrows: false,
      settings: "unslick",
      swipe: false,
      responsive: [
        {
        breakpoint: 980,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          settings: "true",
          swipe: true,
          dots: true,
          infinite: true,
          autoplay: true,
        }
        }
      ]
    
    });

    $(".popular_goods_slider").slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        speed: 1000,
        arrows: false,
    });

    $(".store_stock_slider").slick({
      dots: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      speed: 1000,
      arrows: true,
      prevArrow: $('.advantages_prev14'),
      nextArrow: $('.advantages_next14'),
      responsive: [
        {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
        },
      {
        breakpoint:820 ,
        settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        }
        },
      {
        breakpoint:780 ,
        settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        }
        },
      {
        breakpoint:580 ,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        }
        }
      ]
    });

    $(".products_day_slider_inner").slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        speed: 1000,
        arrows: false,
    });

    $(".products_day_slider").slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        speed: 1000,
        arrows: true,
        prevArrow: $('.advantages_prev15'),
        nextArrow: $('.advantages_next15'),
    });

    $(".comments_product_slider").slick({
      dots: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      speed: 1000,
      arrows: true,
      prevArrow: $('.advantages_prev16'),
      nextArrow: $('.advantages_next16'),
      responsive: [
        {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
        },
      {
        breakpoint:820 ,
        settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        }
        },
      {
        breakpoint:780 ,
        settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        }
        },
      {
        breakpoint:680 ,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        }
        }
      ]
    });

    $(".basket_content_slider").slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        speed: 1000,
        arrows: false,
    });

    $(".basket_sidebar_slider").slick({
      dots: false,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 3000,
      speed: 1000,
      arrows: true,
      prevArrow: $('.prev_sidebar'),
      nextArrow: $('.next_sidebar'),
      responsive: [
      {
        breakpoint:980 ,
        settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        }
        },
      {
        breakpoint:480 ,
        settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        }
        }
      ]
    });

    $(".product_comparison_slider").slick({
      dots: false,
      slidesToShow: 2,
      slidesToScroll: 1,
      infinite: false,
      autoplay: false,
      autoplaySpeed: 3000,
      speed: 1000,
      arrows: false,
      settings: "unslick",
      swipe: false,
      responsive: [
        {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          settings: "true",
          swipe: true,
          dots: false,
          arrows: true,
        }
        }
      ]
    
    });


    
		
});


var darkMode;

if (localStorage.getItem('dark-mode')) {
  // if dark mode is in storage, set variable with that value
  darkMode = localStorage.getItem('dark-mode');
} else {
  // if dark mode is not in storage, set variable to 'light'
  darkMode = 'light';
}

// set new localStorage value
localStorage.setItem('dark-mode', darkMode);

if (localStorage.getItem('dark-mode') == 'dark') {
  // if the above is 'dark' then apply .dark to the body
  $('body').addClass('dark');
  // hide the 'dark' button
  $('.dark-button').hide();
  // show the 'light' button
  $('.light-button').show();
}

// Toggle dark UI

$('.dark-button').on('click', function() {
  $('.dark-button').hide();
  $('.light-button').show();
  $('html').addClass('dark');
  // set stored value to 'dark'
  localStorage.setItem('dark-mode', 'dark');
});

$('.light-button').on('click', function() {
  $('.light-button').hide();
  $('.dark-button').show();
  $('html').removeClass('dark');
  // set stored value to 'light'
  localStorage.setItem('dark-mode', 'light');
});

  $('.img_svg img').each(function(){
    var $img = $(this);
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');
    $.get(imgURL, function(data) {
      var $svg = $(data).find('svg');
      if(typeof imgClass !== 'undefined') {
        $svg = $svg.attr('class', imgClass+' replaced-svg');
      }
      $svg = $svg.removeAttr('xmlns:a');
      if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
        $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
      }
      $img.replaceWith($svg);
    }, 'xml');
  });

  jQuery(document).ready(function() {
    var finalDate = '2022/12/31';
    jQuery('div.counter').countdown(finalDate)
       .on('update.countdown', function(event) {
  
         jQuery(this).html(event.strftime(
        '<div class="days-wrapper col_timer"><span class="days">%D</span><p>дней</p></div>' + 
        '<div class="dot-wrapper col_dot">:</div>' + 
        '<div class="hours-wrapper col_timer"><span class="hours">%H</span><p>часов</p></div>' +  
        '<div class="dot-wrapper col_dot">:</div>' + 
        '<div class="minutes-wrapper col_timer"><span class="minutes">%M</span><p>минут</p></div>' + 
        '<div class="dot-wrapper col_dot">:</div>' + 
        '<div class="seconds-wrapper col_timer"><span class="seconds">%S</span><p>секунд</p></div>'
        )
      );
     }); 
  
    var finalDate = '2022/12/31';
    jQuery('div.counter_sm').countdown(finalDate)
       .on('update.countdown', function(event) {
  
         jQuery(this).html(event.strftime(
        '<div class="days-wrapper col_timer"><span class="days">%D</span></div>' + 
        '<div class="dot-wrapper">:</div>' + 
        '<div class="hours-wrapper col_timer"><span class="hours">%H</span></div>' +  
        '<div class="dot-wrapper">:</div>' + 
        '<div class="minutes-wrapper col_timer"><span class="minutes">%M</span></div>' + 
        '<div class="dot-wrapper">:</div>' + 
        '<div class="seconds-wrapper col_timer"><span class="seconds">%S</span></div>'
        )
      );
     }); 
  });
  
  
  