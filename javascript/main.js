// Google Analytics
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-51322296-1']);
_gaq.push(['_trackPageview']);

(function() {
	var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
	ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
	var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

// Hamburger menu toggle functionality
document.addEventListener('DOMContentLoaded', function() {
	var navToggle = document.getElementById('nav-toggle');
	var navMenu = document.getElementById('nav-menu');

	navToggle.addEventListener('click', function() {
		navToggle.classList.toggle('active');
		navMenu.classList.toggle('active');
	});

	// Close menu when clicking on a link (for mobile)
	var menuLinks = navMenu.getElementsByTagName('a');
	for (var i = 0; i < menuLinks.length; i++) {
		menuLinks[i].addEventListener('click', function() {
			navToggle.classList.remove('active');
			navMenu.classList.remove('active');
		});
	}
});