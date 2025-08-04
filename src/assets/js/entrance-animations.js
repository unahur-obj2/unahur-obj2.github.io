// Sistema de animaciones de entrada para elementos de la página
class EntranceAnimations {
	constructor() {
		this.initialized = false
		this.observerOptions = {
			threshold: 0.1,
			rootMargin: '0px 0px -50px 0px',
		}
		this.scrollObserver = null
	}

	// Inicializar animaciones cuando se carga la página
	init() {
		if (this.initialized) return

		// Marcar elementos para animación inicial
		this.setupInitialAnimations()

		// Configurar observer para animaciones en scroll (opcional)
		this.setupScrollAnimations()

		this.initialized = true
	}

	// Configurar animaciones que se ejecutan inmediatamente al cargar
	setupInitialAnimations() {
		// Animar elementos del hero
		this.animateHeroElements()

		// Animar elementos principales de la página (excluyendo navegación)
		this.animateMainContent()

		// Animar cards y elementos interactivos (excluyendo navegación)
		this.animateCards()

		// Configurar elementos para animación en scroll
		this.setupScrollElements()
	}

	// Animar elementos del hero section
	animateHeroElements() {
		const heroSection = document.querySelector(
			'section[class*="hero"], section[class*="gradient"]'
		)
		if (!heroSection) return

		// Icono del hero (excluir logo de navegación)
		const heroIcon = heroSection.querySelector(
			'svg:not(.modern-navigation svg), img:not(.modern-navigation img), .icon'
		)
		if (
			heroIcon &&
			!heroIcon.closest('.animate-pulse') &&
			!heroIcon.closest('.modern-navigation')
		) {
			heroIcon.classList.add('animate-on-load', 'hero-icon')
			requestAnimationFrame(() => {
				heroIcon.classList.remove('animate-on-load')
			})
		}

		// Título principal (excluir títulos de navegación)
		const heroTitle = heroSection.querySelector('h1:not(.modern-navigation h1)')
		if (heroTitle) {
			heroTitle.classList.add('animate-on-load', 'hero-title')
			requestAnimationFrame(() => {
				heroTitle.classList.remove('animate-on-load')
			})
		}

		// Subtítulo (excluir subtítulos de navegación)
		const heroSubtitle = heroSection.querySelector(
			'p:not(.modern-navigation p)'
		)
		if (heroSubtitle) {
			heroSubtitle.classList.add('animate-on-load', 'hero-subtitle')
			requestAnimationFrame(() => {
				heroSubtitle.classList.remove('animate-on-load')
			})
		}

		// Botones de acción (excluir botones de navegación)
		const heroButtons = heroSection.querySelector(
			'div[class*="flex"]:not(.modern-navigation *), .hero-buttons'
		)
		if (
			heroButtons &&
			heroButtons.querySelector('a') &&
			!heroButtons.closest('.modern-navigation')
		) {
			heroButtons.classList.add('animate-on-load', 'hero-buttons')
			requestAnimationFrame(() => {
				heroButtons.classList.remove('animate-on-load')
			})
		}
	}

	// Animar contenido principal
	animateMainContent() {
		// Solo seleccionar secciones que no estén dentro de la navegación
		const sections = document.querySelectorAll(
			'main section, .container section, section:not(nav section):not(.modern-navigation section)'
		)

		sections.forEach((section, index) => {
			if (
				index === 0 &&
				!section.closest('.modern-navigation') &&
				!section.closest('nav')
			) {
				// Primera sección después del hero
				section.classList.add(
					'animate-on-load',
					'animate-entrance',
					'fade-in-up'
				)
				requestAnimationFrame(() => {
					section.classList.remove('animate-on-load')
				})
			}
		})

		// Animar títulos principales (excluyendo navegación)
		const mainTitles = document.querySelectorAll(
			'main h2, main h3, .container h2, .container h3'
		)
		mainTitles.forEach((title, index) => {
			if (
				index < 3 &&
				!title.closest('.modern-navigation') &&
				!title.closest('nav')
			) {
				title.classList.add(
					'animate-on-load',
					'animate-entrance',
					'fade-in-down',
					`stagger-${index + 1}`
				)
				requestAnimationFrame(() => {
					title.classList.remove('animate-on-load')
				})
			}
		})
	}

	// Configurar elementos para animación en scroll
	setupScrollElements() {
		// Agregar clases de animación a elementos que aparecerán en scroll
		const scrollElements = [
			// Párrafos y texto
			'main p:not(.hero-section p)',
			'main .space-y-6 p',
			'article p',

			// Cards y contenedores
			'.bg-white:not(.modern-navigation *)',
			'.bg-gray-50:not(.modern-navigation *)',
			'.shadow-xl:not(.modern-navigation *)',
			'.rounded-2xl:not(.modern-navigation *)',

			// Listas y elementos de contenido
			'main ul:not(.modern-navigation ul)',
			'main ol',
			'main blockquote',
			'main pre',

			// Componentes específicos
			'[class*="Card"]:not(.modern-navigation *)',
			'.video-container',
			'.ejercicio-container',

			// Secciones específicas
			'aside:not(.modern-navigation aside)',
			'.container > div:not(.modern-navigation *)',

			// Títulos adicionales (h4, h5, h6)
			'main h4, main h5, main h6',
		]

		scrollElements.forEach((selector) => {
			const elements = document.querySelectorAll(selector)
			elements.forEach((element, index) => {
				if (
					!element.closest('.modern-navigation') &&
					!element.classList.contains('animate-on-load')
				) {
					// Alternar entre diferentes tipos de animación
					const animationTypes = [
						'scroll-animate',
						'scroll-animate-left',
						'scroll-animate-right',
						'scroll-animate-scale',
					]
					const animationType = animationTypes[index % animationTypes.length]

					element.classList.add(animationType)

					// Agregar delay escalonado
					if (index < 5) {
						element.classList.add(`scroll-delay-${index + 1}`)
					}
				}
			})
		})
	}

	// Animar cards y elementos tipo tarjeta (solo las primeras visibles)
	animateCards() {
		const cards = document.querySelectorAll(
			'[class*="card"], [class*="rounded"], .bg-white, .bg-gray-50, [class*="shadow"]'
		)

		cards.forEach((card, index) => {
			// Solo animar las primeras 3 cards visibles y excluir elementos de navegación
			if (
				index < 3 &&
				this.isInViewport(card) &&
				!card.closest('.modern-navigation') &&
				!card.closest('nav')
			) {
				const delay = Math.min(index, 2)
				card.classList.add(
					'animate-on-load',
					'card-entrance',
					`stagger-${delay + 1}`
				)

				requestAnimationFrame(() => {
					card.classList.remove('animate-on-load')
				})
			}
		})
	}

	// Configurar animaciones en scroll (para elementos que aparecen después)
	setupScrollAnimations() {
		if (!window.IntersectionObserver) return

		this.scrollObserver = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						const element = entry.target

						// Agregar clase in-view para activar animación
						element.classList.add('in-view')

						// Dejar de observar el elemento después de que se anime
						this.scrollObserver.unobserve(element)
					}
				})
			},
			{
				...this.observerOptions,
				threshold: 0.15,
				rootMargin: '0px 0px -80px 0px',
			}
		)

		// Observar todos los elementos con clases de animación en scroll
		const scrollElements = document.querySelectorAll(
			'.scroll-animate, .scroll-animate-left, .scroll-animate-right, .scroll-animate-scale, [data-scroll-animate]'
		)

		scrollElements.forEach((el) => {
			this.scrollObserver.observe(el)
		})

		// También observar elementos que aparecen más tarde en la página
		const laterElements = document.querySelectorAll(
			'.animate-on-scroll, [data-animate]'
		)
		laterElements.forEach((el) => {
			if (!el.classList.contains('animate-on-load')) {
				this.scrollObserver.observe(el)
			}
		})
	}

	// Animar un elemento específico
	animateElement(element) {
		const animationType = element.dataset.animate || 'fade-in-up'
		element.classList.add('animate-entrance', animationType)
	}

	// Verificar si un elemento está en el viewport
	isInViewport(element) {
		const rect = element.getBoundingClientRect()
		return (
			rect.top >= 0 &&
			rect.left >= 0 &&
			rect.bottom <=
				(window.innerHeight || document.documentElement.clientHeight) &&
			rect.right <= (window.innerWidth || document.documentElement.clientWidth)
		)
	}

	// Limpiar y reinicializar (útil para navegación SPA)
	reset() {
		this.initialized = false

		// Desconectar observer si existe
		if (this.scrollObserver) {
			this.scrollObserver.disconnect()
			this.scrollObserver = null
		}

		// Remover clases de animación existentes
		const animatedElements = document.querySelectorAll(
			'.animate-entrance, .animated, .animate-on-load, .in-view, .scroll-animate, .scroll-animate-left, .scroll-animate-right, .scroll-animate-scale'
		)

		animatedElements.forEach((el) => {
			el.classList.remove(
				'animate-entrance',
				'animated',
				'animate-on-load',
				'in-view',
				'scroll-animate',
				'scroll-animate-left',
				'scroll-animate-right',
				'scroll-animate-scale',
				'fade-in-up',
				'fade-in-down',
				'fade-in-left',
				'fade-in-right',
				'scale-in',
				'slide-in-up',
				'bounce-in',
				'rotate-in',
				'zoom-in',
				'hero-title',
				'hero-subtitle',
				'hero-buttons',
				'hero-icon',
				'card-entrance',
				'stagger-1',
				'stagger-2',
				'stagger-3',
				'stagger-4',
				'stagger-5',
				'stagger-6',
				'scroll-delay-1',
				'scroll-delay-2',
				'scroll-delay-3',
				'scroll-delay-4',
				'scroll-delay-5'
			)
		})
	}
}

// Crear instancia global
const entranceAnimations = new EntranceAnimations()

// Inicializar cuando se carga la página
document.addEventListener('DOMContentLoaded', () => {
	entranceAnimations.init()
})

// Reinicializar en navegación SPA (Astro)
document.addEventListener('astro:page-load', () => {
	entranceAnimations.reset()
	setTimeout(() => {
		entranceAnimations.init()
	}, 50)
})

// Exportar para uso global
window.entranceAnimations = entranceAnimations
