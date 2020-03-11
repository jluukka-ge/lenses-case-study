const { expect } = require('chai')
const { simpleFillGrossAmount } = require('./simpleCalculations')

describe('v2', () => {
  describe('simpleCalculations', () => {
    it('should calculate gross amount based on net amount and VAT percentage', () => {
      const invoice = {
        netAmount: 100,
        extras: [
          { id: 'extra-1' },
          { id: 'vatPercentage', value: 24 },
          { id: 'extra-2' },
        ]
      }

      const expected = {
        netAmount: 100,
        extras: [
          { id: 'extra-1' },
          { id: 'vatPercentage', value: 24 },
          { id: 'extra-2' },
        ],
        grossAmount: 124,
      }

      const result = simpleFillGrossAmount(invoice)

      expect(result).to.deep.equal(expected)
    })
  })
})
