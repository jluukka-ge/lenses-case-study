# Module Version 2: Refactoring Complex Property Access Using Lenses

We needed to define a reusable way for accessing properties on our data objects. This would allow us to separate model
change concerns from other application logic. Lenses proved to be useful for this purpose, as they focus only around
data access concerns and nothing more. We would be able to get "accessors" without changing the way we define or
instantiate our data models and instances.

For a short definition of lenses, see `README.md` at the root folder of this repository.

In version 2 of our module, we defined lenses for the necessary data content of our data items:
- Simple property access lenses for `netAmount`, `grossAmount`, `extras` and `value` properties
- A lense for finding an item from an array matching condition `item => item.id === 'vatPercentage'`
- A complex lense for deeply accessing `vatPercentace` data given the input item for our function

The `simpleCalculations.js` file now imports predefined lenses for the data model we expect to process and uses the
lenses for all reads and writes on the data content on the input item.

The `simpleFillGrossAmount` function no longer expresses how to access data on the input item. Rather, it expresses
what data from the input item is required and what should be written as new data content. Should the structure of our
data item change in the future, only the related lense must be modified to ensure that the functions that operate on
such data items work as expected.

_In short: with this refactoring, we have reduced the maintenance effort required in case our data models change._
