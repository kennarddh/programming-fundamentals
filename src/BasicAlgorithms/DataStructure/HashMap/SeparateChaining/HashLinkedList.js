const LinkedList = require('../../LinkedList/Single')
const { inspect } = require('node:util')

const log = obj => console.log(inspect(obj, { depth: null }))

class HashLinked {
	constructor(partition) {
		this.size = 0
		this.partition = partition

		this.map = Array(partition).fill(null)
	}

	// #region Private Method
	#modulus = value => value % this.partition

	#updateKeyFromLinkedList(partition, key, value, node = partition.head) {
		if (node === null) return false

		if (node.value[0] === key) {
			node.value = [key, value]

			return true
		}

		return this.#updateKeyFromLinkedList(partition, key, value, node.next)
	}

	#isKeyIncludedInLinkedList(partition, key, node = partition.head) {
		if (node === null) return false

		if (node.value[0] === key) {
			return true
		}

		return this.#isKeyIncludedInLinkedList(partition, key, node.next)
	}

	#getIndexInLinkedListByKey(
		partition,
		key,
		node = partition.head,
		increment = 0
	) {
		if (node === null) return false

		if (node.value[0] === key) {
			return increment
		}

		return this.#getIndexInLinkedListByKey(
			partition,
			key,
			node.next,
			increment + 1
		)
	}
	// #endregion

	// #region Public Method
	set(key, value) {
		const partitionIndex = this.#modulus(key)

		if (this.map[partitionIndex] === null) {
			this.map[partitionIndex] = new LinkedList()
		}

		if (this.#isKeyIncludedInLinkedList(this.map[partitionIndex], key)) {
			return this.#updateKeyFromLinkedList(
				this.map[partitionIndex],
				key,
				value
			)
		}

		this.map[partitionIndex].push([key, value])

		this.size += 1

		return true
	}

	get(key) {
		const partitionIndex = this.#modulus(key)

		const partition = this.map[partitionIndex]

		if (!this.#isKeyIncludedInLinkedList(partition, key)) {
			return undefined
		}

		const value = partition.getNodeByIndex(
			this.#getIndexInLinkedListByKey(partition, key)
		).value[0]

		return value
	}

	has(key) {
		const partitionIndex = this.#modulus(key)

		const partition = this.map[partitionIndex]

		return this.#isKeyIncludedInLinkedList(partition, key)
	}

	clear() {
		this.map = []
		this.size = 0

		return true
	}

	delete(key) {
		const partitionIndex = this.#modulus(key)

		const partition = this.map[partitionIndex]

		partition.removeIndex(this.#getIndexInLinkedListByKey(partition, key))

		return true
	}

	forEach(callback, context = null) {
		for (const partition of this.map) {
			if (partition) {
				partition.forEach(([key, value]) => {
					callback.call(context, value, key, this)
				})
			}
		}
	}

	// #region Iterator
	*[Symbol.iterator]() {
		for (const partition of this.map) {
			if (partition) {
				const result = []

				partition.forEach(keyValue => {
					result.push(keyValue)
				})

				for (const item of result) {
					yield item
				}
			}
		}
	}

	keys() {
		function* inner() {
			for (const partition of this.map) {
				if (partition) {
					const result = []

					partition.forEach(([key]) => {
						result.push(key)
					})

					for (const item of result) {
						yield item
					}
				}
			}
		}

		return inner.call(this)
	}

	values() {
		function* inner() {
			for (const partition of this.map) {
				if (partition) {
					const result = []

					partition.forEach(([_, value]) => {
						result.push(value)
					})

					for (const item of result) {
						yield item
					}
				}
			}
		}

		return inner.call(this)
	}

	entries() {
		function* inner() {
			for (const partition of this.map) {
				if (partition) {
					const result = []

					partition.forEach(keyValue => {
						result.push(keyValue)
					})

					for (const item of result) {
						yield item
					}
				}
			}
		}

		return inner.call(this)
	}
	// #endregion
	// #endregion
}

// const map = new HashLinked(5)

// map.set(1, 0)
// map.set(2, 1)
// map.set(6, 3)
// map.set(11, 6)
// map.set(12, 9)

// log(map)

// console.log([...map.entries()])

module.exports = HashLinked
