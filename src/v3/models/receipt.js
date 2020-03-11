const {
  propLens,
} = require('../utils/lenses')

const netAmountLens = propLens('net')
const vatPercentageLens = propLens('taxPrc')
const grossAmountLens = propLens('gross')

module.exports = {
  lenses: {
    netAmountLens,
    vatPercentageLens,
    grossAmountLens,
  }
}
