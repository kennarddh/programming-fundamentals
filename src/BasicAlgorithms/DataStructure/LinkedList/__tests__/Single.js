const SingleLinkedList = require('../Single')

describe('Single linked list', () => {
	let linkedList
	const log = jest.spyOn(console, 'log').mockImplementation(() => {})

	beforeEach(() => {
		linkedList = new SingleLinkedList()

		log.mockClear()
	})

	it('Should print', () => {
		expect.assertions(2)

		const result = linkedList.print()

		linkedList.push('foo')

		linkedList.print()

		expect(result).toBeNull()
		expect(log.mock.calls[0][0]).toBe('foo')
	})

	it('Should push', () => {
		expect.assertions(3)

		linkedList.push('foo')
		linkedList.push('bar')
		linkedList.push('foobar')

		linkedList.print()

		expect(log.mock.calls[0][0]).toBe('foo')
		expect(log.mock.calls[1][0]).toBe('bar')
		expect(log.mock.calls[2][0]).toBe('foobar')
	})

	it('Should remove', () => {
		expect.assertions(5)

		linkedList.push('foo')
		linkedList.push('bar')
		linkedList.push('foobar')

		linkedList.print()

		expect(log.mock.calls[0][0]).toBe('foo')
		expect(log.mock.calls[1][0]).toBe('bar')
		expect(log.mock.calls[2][0]).toBe('foobar')

		linkedList.remove('bar')

		linkedList.print()

		expect(log.mock.calls[3][0]).toBe('foo')
		expect(log.mock.calls[4][0]).toBe('foobar')
	})

	it('Should pop', () => {
		expect.assertions(5)

		linkedList.push('foo')
		linkedList.push('bar')
		linkedList.push('foobar')

		linkedList.print()

		expect(log.mock.calls[0][0]).toBe('foo')
		expect(log.mock.calls[1][0]).toBe('bar')
		expect(log.mock.calls[2][0]).toBe('foobar')

		linkedList.pop()

		linkedList.print()

		expect(log.mock.calls[3][0]).toBe('foo')
		expect(log.mock.calls[4][0]).toBe('bar')
	})

	it('Should remove index', () => {
		expect.assertions(5)

		linkedList.push('foo')
		linkedList.push('bar')
		linkedList.push('foobar')

		linkedList.print()

		expect(log.mock.calls[0][0]).toBe('foo')
		expect(log.mock.calls[1][0]).toBe('bar')
		expect(log.mock.calls[2][0]).toBe('foobar')

		linkedList.removeIndex(1)

		linkedList.print()

		expect(log.mock.calls[3][0]).toBe('foo')
		expect(log.mock.calls[4][0]).toBe('foobar')
	})
})
