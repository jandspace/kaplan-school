$(window).load(function() {
	window.sr = ScrollReveal({ 
		reset: 				false, 
		mobile: 			false,
		viewFactor: 		0.2,
		origin: 			'bottom',
		easing: 			'cubic-bezier(0.215, 0.61, 0.355, 1)',
		opacity: 			0,
		scale: 				1,
	});

	// Add class to <html> if ScrollReveal is supported
	if (sr.isSupported()) {
		document.documentElement.classList.add('sr');
	}

// HR Careers - Header
	sr.reveal('.sr-header', {
		origin: 		'top',
		distance: 		'100px',
		delay: 			0,
		duration: 		1000
	});

// HR Careers - Hero
	sr.reveal('.sr-hero-1', {
		origin: 		'top',
		distance: 		'30px',
		delay: 			1000,
		duration: 		1500 
	});
	sr.reveal('.sr-hero-2', {
		origin: 		'top',
		distance: 		'30px',
		delay: 			1500,
		duration: 		2000 
	});
	sr.reveal('.sr-hero-3', {
		origin: 		'top',
		distance: 		'30px',
		delay: 			2000,
		duration: 		2800 
	});
	sr.reveal('.sr-hero-4', {
		origin: 		'bottom',
		distance: 		'80px',
		delay: 			2500,
		duration: 		500 
	});

// HR Careers - Overview
	sr.reveal('.sr-overview-1', {
		distance: 		'100px',
		delay: 			1000,
		duration: 		2000 
	});
	sr.reveal('.sr-overview-2', {
		distance: 		'100px',
		duration: 		1500 
	});

// HR Careers - Business Areas
	sr.reveal('.sr-business-1', {
		distance: 		'100px',
		duration: 		1200 
	});
	sr.reveal('.sr-business-2', {
		distance: 		'180px',
		duration: 		1400 
	}, 400);

// HR Careers - Career Areas
	sr.reveal('.sr-career-1', {
		distance: 		'100px',
		duration: 		1200 
	});
	sr.reveal('.sr-career-2', {
		distance: 		'100px',
		scale: 			1.4,
		duration: 		1000 
	}, 200);

// HR Careers - Our Staff
	sr.reveal('.sr-staff-1', {
		distance: 		'100px',
		duration: 		1200 
	});
	sr.reveal('.sr-staff-2', {
		distance: 		'180px',
		delay: 			500,
		duration: 		1400 
	}, 400);

// HR Careers - Locations
	sr.reveal('.sr-location-1', {
		distance: 		'100px',
		duration: 		1200 
	});
	sr.reveal('.sr-location-2', {
		origin: 		'left',
		distance: 		'40%',
		scale: 			1.75,
		delay: 			0,
		duration: 		1000 
	});
	sr.reveal('.sr-location-3', {
		origin: 		'top',
		distance: 		'20%',
		scale: 			1.75,
		delay: 			500,
		duration: 		1000 
	});
	sr.reveal('.sr-location-4', {
		origin: 		'right',
		distance: 		'40%',
		scale: 			1.75,
		delay: 			1000,
		duration: 		1000 
	});

// HR Careers - Extra
	sr.reveal('.sr-extra-1', {
		distance: 		'100px',
		duration: 		1400 
	}, 300);

// HR Careers - Extra
	sr.reveal('.sr-footer-1', {
		distance: 		'1000px',
		duration: 		1000 
	});
});
