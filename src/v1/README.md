# Module Version 1: Implementing a Module From Scratch

Version 1 of the VAT calculation module includes the function defined in `simpleCalculations.js`. It is one of many
functions, whose responsibility is to take care of all complexities related to VAT calculations and any customer or
supplier specific configurations related to it.

The `simpleFillGrossAmount` function ensures that the `grossAmount` of an item is consistent with the values of
`netAmount` and `vatPercentage` by the relation `netAmount * (1 + (vatPercentage / 100)) = grossAmount` (that is,
`grossAmount` is equal to the sum of `netAmount` and VAT, which is defined as a percentage of `netAmount`).

Implementing this function for the fist time was very straightforward: read the required values from item, calculate
`grossAmount` and set it back to an item. Return a modified copy of the original item for good measure. Done!
