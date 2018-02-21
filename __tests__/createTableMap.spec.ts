import { RawData, createTableMap } from '../src/exportFromJSON'

describe('createTableMap', () => {
  it('works as expected', () => {
    const tableItems: RawData = [
      { greeting: 'hello' },
      { foo: 'foo', bar: 'bar' },
      { a: 100, b: [ 1, 2, 3 ], c: { x: 200, y: 300 }, d: 'D', e: null, f: undefined },
    ]
    const tableMap = createTableMap(tableItems)

    const expectedTableMap = {
      greeting: ['hello', '', ''],
      foo: ['', 'foo', ''],
      bar: ['', 'bar', ''],
      a: ['', '', '100'],
      b: ['', '', JSON.stringify([1, 2, 3])],
      c: ['', '', JSON.stringify({ x: 200, y: 300 })],
      d: ['', '', 'D'],
      e: ['', '', 'null'],
      f: ['', '', ''],
    }

    expect(tableMap).toEqual(expectedTableMap)
  })
})
