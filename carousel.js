// ! Carousel currently only works with an ODD number of items in it

const carousel = document.querySelector('.carousel')

const carouselList = carousel.querySelector('ol')
const controls = carousel.querySelector('.controls')
const [prevBtn, nextBtn] = controls.querySelectorAll('button')

const NUM_ITEMS = carouselList.children.length

const startingActiveIndex = 1
let activeIndex = startingActiveIndex

const gapRem = 1.5

const slideCarousel = () => {
	const index = activeIndex - startingActiveIndex
	const itemWidth = carouselList.querySelector('img').width
	carouselList.style.translate = `calc(((${itemWidth}px + ${gapRem}rem)) * ${-index})`

	Array.from(carouselList.children).forEach((child, index) => {
		child.style.filter = index !== activeIndex ? 'brightness(50%)' : ''
		child.style.transform = index !== activeIndex ? 'scale(0.9)' : ''
	})
}

prevBtn.addEventListener('click', () => {
	if (activeIndex <= 0) return

	activeIndex--
	prevBtn.disabled = activeIndex <= 0
	nextBtn.disabled = false

	slideCarousel()
})

nextBtn.addEventListener('click', () => {
	if (activeIndex >= NUM_ITEMS - 1) return

	activeIndex++
	nextBtn.disabled = activeIndex >= NUM_ITEMS - 1
	prevBtn.disabled = false

	slideCarousel()
})

// Init carousel
carousel.style = `--num-items: ${NUM_ITEMS}`
slideCarousel()
