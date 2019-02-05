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

	//counter UP
	$('.counter').counterUp({
        delay: 10,
        time: 2000
    });
    //counter UP

new WOW().init();

    // Bar filler
    $('#bar1').barfiller({ barColor: '#8d7e49',duration: 3000 });
    $('#bar2').barfiller({ barColor: '#8d7e49'});
    $('#bar3').barfiller({ barColor: '#8d7e49',duration: 3000  });
    $('#bar4').barfiller({ barColor: '#8d7e49'});
    $('#bar5').barfiller({ barColor: '#8d7e49', duration: 3000 });
    // Bar filler

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

