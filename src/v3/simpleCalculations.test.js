const { expect } = require('chai')

const { lenses: receiptLenses } = require('./models/receipt')
const { lenses: invoiceLenses } = require('./models/invoice')
const { getCalculations } = require('./simpleCalculations')

describe('v3', () => {
  describe('simpleCalculations', () => {
    it('should calculate gross amount for invoices based on net amount and VAT percentage', () => {
      const { simpleFillGrossAmount } = getCalculations(invoiceLenses)

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

    it('should calculate gross amount for receipts based on net amount and VAT percentage', () => {
      const { simpleFillGrossAmount } = getCalculations(receiptLenses)

      const receipt = {
        net: 100,
        taxPrc: 24,
      }

      const expected = {
        net: 100,
        taxPrc: 24,
        gross: 124,
      }

      const result = simpleFillGrossAmount(receipt)

      expect(result).to.deep.equal(expected)
    })
  })
})
