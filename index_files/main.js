(function($){
	"use strict";

	jQuery(document).on('ready', function () {

		// Header Sticky
		$(window).on('scroll',function() {
			if ($(this).scrollTop() > 120){  
				$('.navbar-area').addClass("is-sticky");
			}
			else{
				$('.navbar-area').removeClass("is-sticky");
			}
		});

		// Mean Menu
		$('.mean-menu').meanmenu({
			meanScreenWidth: "1199"
		});

		$('.dont-account a').on('click', function(){
			$('#login-tab').removeClass('active');
			$('#register-tab').addClass('active');
			$('#login-from').removeClass('active show');
			$('#register').addClass('active show');
		});

		$('.already-account a').on('click', function(){
			$('#register-tab').removeClass('active');
			$('#login-tab').addClass('active');
			$('#register').removeClass('active show');
			$('#login-from').addClass('active show');
		});

		$(".alert-success").alert();
		window.setTimeout(function() { $(".alert-success").alert('close'); }, 2000);
		
		// Preloader JS
		$(function() {
			$('body').addClass('loaded');
		});

		// Others Option For Responsive JS
		$(".others-option-for-responsive .dot-menu").on("click", function(){
			$(".others-option-for-responsive .container .container").toggleClass("active");
		});

		$(".meanmenu-reveal").on("click", function(){
			$(".others-option-for-responsive .container .container").removeClass("active");
		});

		$(".mean-bar li a").on("click", function(){
			$(".others-option-for-responsive .container .container").removeClass("active");
		});

		// Search Menu JS
		$(".others-option .search-box i").on("click", function(){
			$(".search-overlay").toggleClass("search-overlay-active");
		});
		$(".search-overlay-close").on("click", function(){
			$(".search-overlay").removeClass("search-overlay-active");
		});

		// Popup Video
		$('.popup-youtube').magnificPopup({
			disableOn: 320,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,
			fixedContentPos: false
		});

		// Article Image Slides
		$('.article-image-slides').owlCarousel({
			loop: true,
			nav: true,
			items: 1,
			dots: false,
			autoplayHoverPause: true,
			autoplay: true,
			animateOut: 'fadeOut',
			animateIn: 'fadeIn',
			navText: [
				"<i class='bx bx-chevron-left'></i>",
				"<i class='bx bx-chevron-right'></i>"
			]
		});

		// Nice Select JS
		$('select').niceSelect();

		// Input Plus & Minus Number JS
		$('.input-counter').each(function() {
			var spinner = jQuery(this),
			input = spinner.find('input[type="text"]'),
			btnUp = spinner.find('.plus-btn'),
			btnDown = spinner.find('.minus-btn'),
			min = input.attr('min'),
			max = input.attr('max');
			
			btnUp.on('click', function() {
				var oldValue = parseFloat(input.val());
				if (oldValue >= max) {
					var newVal = oldValue;
				} else {
					var newVal = oldValue + 1;
				}
				spinner.find("input").val(newVal);
				spinner.find("input").trigger("change");
			});
			btnDown.on('click', function() {
				var oldValue = parseFloat(input.val());
				if (oldValue <= min) {
					var newVal = oldValue;
				} else {
					var newVal = oldValue - 1;
				}
				spinner.find("input").val(newVal);
				spinner.find("input").trigger("change");
			});
		});

		// Summernote JS
		$('.summernote').summernote({
			height: 230,      // Set editor height
			minHeight: null,  // Set minimum height of editor
			maxHeight: null,  // Set maximum height of editor
			focus: false,      // Set focus to editable area after initializing summernote
			fontNames: ['DM Sans']
		});

		// Go to Top
		$(function(){
			// Scroll Event
			$(window).on('scroll', function(){
				var scrolled = $(window).scrollTop();
				if (scrolled > 600) $('.go-top').addClass('active');
				if (scrolled < 600) $('.go-top').removeClass('active');
			});  
			// Click Event
			$('.go-top').on('click', function() {
				$("html, body").animate({ scrollTop: "0" },  500);
			});
		});

		// Product +/-
        $(".plus").on('click', function() {
            var  input = $(this).prev('input.qty');
            var val = parseInt(input.val());
            var step = input.attr('step');
            step = 'undefined' !== typeof(step) ? parseInt(step) : 1;
            input.val( val + step ).change();
        });

        $(".minus").on('click', function() {
            var input = $(this).next('input.qty');
            var val = parseInt(input.val());
            var step = input.attr('step');
            step = 'undefined' !== typeof(step) ? parseInt(step) : 1;
            if (val > 0) {
                input.val( val - step ).change();
            }
		});

	});

	$( window ).on( 'elementor/frontend/init', function() {
        elementorFrontend.hooks.addAction( 'frontend/element_ready/widget', function( $scope ) {

			// Categories Slides
			$('.categories-slides').owlCarousel({
				loop: true,
				nav: true,
				dots: false,
				autoplayHoverPause: true,
				autoplay: true,
				items: 1,
				navText: [
					"<i class='bx bx-chevron-left'></i>",
					"<i class='bx bx-chevron-right'></i>"
				]
			});

			// Products Reviews Slides
			$('.products-reviews-slides').owlCarousel({
				loop: false,
				nav: true,
				dots: false,
				autoplayHoverPause: true,
				autoplay: true,
				margin: 30,
				navText: [
					"<i class='bx bx-chevron-left'></i>",
					"<i class='bx bx-chevron-right'></i>"
				],
				responsive: {
					0: {
						items: 1
					},
					768: {
						items: 2
					},
					992: {
						items: 3
					},
					1200: {
						items: 3
					}
				}
			});

			/*
			New Demo JS
			=================================================*/

			// Trending Products Reviews Slides
			$('.trending-products-review-slides').owlCarousel({
				loop: false,
				nav: false,
				dots: false,
				autoplayHoverPause: true,
				autoplay: true,
				margin: 30,
				navText: [
					"<i class='bx bx-chevron-left'></i>",
					"<i class='bx bx-chevron-right'></i>"
				],
				responsive: {
					0: {
						items: 1
					},
					768: {
						items: 2
					},
					992: {
						items: 3
					},
					1200: {
						items: 3
					}
				}
			});

			// Top Video Slides
			$('.top-video-slides').owlCarousel({
				loop: false,
				nav: true,
				dots: false,
				autoplayHoverPause: true,
				autoplay: true,
				margin: 25,
				navText: [
					"<i class='bx bx-chevron-left'></i>",
					"<i class='bx bx-chevron-right'></i>"
				],
				responsive: {
					0: {
						items: 1
					},
					768: {
						items: 2
					},
					992: {
						items: 3
					},
					1200: {
						items: 4
					}
				}
			});
			$('.top-video-slides-two').owlCarousel({
				loop: true,
				nav: false,
				dots: true,
				autoplayHoverPause: true,
				autoplay: true,
				margin: 25,
				stagePadding: 100,
				navText: [
					"<i class='bx bx-chevron-left'></i>",
					"<i class='bx bx-chevron-right'></i>"
				],
				responsive: {
					0: {
						stagePadding: 0,
						items: 1
					},
					768: {
						stagePadding: 0,
						items: 2
					},
					992: {
						stagePadding: 0,
						items: 3
					},
					1200: {
						items: 4
					}
				}
			});

			// Main Banner Wrap Slides
			$('.main-banner-wrap-item-slides').owlCarousel({
				loop: true,
				nav: true,
				dots: false,
				autoplayHoverPause: true,
				autoplay: true,
				margin: 25,
				stagePadding: 150,
				navText: [
					"<i class='bx bx-chevron-left'></i>",
					"<i class='bx bx-chevron-right'></i>"
				],
				responsive: {
					0: {
						items: 1,
						stagePadding: 0,
					},
					768: {
						items: 2,
						stagePadding: 0,
					},
					992: {
						items: 3,
						stagePadding: 0,
					},
					1200: {
						items: 3
					}
				}
			});

			// Top Categories Slides
			$('.top-categories-slides').owlCarousel({
				loop: false,
				nav: true,
				dots: false,
				autoplayHoverPause: true,
				autoplay: true,
				margin: 25,
				navText: [
					"<i class='bx bx-chevron-left'></i>",
					"<i class='bx bx-chevron-right'></i>"
				],
				responsive: {
					0: {
						items: 1
					},
					768: {
						items: 2
					},
					992: {
						items: 3
					},
					1200: {
						items: 6
					}
				}
			});

			// Overview Products Slides
			$('.overview-products-slides').owlCarousel({
				loop: true,
				nav: true,
				dots: false,
				autoplayHoverPause: true,
				autoplay: true,
				navText: [
					"<i class='bx bx-chevron-left'></i>",
					"<i class='bx bx-chevron-right'></i>"
				],
				responsive: {
					0: {
						items: 1
					},
					768: {
						items: 1
					},
					992: {
						items: 1
					},
					1200: {
						items: 1
					}
				}
			});

			// Banner six slides
			$('.products-reviews-slides2').owlCarousel({
				loop: false,
				nav: true,
				dots: false,
				autoplayHoverPause: true,
				autoplay: false,
				margin: 30,
				navText: [
					"<i class='bx bx-chevron-left'></i>",
					"<i class='bx bx-chevron-right'></i>"
				],
				responsive: {
					0: {
						items: 1
					},
					768: {
						items: 2
					},
					992: {
						items: 3
					},
					1200: {
						items: 3
					}
				}
			});


        });
	});
}(jQuery));