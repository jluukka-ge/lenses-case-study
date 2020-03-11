// Import lenses
const {
  lenses: {
    netAmountLens,
    vatPercentageLens,
    grossAmountLens,
  }
} = require('./models/invoice')

// Simple VAT calculations
const simpleFillGrossAmount = item => {
  const netAmount = netAmountLens.get(item)
  const vatPercentage = vatPercentageLens.get(item)

  const grossAmount = netAmount * (1 + (vatPercentage / 100))

  return grossAmountLens.set(item, grossAmount)
}

/* ... */

module.exports = {
  simpleFillGrossAmount,
  // ...
}
