const { expect } = require('chai')
const { simpleFillGrossAmount } = require('./simpleCalculations')

describe('v1', () => {
  describe('simpleCalculations', () => {
    it('should calculate gross amount based on net amount and VAT percentage', () => {
      const invoice = {
        netAmount: 100,
        vatPercentage: 24,
      }

      const expected = {
        netAmount: 100,
        vatPercentage: 24,
        grossAmount: 124,
      }

      const result = simpleFillGrossAmount(invoice)

      expect(result).to.deep.equal(expected)
    })
  })
})
