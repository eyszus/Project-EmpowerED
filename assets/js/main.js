/*
	Miniport by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$nav = $('#nav');

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Scrolly.
		$('#nav a, .site-header a, .scrolly').scrolly({
			speed: 1000,
			offset: function() { return $nav.height(); }
		});

	// Mobile nav toggle.
		var $navToggle = $nav.find('.nav-toggle'),
			$navMenu = $('#nav-menu');

		$navToggle.on('click', function() {
			var open = $nav.toggleClass('nav-open').hasClass('nav-open');
			$navToggle.attr('aria-expanded', open);
			$navToggle.attr('aria-label', open ? 'Close menu' : 'Open menu');
		});

		$navMenu.find('a').on('click', function() {
			$nav.removeClass('nav-open');
			$navToggle.attr('aria-expanded', 'false');
			$navToggle.attr('aria-label', 'Open menu');
		});

	// Lightbox for gallery images.
		var $lightbox = $('#lightbox'),
			$lightboxImg = $('#lightbox-img'),
			$lightboxCaption = $('#lightbox-caption');

		function openLightbox(src, caption, alt) {
			$lightboxImg.attr({ src: src, alt: alt || caption || 'Enlarged visualization' });
			$lightboxCaption.text(caption || '');
			$lightbox.removeAttr('hidden');
			$body.css('overflow', 'hidden');
		}

		function closeLightbox() {
			$lightbox.attr('hidden', 'hidden');
			$lightboxImg.attr({ src: '', alt: '' });
			$body.css('overflow', '');
		}

		$('.gallery-trigger').on('click', function() {
			var $btn = $(this),
				src = $btn.data('src') || $btn.find('img').attr('src'),
				caption = $btn.data('caption') || '',
				alt = $btn.find('img').attr('alt');
			openLightbox(src, caption, alt);
		});

		$lightbox.find('.lightbox-close').on('click', closeLightbox);

		$lightbox.on('click', function(e) {
			if (e.target === $lightbox.get(0)) {
				closeLightbox();
			}
		});

		$(document).on('keydown', function(e) {
			if (e.key === 'Escape' && !$lightbox.is('[hidden]')) {
				closeLightbox();
			}
		});

})(jQuery);
