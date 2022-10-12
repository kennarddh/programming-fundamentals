/* eslint-disable max-classes-per-file */
class Node {
	constructor(value) {
		this.value = value

		this.next = null
	}
}

class LinkedList {
	constructor() {
		this.head = null
		this.size = 0
	}

	push(value) {
		const node = new Node(value)

		this.size += 1

		if (!this.head) {
			this.head = node

			return
		}

		let currentNode = this.head

		while (currentNode.next) {
			currentNode = currentNode.next
		}

		currentNode.next = node
	}

	print() {
		if (!this.head) return null

		let currentNode = this.head

		while (currentNode) {
			console.log(currentNode.value)

			currentNode = currentNode.next
		}

		return null
	}

	remove(value) {
		if (!this.head) return null

		const index = this.indexOf(value)

		if (index === -1) return null

		if (this.size === 1) {
			const { value: returnValue } = this.head

			this.head = null

			this.size -= 1

			return returnValue
		}

		this.size -= 1

		if (index === 0) {
			const { value: returnValue } = this.head

			this.head = this.head.next

			return returnValue
		}

		const prevNode = this.getNodeByIndex(index - 1)

		const returnValue = prevNode.next.value

		prevNode.next = prevNode.next?.next ?? null

		return returnValue
	}

	pop() {
		if (this.size === 0) return null

		if (this.size === 1) {
			const { value } = this.head

			this.head = null

			this.size -= 1

			return value
		}

		const node = this.getNodeByIndex(this.size - 2)

		const { value } = node.next

		node.next = null

		this.size -= 1

		return value
	}

	removeIndex(index) {
		if (index >= this.size) return null

		if (this.size === 1) {
			const { value: returnValue } = this.head

			this.head = null

			this.size -= 1

			return returnValue
		}

		this.size -= 1

		if (index === 0) {
			const { value: returnValue } = this.head

			this.head = this.head.next

			return returnValue
		}

		const prevNode = this.getNodeByIndex(index - 1)

		const returnValue = prevNode.next.value

		prevNode.next = prevNode.next?.next ?? null

		return returnValue
	}

	indexOf(value) {
		let currentNode = this.head

		let count = 0

		while (currentNode) {
			if (currentNode.value === value) return count

			currentNode = currentNode.next

			count += 1
		}

		return -1
	}

	includes(value) {
		return this.indexOf(value) >= 0
	}

	getNodeByIndex(index) {
		if (index > this.size) return null
		if (index < 0) return null

		let node = this.head

		for (let i = 0; i < index; i++) {
			node = node.next
		}

		return node
	}
}

module.exports = LinkedList
