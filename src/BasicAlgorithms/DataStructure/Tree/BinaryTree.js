/* eslint-disable no-param-reassign */
/* eslint-disable max-classes-per-file */

const { inspect } = require('node:util')

class DuplicateTreeValue extends Error {
	constructor() {
		super('Tree cannot have duplicate values')

		this.name = 'DuplicateTreeValue'
	}
}

class NoTreeRoot extends Error {
	constructor() {
		super('Tree have null root')

		this.name = 'NoTreeRoot'
	}
}

class Node {
	constructor(value) {
		this.value = value
		this.right = null
		this.left = null
	}
}

const log = obj => console.log(inspect(obj, { depth: null }))

class BinaryTree {
	constructor(rightComparator) {
		this.root = null
		this.rightComparator = rightComparator
	}

	insert(value, node = null) {
		if (!this.root) {
			this.root = new Node(value)

			return
		}

		if (!node) {
			node = this.root
		}

		if (value === node.value) throw new DuplicateTreeValue()

		if (this.rightComparator(value, node.value)) {
			if (!node.right) {
				node.right = new Node(value)

				return
			}

			this.insert(value, node.right)

			return
		}

		if (!node.left) {
			node.left = new Node(value)

			return
		}

		this.insert(value, node.left)
	}

	// #region Order
	inOrder(node = null) {
		if (!this.root) throw new NoTreeRoot()

		if (!node) {
			node = this.root
		}

		if (node.left) {
			this.inOrder(node.left)
		}

		console.log(node.value)

		if (node.right) {
			this.inOrder(node.right)
		}
	}

	preOrder(node = null) {
		if (!this.root) throw new NoTreeRoot()

		if (!node) {
			node = this.root
		}

		console.log(node.value)

		if (node.left) {
			this.preOrder(node.left)
		}

		if (node.right) {
			this.preOrder(node.right)
		}
	}

	postOrder(node = null) {
		if (!this.root) throw new NoTreeRoot()

		if (!node) {
			node = this.root
		}

		if (node.left) {
			this.postOrder(node.left)
		}

		if (node.right) {
			this.postOrder(node.right)
		}

		console.log(node.value)
	}

	// #endregion
}

const tree = new BinaryTree((value, currentValue) => {
	if (value > currentValue) return true

	return false
})

tree.insert(1)
tree.insert(2)
tree.insert(3)
tree.insert(-1)
tree.insert(-3)
tree.insert(-2)

log(tree.root)

tree.postOrder()
