// Create a lens for a named property
const propLens = property => ({
  get: item => item[property],
  set: (item, value) => ({ ...item, [property]: value }),
})

// Create a lens for an item in an array
const itemLens = predicate => ({
  get: arr => arr.find(predicate),
  set: (arr, value) => arr.map(item => predicate(item) ? value : item),
})

module.exports = {
  propLens,
  itemLens,
}
