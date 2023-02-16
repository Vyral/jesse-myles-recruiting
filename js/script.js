$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') ) {
        $(this).collapse('hide');
    }
});
//for blog archive toggling
$('.tree-toggle').click(function () {
	$(this).parent().children('ul.tree').toggle(200);
});

$('#contact').click(function(){
	$('.modal-wrapper').show();
});
$('#contact-bottom').click(function(){
	$('.modal-wrapper').show();
});

$('.exit').click(function(){
	$('.modal-wrapper').fadeOut();
});


$(document).ready(function() {
//Fluidvid.js

  (function ( window, document, undefined ) {

    /*
     * Grab all iframes on the page or return
     */
    var iframes = document.getElementsByTagName( 'iframe' );

    /*
     * Loop through the iframes array
     */
    for ( var i = 0; i < iframes.length; i++ ) {

      var iframe = iframes[i],

      /*
         * RegExp, extend this if you need more players
         */
      players = /www.youtube.com|player.vimeo.com/;

      /*
       * If the RegExp pattern exists within the current iframe
       */
      if ( iframe.src.search( players ) > 0 ) {

        /*
         * Calculate the video ratio based on the iframe's w/h dimensions
         */
        var videoRatio        = ( iframe.height / iframe.width ) * 100;

        /*
         * Replace the iframe's dimensions and position
         * the iframe absolute, this is the trick to emulate
         * the video ratio
         */
        iframe.style.position = 'absolute';
        iframe.style.top      = '0';
        iframe.style.left     = '0';
        iframe.width          = '100%';
        iframe.height         = '100%';

        /*
         * Wrap the iframe in a new <div> which uses a
         * dynamically fetched padding-top property based
         * on the video's w/h dimensions
         */
        var wrap              = document.createElement( 'div' );
        wrap.className        = 'fluid-vids';
        wrap.style.width      = '100%';
        wrap.style.position   = 'relative';
        wrap.style.paddingTop = videoRatio + '%';

        /*
         * Add the iframe inside our newly created <div>
         */
        var iframeParent      = iframe.parentNode;
        iframeParent.insertBefore( wrap, iframe );
        wrap.appendChild( iframe );

      }

    }

  })( window, document );

//owl carousel


	  var owl = $("#owl-carousel");
    var headerCarousel = $("#header-carousel");

    headerCarousel.owlCarousel({
      // loop: true,
      item: 4,
      autoplay: 2000,
      autoplay: true,
      responsiveClass: true,
      autoplayHoverPause: true,
      nav: false,
      responsive:{
          0:{
              items:1,
          },
          600:{
              items:2,
          },
          1000:{
              items:2,
          },
          1280:{
            items: 3,
          },
          1366:{
            items: 3
          },
          1440:{
            items: 3
          },
          1920:{
            items: 4
          }
      }
    })
    

    owl.owlCarousel({
      items: 2,
      loop: true,
      margin:10,
      autoplay: true,
      responsiveClass: true,
      autoplayHoverPause: true,
      nav: true,
      responsive:{
          0:{
              items:1,
          },
          600:{
              items:1,
          },
          1000:{
              items:1,
          }
      }
    })

	  // Custom Navigation Events
	  $(".next").click(function(){
	    owl.trigger('owl.next');
	  })
	  $(".prev").click(function(){
	    owl.trigger('owl.prev');
	  })
	  $(".play").click(function(){
	    owl.trigger('owl.play',1000); //owl.play event accept autoPlay speed as second parameter
	  })
	  $(".stop").click(function(){
	    owl.trigger('owl.stop');
	  })
//toggle trancated testimonials to expand
$('.item-toggle').on('click', function(event){
	 var $this = $(this)
	//  console.log($this.parent('div#item-truncated').parent('div.item').children('div#item-expanded'));
	 if($this.parent('div#item-expanded').parent('div.item').children('div#item-truncated').hasClass('item-hide')){
		 $this.parent('div#item-expanded').parent('div.item').children('div#item-truncated').removeClass('item-hide');
		 $this.parent('div#item-expanded').parent('div.item').children('div#item-expanded').addClass('item-hide');
		 console.log($this.siblings('.testimonial').text().length);
	 } else{
		//  console.log($this.parent('div#item-truncated').parent('div.item').children('div#item-expanded'));
		 $this.parent('div').parent('div.item').children('div#item-expanded').removeClass('item-hide');
		 $this.parent('div#item-truncated').parent('div.item').children('div#item-truncated').addClass('item-hide');
			console.log($this.siblings('.testimonial').text().length);
	 }
});

//WELCOME BOX
//only does dropdown animation once per session
if(sessionStorage.getItem('popState') != 'shown'){
$('#welcome-box').addClass('add-welcome-box');
			sessionStorage.setItem('popState','shown')
}
else{
	$('#welcome-box').addClass('welcome-box-seen-before');
}
//hide welcome box the remainder of the session if the X is pressed
if(sessionStorage.getItem('exitState') == 'shown-exit'){
	$('#welcome-box').addClass('hidden');
	$('#hero').addClass('welcome-hidden-margin');
}

$('.welcome-exit').click(function(e){
	$('#welcome-box').addClass('remove-welcome-box');
	$('#welcome-box').removeClass('add-welcome-box');
	sessionStorage.setItem('exitState','shown-exit')
	$('#welcome-box').delay(400).slideUp()
	$('#hero').delay(400).addClass('welcome-hidden-margin');
});

//if subscribed, remove welcome box from page, forever'
if(localStorage.getItem('exitFull') == 'true'){
	$('#welcome-box').addClass('hidden');
	$('#hero').addClass('welcome-hidden-margin');
}

$("#welcome-box-form").submit(function(event) {
	$('#welcome-box').addClass('remove-welcome-box');
	$('#welcome-box').removeClass('add-welcome-box');
	$('#welcome-box').addClass('welcome-0-height');
	localStorage.setItem('exitFull', 'true');
});
// localStorage.setItem('exitFull', 'false')
//end of welcome box


//fadein navbar
$.support.transition = false;
window.addEventListener("scroll", function() {
    if (window.scrollY > 349) {
        $('.navbar').removeClass('nav-start');
        $('.navbar').addClass('scroll-nav-color');
    }
    else {
        $('.navbar').removeClass('scroll-nav-color');
    }
},false);
//add back background color when on mobile and hamburger menu is toggled
$('.navbar')
   .on('shown.bs.collapse', function () {
     $('.navbar').addClass('brand-color')
		 $('.navbar').removeClass('nav-start');
   })
   .on('hidden.bs.collapse', function () {
     $('.navbar').removeClass('brand-color')
});
});
new Clipboard('.feedlink');

$('.feedlink').click(function(){
	$('.feedbox').addClass('feedshow').delay(2000).queue(
		function(){
		$('.feedbox').removeClass('feedshow')
	});
});
