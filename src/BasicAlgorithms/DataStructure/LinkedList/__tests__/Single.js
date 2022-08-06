const SingleLinkedList = require('../Single')

describe('Single linked list', () => {
	let linkedList

	beforeEach(() => {
		linkedList = new SingleLinkedList()
	})

	describe('Print', () => {
		it('Should print', () => {
			expect.assertions(2)

			const log = jest.spyOn(console, 'log').mockImplementation(() => {})

			const result = linkedList.print()

			linkedList.push('foo')

			linkedList.print()

			expect(result).toBeNull()
			expect(log.mock.calls[0][0]).toBe('foo')
		})
	})

	describe('Push', () => {
		it('Should push', () => {
			expect.assertions(4)

			linkedList.push('foo')
			linkedList.push('bar')
			linkedList.push('foobar')

			expect(linkedList.head.value).toBe('foo')
			expect(linkedList.head.next.value).toBe('bar')
			expect(linkedList.head.next.next.value).toBe('foobar')
			expect(linkedList.head.next.next.next).toBeNull()
		})
	})

	describe('Remove', () => {
		it('Should remove', () => {
			expect.assertions(3)

			linkedList.push('foo')
			linkedList.push('bar')
			linkedList.push('foobar')

			linkedList.remove('bar')

			expect(linkedList.head.value).toBe('foo')
			expect(linkedList.head.next.value).toBe('foobar')
			expect(linkedList.head.next.next).toBeNull()
		})

		it('Should not remove value if linked list is empty', () => {
			expect.assertions(2)

			const result = linkedList.remove('foo')

			expect(linkedList.head).toBeNull()
			expect(result).toBeNull()
		})

		it('Should set head to null if linked list has 1 node and remove value', () => {
			expect.assertions(2)

			linkedList.push('foo')

			const result = linkedList.remove('foo')

			expect(linkedList.head).toBeNull()
			expect(result).toBe('foo')
		})

		it('Should not remove value if value not exist', () => {
			expect.assertions(3)

			linkedList.push('foo')

			const result = linkedList.remove('bar')

			expect(linkedList.head.value).toBe('foo')
			expect(linkedList.head.next).toBeNull()

			expect(result).toBeNull()
		})
	})

	describe('Pop', () => {
		it('Should pop', () => {
			expect.assertions(4)

			linkedList.push('foo')
			linkedList.push('bar')
			linkedList.push('foobar')

			const result = linkedList.pop()

			expect(linkedList.head.value).toBe('foo')
			expect(linkedList.head.next.value).toBe('bar')
			expect(linkedList.head.next.next).toBeNull()

			expect(result).toBe('foobar')
		})

		it('Should not pop if linked list is empty', () => {
			expect.assertions(2)

			const result = linkedList.pop()

			expect(linkedList.head).toBeNull()
			expect(result).toBeNull()
		})

		it('Should set head to null if linked list has 1 node and pop', () => {
			expect.assertions(2)

			linkedList.push('foo')

			const result = linkedList.pop()

			expect(linkedList.head).toBeNull()
			expect(result).toBe('foo')
		})
	})

	describe('Remove index', () => {
		it('Should remove index', () => {
			expect.assertions(4)

			linkedList.push('foo')
			linkedList.push('bar')
			linkedList.push('foobar')

			const result = linkedList.removeIndex(1)

			expect(linkedList.head.value).toBe('foo')
			expect(linkedList.head.next.value).toBe('foobar')
			expect(linkedList.head.next.next).toBeNull()

			expect(result).toBe('bar')
		})

		it('Should not remove index if linked list is empty', () => {
			expect.assertions(2)

			const result = linkedList.removeIndex(0)

			expect(linkedList.head).toBeNull()
			expect(result).toBeNull()
		})

		it('Should set head to null if linked list has 1 node and remove index', () => {
			expect.assertions(2)

			linkedList.push('foo')

			const result = linkedList.removeIndex(0)

			expect(linkedList.head).toBeNull()
			expect(result).toBe('foo')
		})

		it('Should not remove index if index not exist', () => {
			expect.assertions(3)

			linkedList.push('foo')

			const result = linkedList.removeIndex(1)

			expect(linkedList.head.value).toBe('foo')
			expect(linkedList.head.next).toBeNull()

			expect(result).toBeNull()
		})
	})

	describe('Index of', () => {
		it('Should return index indexOf', () => {
			expect.assertions(3)

			linkedList.push('foo')

			const result = linkedList.indexOf('foo')

			expect(linkedList.head.value).toBe('foo')
			expect(linkedList.head.next).toBeNull()

			expect(result).toBe(0)
		})

		it('Should return index indexOf if value is not first', () => {
			expect.assertions(4)

			linkedList.push('foo')
			linkedList.push('bar')

			const result = linkedList.indexOf('bar')

			expect(linkedList.head.value).toBe('foo')
			expect(linkedList.head.next.value).toBe('bar')
			expect(linkedList.head.next.next).toBeNull()

			expect(result).toBe(1)
		})

		it('Should return -1 indexOf if linked list empty', () => {
			expect.assertions(2)

			const result = linkedList.indexOf('foo')

			expect(linkedList.head).toBeNull()
			expect(result).toBe(1)
		})
	})
})
