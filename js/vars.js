const vars = {
	windowEl: window,
	documentEl: document,
	htmlEl: document.documentElement,
	bodyEl: document.body,
	burger: document.querySelector('[data-burger]'),
	menu: document.querySelector('[data-menu]'),
	isCaptchaLoad: false,
}

const works = {
	slider: document.querySelector('#swiper_works'),
	options: {
		slidesPerView: 4,
		spaceBetween: 31,
		navigation: {
			nextEl: document.querySelector('#works_next'),
			prevEl: document.querySelector('#works_prev'),
		},
		breakpoints: {
			200: {
				slidesPerView: 1,
			},
			400: {
				slidesPerView: 2,
				spaceBetween: 15,
			},
			650: {
				spaceBetween: 15,
				slidesPerView: 3,
			},
			1090: {
				slidesPerView: 4,
			},
		},
	},
}

const tooths = {
	slider: document.querySelector('#swiper_tooths'),
	options: {
		slidesPerView: 4,
		spaceBetween: 31,
		navigation: {
			nextEl: document.querySelector('#tooths_next'),
			prevEl: document.querySelector('#tooths_prev'),
		},
		breakpoints: {
			200: {
				slidesPerView: 1,
			},
			400: {
				slidesPerView: 2,
				spaceBetween: 15,
			},
			650: {
				spaceBetween: 15,
				slidesPerView: 3,
			},
			1090: {
				slidesPerView: 4,
			},
		},
	},
}

const reviews = {
	slider: document.querySelector('#swiper_reviews'),
	options: {
		slidesPerView: 3,
		spaceBetween: 33,
		navigation: {
			nextEl: document.querySelector('#reviews_next'),
			prevEl: document.querySelector('#reviews_prev'),
		},
		breakpoints: {
			300: {
				slidesPerView: 1,
			},
			530: {
				spaceBetween: 15,
				slidesPerView: 2,
			},
			800: {
				slidesPerView: 3,
				spaceBetween: 10,
			},
			1090: {
				slidesPerView: 3,
			},
		},
	},
}

const videos = {
	slider: document.querySelector('#swiper_videos'),
	options: {
		slidesPerView: 1,
		spaceBetween: 3,
		navigation: {
			nextEl: document.querySelector('#videos_next'),
			prevEl: document.querySelector('#videos_prev'),
		},
	},
}
