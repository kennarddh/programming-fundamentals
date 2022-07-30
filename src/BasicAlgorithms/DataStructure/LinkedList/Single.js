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
	}

	push(value) {
		const node = new Node(value)

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
	}

	remove(value) {
		if (!this.head) return

		let currentNode = this.head

		while (currentNode) {
			if (currentNode.next.value === value) {
				currentNode.next = currentNode.next.next

				break
			}

			currentNode = currentNode.next
		}
	}

	pop() {
		let currentNode = this.head

		while (currentNode.next.next) {
			currentNode = currentNode.next
		}

		currentNode.next = null
	}

	removeIndex(index) {
		let currentNode = this.head

		for (let i = 1; i < index; i++) {
			currentNode = currentNode.next
		}

		currentNode.next = currentNode.next.next
	}
}

module.exports = LinkedList
