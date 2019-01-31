$(document).ready(function(){
	
	
	$('.vedio').magnificPopup({
		type: 'iframe',
	});
	
	
	
 	/* try {
		$('.slider_area').ripples({
			resolution: 256,
			perturbance: 0.04
		});
	}
	catch (e) {
		$('.error').show().text(e);
	}
	 */
	
	ityped.init(document.querySelector("#ityped"), {
      /* showCursor: false, */
      strings: ['Supportive. ', 'Conscious.', 'Responsible.'],
	  typeSpeed: 55,
		startDelay: 200,
		backSpeed: 20,
		backDelay: 2000,
		loop: true,
		cursorChar: "|",
		
    });
	
	
	 $('#bar1').barfiller({
		barColor:"tomato",
		
	});
	$('#bar2').barfiller({
		barColor:'tomato'
	});
	$('#bar3').barfiller({
		barColor:'tomato'
	});
	$('#bar4').barfiller({
		
		barColor:'tomato'
	});
	$('#bar5').barfiller({
		barColor:'tomato'
	});
	
	/* Onepage Active */       
        $('.onepage_nav').onePageNav({
            currentClass : 'active',
            scrollSpeed : 1000,
            filter: ':not(.url)'
        }); 
		
		
	
			 var owl = $('.owl-carousel');
    owl.owlCarousel({
        loop: true,
        items: 1,
        thumbs: true,
        thumbImage: true,
        thumbContainerClass: 'owl-thumbs',
        thumbItemClass: 'owl-thumb-item'
    });  


	
	
  $('.counter').counterUp({
                delay: 10,
                time: 1000
            });
			
			
			
			
			
		/* PortfolioIsotope Masonry */
		
		var $grid = $('.portfolio_active').isotope({
		  itemSelector: '.grid-item',
		  percentPosition: true,
		  masonry: {
			columnWidth: 1
		  }
		});		
		
		$('.view').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true,
		},
	});
	
		
		/* Portfolio Menu Isotope */
		$('.portfolio_btn').on( 'click', 'button', function() {
		  var filterValue = $(this).attr('data-filter');
		  $grid.isotope({ filter: filterValue });
		});
			
	   /* Active Js*/ 

		$('.portfolio_btn button').on('click', function(event) {
			$(this).siblings('.active').removeClass('active');
			$(this).addClass('active');
			event.preventDefault();
		});	
		
		
		
		
		
new WOW().init();
	
	 // ScrollUp
  $.scrollUp({
    scrollName: 'scrollUp', 
    topDistance: '300', 
    topSpeed: 300, 
    animation: 'fade', 
    animationInSpeed: 200,
    animationOutSpeed: 200, 
    scrollText: '<i class="fas fa-angle-up"></i>', // Text for element
    activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
  });

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
  
 