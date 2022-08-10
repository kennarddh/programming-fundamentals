const SingleLinkedList = require('../Single')

describe('Single linked list', () => {
	let linkedList

	const log = jest.spyOn(console, 'log').mockImplementation(() => {})

	beforeEach(() => {
		linkedList = new SingleLinkedList()

		log.mockClear()
	})

	describe('Print', () => {
		it('Should print', () => {
			expect.assertions(2)

			linkedList.push('foo')

			const result = linkedList.print()

			expect(result).toBeNull()
			expect(log.mock.calls[0][0]).toBe('foo')
		})

		it('Should return null if list is empty', () => {
			expect.assertions(2)

			const result = linkedList.print()

			expect(result).toBeNull()
			expect(log.mock.calls).toEqual([])
		})
	})

	describe('Push', () => {
		it('Should push', () => {
			expect.assertions(5)

			linkedList.push('foo')
			linkedList.push('bar')
			linkedList.push('foobar')

			expect(linkedList.head.value).toBe('foo')
			expect(linkedList.head.next.value).toBe('bar')
			expect(linkedList.head.next.next.value).toBe('foobar')
			expect(linkedList.head.next.next.next).toBeNull()

			expect(linkedList.size).toBe(3)
		})
	})

	describe('Remove', () => {
		it('Should remove', () => {
			expect.assertions(5)

			linkedList.push('foo')
			linkedList.push('bar')
			linkedList.push('foobar')

			const result = linkedList.remove('bar')

			expect(linkedList.head.value).toBe('foo')
			expect(linkedList.head.next.value).toBe('foobar')
			expect(linkedList.head.next.next).toBeNull()

			expect(linkedList.size).toBe(2)

			expect(result).toBe('bar')
		})

		it('Should remove with 2 value', () => {
			expect.assertions(4)

			linkedList.push('foo')
			linkedList.push('bar')

			const result = linkedList.remove('foo')

			expect(linkedList.head.value).toBe('bar')
			expect(linkedList.head.next).toBeNull()

			expect(linkedList.size).toBe(1)

			expect(result).toBe('foo')
		})

		it('Should remove more value', () => {
			expect.assertions(8)

			linkedList.push('foo')
			linkedList.push('bar')
			linkedList.push('foobar')
			linkedList.push('fizz')
			linkedList.push('buzz')
			linkedList.push('fizzbuzz')

			const result = linkedList.remove('fizz')

			expect(linkedList.head.value).toBe('foo')
			expect(linkedList.head.next.value).toBe('bar')
			expect(linkedList.head.next.next.value).toBe('foobar')
			expect(linkedList.head.next.next.next.value).toBe('buzz')
			expect(linkedList.head.next.next.next.next.value).toBe('fizzbuzz')
			expect(linkedList.head.next.next.next.next.next).toBeNull()

			expect(linkedList.size).toBe(5)

			expect(result).toBe('fizz')
		})

		it('Should not remove value if linked list is empty', () => {
			expect.assertions(3)

			const result = linkedList.remove('foo')

			expect(linkedList.head).toBeNull()

			expect(linkedList.size).toBe(0)

			expect(result).toBeNull()
		})

		it('Should set head to null if linked list has 1 node and remove value', () => {
			expect.assertions(3)

			linkedList.push('foo')

			const result = linkedList.remove('foo')

			expect(linkedList.head).toBeNull()

			expect(linkedList.size).toBe(0)

			expect(result).toBe('foo')
		})

		it('Should not remove value if value not exist', () => {
			expect.assertions(4)

			linkedList.push('foo')

			const result = linkedList.remove('bar')

			expect(linkedList.head.value).toBe('foo')
			expect(linkedList.head.next).toBeNull()

			expect(linkedList.size).toBe(1)

			expect(result).toBeNull()
		})

		it('Should set next to null', () => {
			expect.assertions(5)

			linkedList.push('foo')
			linkedList.push('foobar')
			linkedList.push('bar')

			const result = linkedList.remove('bar')

			expect(linkedList.head.value).toBe('foo')
			expect(linkedList.head.next.value).toBe('foobar')
			expect(linkedList.head.next.next).toBeNull()

			expect(linkedList.size).toBe(2)

			expect(result).toBe('bar')
		})
	})

	describe('Pop', () => {
		it('Should pop', () => {
			expect.assertions(5)

			linkedList.push('foo')
			linkedList.push('bar')
			linkedList.push('foobar')

			const result = linkedList.pop()

			expect(linkedList.head.value).toBe('foo')
			expect(linkedList.head.next.value).toBe('bar')
			expect(linkedList.head.next.next).toBeNull()

			expect(linkedList.size).toBe(2)

			expect(result).toBe('foobar')
		})

		it('Should pop more value', () => {
			expect.assertions(8)

			linkedList.push('foo')
			linkedList.push('bar')
			linkedList.push('foobar')
			linkedList.push('fizz')
			linkedList.push('buzz')
			linkedList.push('fizzbuzz')

			const result = linkedList.pop()

			expect(linkedList.head.value).toBe('foo')
			expect(linkedList.head.next.value).toBe('bar')
			expect(linkedList.head.next.next.value).toBe('foobar')
			expect(linkedList.head.next.next.next.value).toBe('fizz')
			expect(linkedList.head.next.next.next.next.value).toBe('buzz')
			expect(linkedList.head.next.next.next.next.next).toBeNull()

			expect(linkedList.size).toBe(5)

			expect(result).toBe('fizzbuzz')
		})

		it('Should not pop if linked list is empty', () => {
			expect.assertions(3)

			const result = linkedList.pop()

			expect(linkedList.head).toBeNull()

			expect(linkedList.size).toBe(0)

			expect(result).toBeNull()
		})

		it('Should set head to null if linked list has 1 node and pop', () => {
			expect.assertions(3)

			linkedList.push('foo')

			const result = linkedList.pop()

			expect(linkedList.head).toBeNull()

			expect(linkedList.size).toBe(0)

			expect(result).toBe('foo')
		})
	})

	describe('Remove index', () => {
		it('Should remove index', () => {
			expect.assertions(5)

			linkedList.push('foo')
			linkedList.push('bar')
			linkedList.push('foobar')

			const result = linkedList.removeIndex(1)

			expect(linkedList.head.value).toBe('foo')
			expect(linkedList.head.next.value).toBe('foobar')
			expect(linkedList.head.next.next).toBeNull()

			expect(linkedList.size).toBe(2)

			expect(result).toBe('bar')
		})

		it('Should remove first node', () => {
			expect.assertions(4)

			linkedList.push('foo')
			linkedList.push('bar')

			const result = linkedList.removeIndex(0)

			expect(linkedList.head.value).toBe('bar')
			expect(linkedList.head.next).toBeNull()

			expect(linkedList.size).toBe(1)

			expect(result).toBe('foo')
		})

		it('Should remove index more value', () => {
			expect.assertions(8)

			linkedList.push('foo')
			linkedList.push('bar')
			linkedList.push('foobar')
			linkedList.push('fizz')
			linkedList.push('buzz')
			linkedList.push('fizzbuzz')

			const result = linkedList.removeIndex(3)

			expect(linkedList.head.value).toBe('foo')
			expect(linkedList.head.next.value).toBe('bar')
			expect(linkedList.head.next.next.value).toBe('foobar')
			expect(linkedList.head.next.next.next.value).toBe('buzz')
			expect(linkedList.head.next.next.next.next.value).toBe('fizzbuzz')
			expect(linkedList.head.next.next.next.next.next).toBeNull()

			expect(linkedList.size).toBe(5)

			expect(result).toBe('fizz')
		})

		it('Should not remove index if linked list is empty', () => {
			expect.assertions(3)

			const result = linkedList.removeIndex(0)

			expect(linkedList.head).toBeNull()

			expect(linkedList.size).toBe(0)

			expect(result).toBeNull()
		})

		it('Should set head to null if linked list has 1 node and remove index', () => {
			expect.assertions(3)

			linkedList.push('foo')

			const result = linkedList.removeIndex(0)

			expect(linkedList.head).toBeNull()

			expect(linkedList.size).toBe(0)

			expect(result).toBe('foo')
		})

		it('Should not remove index if index not exist', () => {
			expect.assertions(4)

			linkedList.push('foo')

			const result = linkedList.removeIndex(1)

			expect(linkedList.head.value).toBe('foo')
			expect(linkedList.head.next).toBeNull()

			expect(linkedList.size).toBe(1)

			expect(result).toBeNull()
		})

		it('Should set next to null', () => {
			expect.assertions(5)

			linkedList.push('foo')
			linkedList.push('foobar')
			linkedList.push('bar')

			const result = linkedList.removeIndex(2)

			expect(linkedList.head.value).toBe('foo')
			expect(linkedList.head.next.value).toBe('foobar')
			expect(linkedList.head.next.next).toBeNull()

			expect(linkedList.size).toBe(2)

			expect(result).toBe('bar')
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
			expect(result).toBe(-1)
		})
	})

	describe('Get node by index', () => {
		it('Should get node', () => {
			expect.assertions(3)

			linkedList.push('foo')
			linkedList.push('bar')

			const result = linkedList.getNodeByIndex(0)

			expect(result.value).toBe('foo')
			expect(result.next.value).toBe('bar')
			expect(result.next.next).toBeNull()
		})

		it('Should get node next node null', () => {
			expect.assertions(2)

			linkedList.push('foo')
			linkedList.push('bar')

			const result = linkedList.getNodeByIndex(1)

			expect(result.value).toBe('bar')
			expect(result.next).toBeNull()
		})

		it.each([{ value: -2 }, { value: -1 }, { value: 3 }, { value: 4 }])(
			'Should return null if index is invalid, index: $value',
			({ value }) => {
				expect.assertions(1)

				linkedList.push('foo')
				linkedList.push('bar')

				const result = linkedList.getNodeByIndex(value)

				expect(result).toBeNull()
			}
		)
	})
})
