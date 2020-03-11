// Compose lenses to manipulate more complex structures
const compose = (outerLens, innerLens) => ({
  get: item => {
    const outerResult = outerLens.get(item)
    const innerResult = outerResult && innerLens.get(outerResult)
    return innerResult
  },
  set: (item, value) => {
    const outerValue = outerLens.get(item)
    const innerResult = outerValue && innerLens.set(outerValue, value)
    const outerResult = innerResult && outerLens.set(item, innerResult)
    return outerResult
  },
})

module.exports = {
  compose,
}
