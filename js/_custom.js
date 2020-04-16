document.addEventListener("DOMContentLoaded", function() {

	const menuBtn = document.querySelector('.menu-btn');
	const headerNav = document.querySelector('.header__nav');
	menuBtn.addEventListener('click', toggleMenu);

	function toggleMenu() {
		headerNav.classList.toggle('active');
		navMenu.style.display = 'none';
		closeMenu.style.display = 'block';

	};


	var mySwiper = new Swiper('.swiper-container', {
		speed: 400,
		slidesPerView: 3,
		//slidesPerGroup: 3,    
		loop: true,
		navigation: {
			nextEl: '.right',
			prevEl: '.left',
		},

		breakpoints: {
			// when window width is >= 320px
			320: {
				slidesPerView: 1,
				spaceBetween: 0,


			},
			750: {
				slidesPerView: 2,
				spaceBetween: 10,
				slidesPerGroup: 2,

			},
			1040: {
				slidesPerView: 3,
				spaceBetween: 30,
			}
		},
		autoplay: {
			delay: 5000,
		},
	});

});
