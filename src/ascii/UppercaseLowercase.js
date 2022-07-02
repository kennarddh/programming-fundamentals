const UpperCase = str => {
	let upperStr = ''

	for (let i = 0; i < str.length; i++) {
		if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122) {
			upperStr += String.fromCharCode(str.charCodeAt(i) - 32)
		} else {
			upperStr += str.charAt(i)
		}
	}

	return upperStr
}

const LowerCase = str => {
	let lowerStr = ''

	for (let i = 0; i < str.length; i++) {
		if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
			lowerStr += String.fromCharCode(str.charCodeAt(i) + 32)
		} else {
			lowerStr += str.charAt(i)
		}
	}

	return lowerStr
}

module.exports = {
	UpperCase,
	LowerCase,
}
