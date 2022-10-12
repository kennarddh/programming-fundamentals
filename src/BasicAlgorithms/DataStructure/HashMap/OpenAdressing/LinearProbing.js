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
		function* inner() {
			for (const [key] of this.map) {
				yield key
			}
		}

		return inner.call(this)
	}

	values() {
		function* inner() {
			for (const [_, value] of this.map) {
				yield value
			}
		}

		return inner.call(this)
	}

	entries() {
		function* inner() {
			for (const keyValue of this.map) {
				yield keyValue
			}
		}

		return inner.call(this)
	}
	// #endregion
	// #endregion
}

// const map = new LinearProbing(5)

// map.set(1, 0)
// map.set(2, 1)
// map.set(6, 3)
// map.set(11, 6)
// map.set(12, 9)

// console.log(map)
// console.log([...map.entries()])

module.exports = LinearProbing

exports.NotEnoughMapCapacity = NotEnoughMapCapacity
