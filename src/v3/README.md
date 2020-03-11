# Module Version 3: Decoupling Data Models From Domain Logic

The future presented it's chaotic nature to us one last time. When the VAT calculations module was polished to near
perfection, a bug related to VAT calculations was presented to us. This time, the data model was different and the bug
wasn't located in our VAT calculations module. Instead, there were separate VAT calculations for this other data model.

Again, our code wasn't DRY.

The best solution would be to use one module for all calculations. The new module, perhaps, as it was more complete.
However, it was now bound to one data model by the lenses the module uses. It would not be wise to try and use a single
set of lenses for multiple data models, as the models should be able to live their own lives. We needed a mechanism for
sharing the code for many models.

Dependency injection proved to solve the problem.

In version 3 of our module, the functions for VAT calculations are not exposed to the client of our module until the
client provides a set of lenses to use in the calculations. The logic related to this is simple: the client should know
what kind of data items it is dealing with, so it should import appropriate lenses. The client provides lenses to the
VAT calculations module and receives calculations bound to those lenses in return. The VAT calculations module, on the
other hand, should assume that the provided lenses are well defined and should happily run logic using the provided
lenses. This assumption about well defined lenses should not be a difficult task to fulfill (see the high level
requirements in the `README.md` at the root folder of this repository).

In the models-folder, we now have two sets of lenses related to their respective data models. These lense definitions
may be used to parameterize the module to operate on a specific data model. See `simpleCalculations.test.js` for
details.

By using dependency injection, we have been able to produce a module that van operate on any kind of data model, making
the module able to adapt to new situations.

_In short: with this refactoring, we have improved the reusability of our VAT calculations module._
