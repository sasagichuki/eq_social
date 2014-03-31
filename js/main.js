$(document).ready(function(){
	
	
	$(function() {
		  $('a[href*=#]:not([href=#])').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

			  var target = $(this.hash);
			  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			  if (target.length) {
				$('html,body').animate({
				  scrollTop: target.offset().top -54
				}, 1000);
				return false;
			  }
			}
		  });
	});//scroll to ends


	$('.menu').waypoint('sticky', {
	  offset: 80 // Apply "stuck" when element 30px from top
	});
	//sticky menu goes here

});/*end Doc ready*/


