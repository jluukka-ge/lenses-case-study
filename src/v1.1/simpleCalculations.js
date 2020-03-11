// Simple VAT calculations
const simpleFillGrossAmount = item => {
  const netAmount = item.netAmount

  const vatPercentageExtra = item.extras.find(extra => extra.id === 'vatPercentage')
  const vatPercentage = vatPercentageExtra ? vatPercentageExtra.value : 0

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
