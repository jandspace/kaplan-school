// - - - Bootstrap Carousel Custom - - - - - - - - - - - - - - - - - - - - - //

// Carosel speed
$('#hero-carousel').carousel({
	pause: "false",
	interval: 7500
});

// Mobile Hamburger Menu animation
$(document).ready(function () {
	$(".navbar-toggle").on("click", function () {
		$(this).toggleClass("active");
	});
});

// Collapse Text Change
$(".show-more").button();
$(".show-more").click(function(){
	$(this).button('toggle');
	if ($(this).text()==="View more countries"){
		$(this).button('open');
	}
	else {
		$(this).button('reset');
	}
});

// Accordion Scroll to top of active panel heading
$(function () {
    $('#accordion').on('shown.bs.collapse', function (e) {
        var offset = $(this).find('.collapse.in').prev('.panel-heading');
        if(offset) {
            if ($(window).width() < 768) {
            	$('html,body').animate({ scrollTop: $(offset).offset().top -64 }, 500); //Mobile
            } else {
            	$('html,body').animate({ scrollTop: $(offset).offset().top -90 }, 500); //Desktop, Laptop, Tablet
            }
        }
    }); 
});

// When click on Anchor Link, Close the Nav panel //Nav Collapse on Click
$('.nav a').on('click', function(){
	$('.btn-navbar').click(); //bootstrap 2.x
	$('.navbar-toggle').click() //bootstrap 3.x by Richard
});