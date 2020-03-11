// Simple VAT calculations
const simpleFillGrossAmount = lenses => item => {
  const { netAmountLens, vatPercentageLens, grossAmountLens } = lenses

  const netAmount = netAmountLens.get(item)
  const vatPercentage = vatPercentageLens.get(item)

  const grossAmount = netAmount * (1 + (vatPercentage / 100))

  return grossAmountLens.set(item, grossAmount)
}

/* ... */

// Get calculations parameterized on lenses
const getCalculations = lenses => ({
  simpleFillGrossAmount: simpleFillGrossAmount(lenses)
  // ...
})

module.exports = { getCalculations }
