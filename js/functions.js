// Выключение скролла
const disableScroll = () => {
	const fixBlocks = document?.querySelectorAll('.fixed-block')
	const pagePosition = window.scrollY
	const paddingOffset = `${window.innerWidth - vars.bodyEl.offsetWidth}px`

	vars.htmlEl.style.scrollBehavior = 'none'
	fixBlocks.forEach(el => {
		el.style.paddingRight = paddingOffset
	})
	vars.bodyEl.style.paddingRight = paddingOffset
	vars.bodyEl.classList.add('dis-scroll')
	vars.bodyEl.dataset.position = pagePosition
	vars.bodyEl.style.top = `-${pagePosition}px`
}

// Включение скролла
const enableScroll = () => {
	const fixBlocks = document?.querySelectorAll('.fixed-block')
	const body = document.body
	const pagePosition = parseInt(vars.bodyEl.dataset.position, 10)
	fixBlocks.forEach(el => {
		el.style.paddingRight = '0px'
	})
	vars.bodyEl.style.paddingRight = '0px'

	vars.bodyEl.style.top = 'auto'
	vars.bodyEl.classList.remove('dis-scroll')
	window.scroll({
		top: pagePosition,
		left: 0,
	})
	vars.bodyEl.removeAttribute('data-position')
	vars.htmlEl.style.scrollBehavior = 'smooth'
}

// Удаление класса с элемента
const removeClass = (element, classEl) => element.classList.remove(classEl)

// Добавление класса на элемент
const addClass = (element, classEl) => element.classList.add(classEl)

// Проверка на содержание класса в элементе
const containsClass = (element, classEl) => element.classList.contains(classEl)

// Найти элемент по селектору
const find = selector => document.querySelector(selector)

// Найти все элементы по селектору
const findAll = selector => document.querySelectorAll(selector)

// Включение скролла с последущей прокруткой к секции при нажатии на элемент меню
const scrollToSectionByClickOnAnchors = () => {
	if (!containsClass(vars.menu, 'menu--active')) return

	removeClass(vars.burger, 'burger--active')
	removeClass(vars.menu, 'menu--active')
	enableScroll()
}

// Отправка формы
async function formSend(e, form) {
	e.preventDefault()
	let error = formValidate(form)
	let formData = new FormData(form)
	const buttonSubmit = form.querySelector('[data-submit]')

	if (error) {
		alert('Заполните обязательные поля')
	} else {
		form.classList.add('_sending')
		buttonSubmit.textContent = 'Загрузка'
		let response = await fetch('../mail.php', {
			method: 'POST',
			body: formData,
		})

		if (response.ok) {
			let result = await response.json()
			alert(result.message)
			form.reset()
			form.classList.remove('_sending')
			buttonSubmit.textContent = 'Насладиться кофе'
		} else {
			alert('Ошибка отправки формы')
			form.classList.remove('_sending')
			buttonSubmit.textContent = 'Насладиться кофе'
		}
	}
}

// Валидация формы
function formValidate(form) {
	let error = 0
	let formReq = form.querySelectorAll('._req')
	formReq?.forEach((req, index) => {
		const input = req
		const inputType = input?.getAttribute('data-input-type') || null
		formRemoveError(input)

		if (inputType) {
			if (input.value.length < 16 || input.value === '') {
				formAddError(input)
				error++
			}
		} else {
			if (input.value === '') {
				formAddError(input)
				error++
			}
		}
	})

	return error
}

// Добавление класса ошибки
function formAddError(input) {
	input.parentElement.classList.add('_error')
	input.classList.add('_error')
}

// Удаление класса ошибки
function formRemoveError(input) {
	input.parentElement.classList.remove('_error')
	input.classList.remove('_error')
}

// Загрузка recaptcha
const captchaLoad = () => {
	if (vars.isCaptchaLoad) return

	const script = document.createElement('script')
	script.src = 'https://www.google.com/recaptcha/api.js'
	script.async = true
	script.defer = true
	script.onload = () => {
		const onloadCallback = () => {
			grecaptcha.render('recaptcha_contact', {
				sitekey: '6LcCpIMcAAAAAGC3SnqJREDkYsG9zpuMksRr410B',
				callback: () => console.log('recaptcha is loading!'),
			})
		}
	}
	document.head.appendChild(script)
	vars.isCaptchaLoad = true
}

const modalOpen = e => {
	const btn = e.target
	const typeModal = btn.getAttribute('data-modal-btn')
	const modal = document.querySelector(`[data-modal=${typeModal}]`)
	if (!containsClass(modal, 'is-open')) {
		addClass(modal, 'is-open')
	}
}

const modalClose = (e, modal) => {
	const el = e.target

	if (el.hasAttribute('data-close')) {
		if (!containsClass(modal, 'is-open')) {
			return
		}
		removeClass(modal, 'is-open')
	}
}
