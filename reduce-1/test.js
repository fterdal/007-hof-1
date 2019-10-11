console.clear()
const { expect } = require('chai')
const reduceEntries = require('.')

describe('Entries to Object', () => {
  it('Returns an object', () => {
    const input = []
    expect(reduceEntries(input)).to.deep.equal({})
  })
  it('Returns an object with one given entry', () => {
    const input = [['key', 'value']]
    expect(reduceEntries(input)).to.deep.equal({
      key: 'value',
    })
  })
  it('Assigns keys from the first element of each entry', () => {
    const input = [['keyA'], ['keyB'], ['keyC']]
    const object = reduceEntries(input)
    expect(Object.keys(object)).to.have.members(['keyA', 'keyB', 'keyC'])
  })
  it('handles arbitrary values and number of keys', () => {
    const input = [
      ['first', 'value1'],
      ['second', 5],
      ['third', false],
      ['fourth'],
    ]
    expect(reduceEntries(input)).to.deep.equal({
      first: 'value1',
      second: 5,
      third: false,
      fourth: undefined,
    })
  })
  it('Overwrites duplicate entries with the latest entry', () => {
    const input = [['first', 5], ['second', 'some value'], ['first', 20]]
    expect(reduceEntries(input)).to.deep.equal({
      first: 20,
      second: 'some value',
    })
  })
})
