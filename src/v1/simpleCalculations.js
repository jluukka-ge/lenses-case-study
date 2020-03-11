// Simple VAT calculations
const simpleFillGrossAmount = item => {
  const netAmount = item.netAmount
  const vatPercentage = item.vatPercentage

  const grossAmount = netAmount * (1 + (vatPercentage / 100))

  const newItem = {
    ...item,
    grossAmount
  }

  return newItem
}

/* ... */

module.exports = {
  simpleFillGrossAmount,
  // ...
}
