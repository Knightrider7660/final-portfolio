$(document).ready(function(){
	
	
	/* Onepage Active */       
        $('.onepage_nav').onePageNav({
            currentClass : 'active',
            scrollSpeed : 1000,
            filter: ':not(.url)'
        });

    ityped.init(document.querySelector("#ityped"), {
        /* showCursor: false, */
        strings: ['Sukanta', 'a Developer'],
        loop: true,
        cursorChar: "|",

    });
	
	var owl = $('.owl-carousel');
    owl.owlCarousel({
        loop: true,
        items: 1
    });  

	
	
	$('.counter').counterUp({
        delay: 10,
        time: 2000
    });
	
	
	
		
			/* PortfolioIsotope Masonry  */
		
		var $grid = $('.portfolio_active').isotope({
		  itemSelector: '.grid-item',
		  percentPosition: true,
		  masonry: {
			columnWidth: 1
		  }
		});		
		
		
		/* Portfolio Menu Isotope */
		$('.filtering').on( 'click', 'span', function() {
		  var filterValue = $(this).attr('data-filter');
		  $grid.isotope({ filter: filterValue });
		});
			
	   /* Active Js*/

		$('.filtering span').on('click', function(event) {
			$(this).siblings('.active').removeClass('active');
			$(this).addClass('active');
			event.preventDefault();
		});	
		
		
		
	
	
		
new WOW().init();
	
	

});

	//Sticky Header
  $(window).on('scroll',function() {    
   var scroll = $(window).scrollTop();
   if (scroll < 20) {
    $(".sticky").removeClass("scroll-header");
   }else{
    $(".sticky").addClass("scroll-header");
   }
  });

