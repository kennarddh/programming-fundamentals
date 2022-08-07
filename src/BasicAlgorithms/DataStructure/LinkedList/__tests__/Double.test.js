const DoubleLinkedList = require('../Double')

describe('Single linked list', () => {
	let linkedList
	const log = jest.spyOn(console, 'log').mockImplementation(() => {})

	beforeEach(() => {
		linkedList = new DoubleLinkedList()

		log.mockClear()
	})

	describe('Print', () => {
		it('Should print', () => {
			expect.assertions(3)

			linkedList.push('foo')
			linkedList.push('bar')

			const result = linkedList.print()

			expect(result).toBeNull()
			expect(log.mock.calls[0][0]).toBe('foo')
			expect(log.mock.calls[1][0]).toBe('bar')
		})
	})

	describe('Print reverse', () => {
		it('Should print reverse', () => {
			expect.assertions(3)

			linkedList.push('foo')
			linkedList.push('bar')

			const result = linkedList.printReverse()

			expect(result).toBeNull()
			expect(log.mock.calls[0][0]).toBe('bar')
			expect(log.mock.calls[1][0]).toBe('foo')
		})
	})

	describe('Push', () => {
		it('Should push', () => {
			expect.assertions(11)

			linkedList.push('foo')
			linkedList.push('bar')
			linkedList.push('foobar')

			expect(linkedList.head.value).toBe('foo')
			expect(linkedList.head.next.value).toBe('bar')
			expect(linkedList.head.next.next.value).toBe('foobar')
			expect(linkedList.head.next.next.next).toBeNull()

			expect(linkedList.head.previous).toBeNull()
			expect(linkedList.tail.next).toBeNull()

			expect(linkedList.tail.value).toBe('foobar')
			expect(linkedList.tail.previous.value).toBe('bar')
			expect(linkedList.tail.previous.previous.value).toBe('foo')
			expect(linkedList.tail.previous.previous.previous).toBeNull()

			expect(linkedList.size).toBe(3)
		})
	})

	describe('Remove', () => {
		it('Should remove', () => {
			expect.assertions(10)

			linkedList.push('foo')
			linkedList.push('bar')
			linkedList.push('foobar')

			const result = linkedList.remove('bar')

			expect(linkedList.head.value).toBe('foo')
			expect(linkedList.head.next.value).toBe('foobar')
			expect(linkedList.head.next.next).toBeNull()

			expect(linkedList.head.previous).toBeNull()
			expect(linkedList.tail.next).toBeNull()

			expect(linkedList.tail.value).toBe('foobar')
			expect(linkedList.tail.previous.value).toBe('foo')
			expect(linkedList.tail.previous.previous).toBeNull()

			expect(linkedList.size).toBe(2)

			expect(result).toBe('bar')
		})

		it('Should not remove value if linked list is empty', () => {
			expect.assertions(4)

			const result = linkedList.remove('foo')

			expect(linkedList.head).toBeNull()
			expect(linkedList.tail).toBeNull()

			expect(linkedList.size).toBe(0)

			expect(result).toBeNull()
		})

		it('Should set head to null if linked list has 1 node and remove value', () => {
			expect.assertions(4)

			linkedList.push('foo')

			const result = linkedList.remove('foo')

			expect(linkedList.head).toBeNull()
			expect(linkedList.tail).toBeNull()

			expect(linkedList.size).toBe(0)

			expect(result).toBe('foo')
		})

		it('Should not remove value if value not exist', () => {
			expect.assertions(6)

			linkedList.push('foo')

			const result = linkedList.remove('bar')

			expect(linkedList.head.value).toBe('foo')

			expect(linkedList.head.previous).toBeNull()
			expect(linkedList.tail.next).toBeNull()

			expect(linkedList.tail.value).toBe('foo')

			expect(linkedList.size).toBe(1)

			expect(result).toBeNull()
		})
	})

	describe('Pop', () => {
		it('Should pop', () => {
			expect.assertions(10)

			linkedList.push('foo')
			linkedList.push('bar')
			linkedList.push('foobar')

			const result = linkedList.pop()

			expect(linkedList.head.value).toBe('foo')
			expect(linkedList.head.next.value).toBe('bar')
			expect(linkedList.head.next.next).toBeNull()

			expect(linkedList.head.previous).toBeNull()
			expect(linkedList.tail.next).toBeNull()

			expect(linkedList.tail.value).toBe('bar')
			expect(linkedList.tail.previous.value).toBe('foo')
			expect(linkedList.tail.previous.previous).toBeNull()

			expect(linkedList.size).toBe(2)

			expect(result).toBe('foobar')
		})

		it('Should not pop if linked list is empty', () => {
			expect.assertions(4)

			const result = linkedList.pop()

			expect(linkedList.head).toBeNull()
			expect(linkedList.tail).toBeNull()

			expect(linkedList.size).toBe(0)

			expect(result).toBeNull()
		})

		it('Should set head to null if linked list has 1 node and pop', () => {
			expect.assertions(3)

			linkedList.push('foo')

			const result = linkedList.pop()

			expect(linkedList.head).toBeNull()
			expect(linkedList.tail).toBeNull()

			expect(linkedList.size).toBe(0)

			expect(result).toBe('foo')
		})
	})

	describe('Remove index', () => {
		it('Should remove index', () => {
			expect.assertions(10)

			linkedList.push('foo')
			linkedList.push('bar')
			linkedList.push('foobar')

			const result = linkedList.removeIndex(1)

			expect(linkedList.head.value).toBe('foo')
			expect(linkedList.head.next.value).toBe('foobar')
			expect(linkedList.head.next.next).toBeNull()

			expect(linkedList.head.previous).toBeNull()
			expect(linkedList.tail.next).toBeNull()

			expect(linkedList.tail.value).toBe('bar')
			expect(linkedList.tail.previous.value).toBe('foo')
			expect(linkedList.tail.previous.previous).toBeNull()

			expect(linkedList.size).toBe(2)

			expect(result).toBe('bar')
		})

		it('Should not remove index if linked list is empty', () => {
			expect.assertions(4)

			const result = linkedList.removeIndex(0)

			expect(linkedList.head).toBeNull()
			expect(linkedList.tail).toBeNull()

			expect(linkedList.size).toBe(0)

			expect(result).toBeNull()
		})

		it('Should set head to null if linked list has 1 node and remove index', () => {
			expect.assertions(4)

			linkedList.push('foo')

			const result = linkedList.removeIndex(0)

			expect(linkedList.head).toBeNull()
			expect(linkedList.tail).toBeNull()

			expect(linkedList.size).toBe(0)

			expect(result).toBe('foo')
		})

		it('Should not remove index if index not exist', () => {
			expect.assertions(8)

			linkedList.push('foo')

			const result = linkedList.removeIndex(1)

			expect(linkedList.head.value).toBe('foo')
			expect(linkedList.head.next).toBeNull()

			expect(linkedList.head.previous).toBeNull()
			expect(linkedList.tail.next).toBeNull()

			expect(linkedList.tail.value).toBe('foo')
			expect(linkedList.tail.previous).toBeNull()

			expect(linkedList.size).toBe(1)

			expect(result).toBeNull()
		})
	})

	describe('Index of', () => {
		it('Should return index indexOf', () => {
			expect.assertions(7)

			linkedList.push('foo')

			const result = linkedList.indexOf('foo')

			expect(linkedList.head.value).toBe('foo')
			expect(linkedList.head.next).toBeNull()

			expect(linkedList.head.previous).toBeNull()
			expect(linkedList.tail.next).toBeNull()

			expect(linkedList.tail.value).toBe('foo')
			expect(linkedList.tail.previous).toBeNull()

			expect(result).toBe(0)
		})

		it('Should return index indexOf if value is not first', () => {
			expect.assertions(9)

			linkedList.push('foo')
			linkedList.push('bar')

			const result = linkedList.indexOf('bar')

			expect(linkedList.head.value).toBe('foo')
			expect(linkedList.head.next.value).toBe('bar')
			expect(linkedList.head.next.next).toBeNull()

			expect(linkedList.head.previous).toBeNull()
			expect(linkedList.tail.next).toBeNull()

			expect(linkedList.tail.value).toBe('bar')
			expect(linkedList.tail.previous.value).toBe('foo')
			expect(linkedList.tail.previous.previous).toBeNull()

			expect(result).toBe(1)
		})

		it('Should return -1 indexOf if linked list empty', () => {
			expect.assertions(2)

			const result = linkedList.indexOf('foo')

			expect(linkedList.head).toBeNull()

			expect(linkedList.head.previous).toBeNull()
			expect(linkedList.tail.next).toBeNull()

			expect(result).toBe(-1)
		})
	})
})
