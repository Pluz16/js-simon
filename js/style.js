// generiamo i 5 numeri
const numbers = generaNumeri(5, 1, 50)
const userNumbers = []
const winnerNumbers = []

// mostra i 5 numeri
alert(`Ricorda questi numeri: ${numbers.join(', ')}`)

//dopo 30s chiederiamo 5 numeri all'utente
setTimeout(() => {
	while (userNumbers.length < numbers.length) {
		let number = parseInt(prompt('Inserisci un numero che ti ricordi'))

		if (numbers.includes(number) && !userNumbers.includes(number)) {
			console.log('indovinato')
			// points++
			winnerNumbers.push(number)
		}

		userNumbers.push(number)
	}

	console.log(
		`Hai indovinato ${
			winnerNumbers.length
		} numeri. I numeri indovinati sono i seguenti: ${winnerNumbers.join(', ')}.`
	)
}, 3 * 1000)

function generaNumeri(length, min, max) {
	let numbers = []

	//generazione numeri random diversi
	while (numbers.length < length) {
		const num = getRandomIntInclusive(min, max)

		if (!numbers.includes(num)) {
			numbers.push(num)
		}

	}


	return numbers
}

function getRandomIntInclusive(min, max) {
	min = Math.ceil(min)
	max = Math.floor(max)
	return Math.floor(Math.random() * (max - min + 1) + min) // The maximum is inclusive and the minimum is inclusive
}