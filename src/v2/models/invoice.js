const {
  propLens,
  itemLens,
} = require('../utils/lenses')

const {
  compose,
} = require('../utils/lenseUtils');

const netAmountLens = propLens('netAmount')
const grossAmountLens = propLens('grossAmount')
const extrasLens = propLens('extras')
const valueLens = propLens('value')

const vatPercentageItemLens = itemLens(item => item.id === 'vatPercentage')

const vatPercentageLens = compose(
  extrasLens,
  compose(vatPercentageItemLens, valueLens)
)


module.exports = {
  lenses: {
    netAmountLens,
    extrasLens,
    vatPercentageItemLens,
    vatPercentageLens,
    grossAmountLens,
  }
}
