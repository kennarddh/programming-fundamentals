class NotEnoughMapCapacity extends Error {
	constructor() {
		super('Not Enough Map Capacity')

		this.name = 'NotEnoughMapCapacity'
	}
}

class LinearProbing {
	constructor(capacity) {
		this.size = 0
		this.capacity = capacity

		this.map = Array(capacity).fill(null)
	}

	// #region Private Method
	#modulus = value => value % this.capacity

	#setLinearProbing(value) {
		const mod = this.#modulus(value)

		if (this.map[mod] !== null) {
			return this.#setLinearProbing(mod + 1)
		}

		return mod
	}

	#indexOfKey(key, prev = key, i = 0) {
		if (i === this.size) return -1

		const mod = this.#modulus(prev)

		if (this.map[mod]?.[0] !== key) {
			return this.#indexOfKey(key, mod + 1, i + 1)
		}

		return mod
	}
	// #endregion

	// #region Public Method
	set(key, value) {
		const keyIndex = this.#indexOfKey(key)

		if (keyIndex >= 0) {
			this.map[keyIndex][1] = value

			return
		}

		if (this.size === this.capacity) throw new NotEnoughMapCapacity()

		const index = this.#setLinearProbing(key)

		this.map[index] = [key, value]

		this.size += 1

		return true
	}

	get(key, prev = key, i = 0) {
		if (i === this.size) return undefined

		const mod = this.#modulus(prev)

		if (this.map[mod]?.[0] !== key) {
			return this.get(key, mod + 1, i + 1)
		}

		return this.map[mod][1]
	}

	has(key, prev = key, i = 0) {
		const mod = this.#modulus(prev)

		if (this.map[mod]?.[0] === key) return true

		if (i === this.size) return false

		return this.has(key, mod + 1, i + 1)
	}

	clear() {
		this.map = []
		this.size = 0

		return true
	}

	delete(key, prev = key, i = 0) {
		const mod = this.#modulus(prev)

		if (this.map[mod]?.[0] === key) {
			this.map[mod] = null

			this.size -= 1

			return true
		}

		if (i === this.size) return false

		return this.delete(key, mod + 1, i + 1)
	}

	forEach(callback, context = null) {
		for (const [key, value] of this.map) {
			callback.call(context, value, key, context)
		}
	}

	// #region Iterator
	*[Symbol.iterator]() {
		for (const keyValue of this.map) {
			yield keyValue
		}
	}

	keys() {
		return {
			[Symbol.iterator]: () => {
				let i = 0

				return {
					next: () => {
						i += 1

						if (i > this.size) return { done: true }

						return { value: this.map[i - 1][0], done: false }
					},
				}
			},
		}
	}

	values() {
		return {
			[Symbol.iterator]: () => {
				let i = 0

				return {
					next: () => {
						i += 1

						if (i > this.size) return { done: true }

						return { value: this.map[i - 1][1], done: false }
					},
				}
			},
		}
	}

	entries() {
		return {
			[Symbol.iterator]: () => {
				let i = 0

				return {
					next: () => {
						i += 1

						if (i > this.size) return { done: true }

						return { value: this.map[i - 1], done: false }
					},
				}
			},
		}
	}
	// #endregion
	// #endregion
}

module.exports = LinearProbing

exports.NotEnoughMapCapacity = NotEnoughMapCapacity
