const util = require('util')

const SingleLinkedList = require('../Single')

describe('Single linked list', () => {
	let linkedList

	beforeEach(() => {
		linkedList = new SingleLinkedList()
	})

	it('Should print', () => {
		expect.assertions(2)

		const log = jest.spyOn(console, 'log').mockImplementation(() => {})

		const result = linkedList.print()

		linkedList.push('foo')

		linkedList.print()

		expect(result).toBeNull()
		expect(log.mock.calls[0][0]).toBe('foo')
	})

	it('Should push', () => {
		expect.assertions(1)

		linkedList.push('foo')
		linkedList.push('bar')
		linkedList.push('foobar')

		expect(util.inspect(linkedList.head, { breakLength: Infinity })).toBe(
			"Node { value: 'foo', next: Node { value: 'bar', next: Node { value: 'foobar', next: null } } }"
		)
	})

	it('Should remove', () => {
		expect.assertions(1)

		linkedList.push('foo')
		linkedList.push('bar')
		linkedList.push('foobar')

		linkedList.remove('bar')

		expect(util.inspect(linkedList.head, { breakLength: Infinity })).toBe(
			"Node { value: 'foo', next: Node { value: 'foobar', next: null } }"
		)
	})

	it('Should pop', () => {
		expect.assertions(2)

		linkedList.push('foo')
		linkedList.push('bar')
		linkedList.push('foobar')

		const result = linkedList.pop()

		expect(util.inspect(linkedList.head, { breakLength: Infinity })).toBe(
			"Node { value: 'foo', next: Node { value: 'bar', next: null } }"
		)

		expect(result).toBe('foobar')
	})

	it('Should remove index', () => {
		expect.assertions(2)

		linkedList.push('foo')
		linkedList.push('bar')
		linkedList.push('foobar')

		const result = linkedList.removeIndex(1)

		expect(util.inspect(linkedList.head, { breakLength: Infinity })).toBe(
			"Node { value: 'foo', next: Node { value: 'foobar', next: null } }"
		)

		expect(result).toBe('bar')
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
		expect.assertions(2)

		linkedList.push('foo')

		const result = linkedList.remove('bar')

		expect(util.inspect(linkedList.head, { breakLength: Infinity })).toBe(
			"Node { value: 'foo', next: null }"
		)
		expect(result).toBeNull()
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
		expect.assertions(2)

		linkedList.push('foo')

		const result = linkedList.removeIndex(1)

		expect(util.inspect(linkedList.head, { breakLength: Infinity })).toBe(
			"Node { value: 'foo', next: null }"
		)
		expect(result).toBeNull()
	})

	it('Should return index indexOf', () => {
		expect.assertions(2)

		linkedList.push('foo')

		const result = linkedList.indexOf('foo')

		expect(util.inspect(linkedList.head, { breakLength: Infinity })).toBe(
			"Node { value: 'foo', next: null }"
		)
		expect(result).toBe(0)
	})

	it('Should return index indexOf if value is not first', () => {
		expect.assertions(2)

		linkedList.push('foo')
		linkedList.push('bar')

		const result = linkedList.indexOf('bar')

		expect(util.inspect(linkedList.head, { breakLength: Infinity })).toBe(
			"Node { value: 'foo', next: Node { value: 'bar', next: null } }"
		)
		expect(result).toBe(1)
	})

	it('Should return -1 indexOf if linked list empty', () => {
		expect.assertions(2)

		const result = linkedList.indexOf('foo')

		expect(linkedList.head).toBeNull()
		expect(result).toBe(1)
	})
})
