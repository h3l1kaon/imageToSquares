$('document').ready(function () {
	const toSlice = $('#toSlice')[0]
	const getDimentions = () => {
		const elWidth = window.screen.availWidth
		const elHeight = (elWidth / 16) * 9
		return {
			elWidth,
			elHeight,
		}
	}
	window.addEventListener('resize', () => console.log('resized'))
	const dimentions = getDimentions()
	console.log('dimentions', dimentions)
	console.log('container :', $('#container')[0])
	$('#container').css({
		width: dimentions.elWidth,
		height: dimentions.elHeight,
	})

	const imageSrc = $('img')[0].src
	const elWidth = dimentions.elWidth
	const elHeight = dimentions.elHeight
	const gridX = 16,
		gridY = 10

	const slice = () => {
		for (x = 0; x < gridX; x++) {
			for (y = 0; y < gridY; y++) {
				const newDiv = document.createElement('div')
				const width = (x * elWidth) / gridX
				const height = (y * elHeight) / gridY
				newDiv.style.width = elWidth / gridX + 1 + 'px'
				newDiv.style.height = elHeight / gridY + 'px'
				newDiv.style.top = height + 'px'
				newDiv.style.left = width + 'px'
				newDiv.style.backgroundImage = 'url(' + imageSrc + ')'
				newDiv.style.backgroundPosition =
					'-' + width + 'px ' + '-' + height + 'px'
				newDiv.style.backgroundSize = elWidth + 'px'
				newDiv.classList.add('active')
				if (width >= elWidth / 2) {
					newDiv.classList.add('fade_right')
				}
				newDiv.addEventListener('mouseover', () => removeActive(newDiv))
				// newDiv.addEventListener('mouseover', () => {
				// 	newDiv.classList.remove('active')
				// })
				toSlice.appendChild(newDiv)
			}
		}
	}
	slice()
	let removed = 0
	function removeActive(element) {
		element.classList.remove('active')
		removed++

		if (removed === 10) {
			console.log('10 squares destroyed')
			const squares = document.querySelectorAll('#toSlice > div')
			// const squares = $('#toSlice > div')
			// console.log(squares)
			// console.log(typeof squares)
			const t = []
			squares.forEach((square) => {
				t.push(square)
			})
			shuffleArray(t)
			shuffleArray(t)
			shuffleArray(t)
			shuffleArray(t)

			for (let i = 0; i < 10; i++) {
				console.log(i, Math.random())
			}
			function shuffleArray(arr) {
				arr.sort(() => Math.random() - 0.5)
			}
			let i = 0
			for (const square in t) {
				i++
				setTimeout(() => t[square].classList.remove('active'), 10 * i)
			}
		}
	}
})
