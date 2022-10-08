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
		this.parent = null
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
				const newNode = new Node(value)

				newNode.parent = node

				node.right = newNode

				return
			}

			this.insert(value, node.right)

			return
		}

		if (!node.left) {
			const newNode = new Node(value)

			newNode.parent = node

			node.left = newNode

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

	search(target, node = null) {
		if (!this.root) throw new NoTreeRoot()

		if (!node) {
			node = this.root
		}

		if (node.value === target) return node

		if (this.rightComparator(target, node.value)) {
			if (!node.right) return null

			return this.search(target, node.right)
		}

		if (!node.left) return null

		return this.search(target, node.left)
	}

	oneLeftRestRight(root, node = null) {
		if (!this.root) throw new NoTreeRoot()

		if (!node) {
			node = root
		}

		if (root === node) {
			return this.oneLeftRestRight(root, node.left)
		}

		if (!node.right) return node

		return this.oneLeftRestRight(root, node.right)
	}

	remove(targetValue) {
		if (!this.root) throw new NoTreeRoot()

		const targetNode = this.search(targetValue)

		if (!targetNode) return false

		let isLeft = null
		let posititon = null
		const isRoot = targetNode === this.root

		if (targetNode !== this.root) {
			isLeft = targetNode.parent.left === targetNode
			posititon = isLeft ? 'left' : 'right'
		}

		if (targetNode.left && targetNode.right) {
			// 2 Child
			const replacement = this.oneLeftRestRight(targetNode)

			const replacementIsLeft = replacement.parent.left === replacement
			const replacementPosititon = replacementIsLeft ? 'left' : 'right'

			replacement.parent[replacementPosititon] = null

			targetNode.value = replacement.value
			targetNode.left = replacement.left
			replacement.left.parent = targetNode
		} else if (targetNode.left || targetNode.right) {
			// 1 Child
			const replacement = targetNode.left || targetNode.right

			if (isRoot) {
				replacement.parent = null
				this.root = replacement
			} else {
				replacement.parent = targetNode.parent
				targetNode.parent[posititon] = replacement
			}
		} else {
			// 0 Child
			// eslint-disable-next-line no-lonely-if
			if (isRoot) {
				this.root = null
			} else {
				targetNode.parent[posititon] = null
			}
		}

		return true
	}
}

const tree = new BinaryTree((value, currentValue) => {
	if (value > currentValue) return true

	return false
})

tree.insert(10)
tree.insert(15)
tree.insert(13)
tree.insert(16)
tree.insert(20)
tree.insert(18)
tree.insert(14)
tree.insert(-1)
tree.insert(-2)

log(tree.root)

console.log(tree.remove(10))
log(tree.root)

// tree.inOrder()
