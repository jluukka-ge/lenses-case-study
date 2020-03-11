# Study on Maintainability and Reusability with Lenses

This repository contains the source code presented at TampereJS meetup on March 5th 2020. The presentation approximates
the learning journey my team and I went through while incorporating lenses for property access in our source code.

Our early experiments with lenses resulted in two beneficial outcomes: improved maintainability of our source code and
improved reusability of our data processing modules. Improved maintainability is illustrated by the transition from v1
to v2, and improved reusability by the transition from v2 to v3 of the example module presented under `src`-folder.
Further details can be read in the READMEs under source code folders.

## Context for the Example Module

The example module presented in this repository contains a single function from a module responsible for handling all
customer and supplier specific complexities and configurations related to VAT calculations. The function presented here
is responsible for maintaining data coherence within a single data item, coherence defined as maintaining equation
`grossAmount = netAmount * (1 + VAT%)` within the item's own data content.

Function signature:
```
Item => Item  // Some item => Validated Item
```

## About Lenses

Lenses are a simple abstraction for accessing data from a data structure. As abstractions, they provide a way of
declaratively expressing what data is required. The code that uses lenses for data access needn't know the structure
of the data items it is working with, however. That information is written in the lense definitions.

Lenses are the Functional Programming equivalent for accessors in Object-Oriented Programming. Key differences between
lenses and accessors are that lenses are decoupled from data models and operate on data in an immutable manner.

As an idea from Functional Programming land, lenses are well defined on an abstract level. This abstract definition
includes function signatures for a getter and a setter and a set of laws that the behaviour of the lenses must follow.

### Function Signatures

The getter is a mapping from a "whole" to a "part" of the whole:

```
Whole => Part
```

The setter is a mapping from a "whole" and a "part" to a new "whole":

```
(Whole, Part) => Whole
```

### Lense Laws

__Identity:__ First read, then write to the same object using one lense results in no difference between the original
and the result objects.

```javascript
set(o, get(o)) === o                 |   const o1 = { foo: 'bar' }
                                     |   o1.foo = o1.foo
                                     |   o1 // { foo: 'bar' }
```

__Retention:__ First write, then read to the same object using one lense results in the written value being read.

```javascript
get(set(o, v)) === v                 |   const o2 = {}
                                     |   o2.foo = 'bar'
                                     |   o2.foo // 'bar'
```

__Double set:__ First write one value, then another value on the same object using one lense results in the second value
staying in effect.

```javascript
set(set(o, v1), v2) ~= set(o, v2)    |   const o3 = {}
                                     |   o3.foo = 'bar'
                                     |   o3.foo = 'baz'
                                     |   o3 // { foo: 'baz' }
```


## About the Code

This repository contains sample code to showcase the discussed concepts. To further illustrate how the code works, there
are unit tests to express how the client of our module would use the exported functions.

To run the unit test, first run:

```
npm install
```

Unit tests are run with the command:

```
npm run test
```

The code is simplified to keep the focus on the discussed content. Due to this simplification, there are some logical
bugs in the code. In case you spot a bug in the code, feel free to ignore it or report it as an issue or a pull request.
Please bear in mind that I do not intend to fix bugs in this repository unless I feel it is necessary.


## Questions and Answers

__Q: Rather than reading values from an input item, would it be possible to pass the required values as direct arguments
for the function?__

A: It is possible to write a function mapping `netAmount` and `VAT%` to a `grossAmount`. However, since the module
should maintain the data coherence within a data object, the module still must read the values from the input item
at some point. Therefore, to achieve the benefits presented in this repository, lenses would still prove useful.

__Q: Would it be possible to define native JS getters and setters for the properties that were moved to a more complex
structure?__

A: It would be completely possible to modify the original code in a manner that callers would still read and write
VAT% value by referencing the `vatPercentage` field of a data item. However, such items must be created in a uniform
manner to ensure that the getter and setter definitions exist on the object. If at any time the we would read or write
on the `vatPercentage` property without the getters and setters defined for this object, we would risk using wrong
values in our calculations.

In addition, we decided to explicitly express that reads and writes may be complex operations using lenses. Getters and
setters would have hidden the true data structure by mimicking simple property access when a more complex process is
actually taking place.
