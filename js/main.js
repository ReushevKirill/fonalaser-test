const menuLinks = findAll('[data-menu-link]')
const modals = findAll('[data-modal]')
const modalOpenBtns = findAll('[data-modal-btn]')
const appointmentForm = find('#appointment_form')
const feedback = find('#feedback_form')
const cost = find('#cost_form')
const forms = [appointmentForm, feedback, cost]

modalOpenBtns.forEach(btn => btn.addEventListener('click', modalOpen))
modals.forEach(modal =>
	modal.addEventListener('click', e => modalClose(e, modal))
)

// Добавление маски к полям ввода номера телефона
const phones = findAll('[data-phone]')
phones.forEach(phone =>
	IMask(phone, {
		mask: '+ (000) 000-00-00',
	})
)

forms.forEach(form => form.addEventListener('submit', e => formSend(e, form)))

menuLinks.forEach(link =>
	link.addEventListener('click', scrollToSectionByClickOnAnchors)
)

// contactPhone.addEventListener('click', captchaLoad)

const swiperWorks = new Swiper(works.slider, works.options)

const swiperTooths = new Swiper(tooths.slider, tooths.options)

const swiperReviews = new Swiper(reviews.slider, reviews.options)

const swiperVideos = new Swiper(videos.slider, videos.options)
