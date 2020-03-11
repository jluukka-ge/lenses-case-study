# Module Version 1.1: Modifying Access to a Property

Anticipating the future may be difficult in software development. In the case of our VAT calculations module, an
unanticipated future was realized when `vatPercentage` was supposed to start behaving as an "extra", which for the
most part are user definable values associated with our data items and on top of which a set of features were built on.

Extras were an array of data objects, so accessing `vatPercentage` via extras involved finding the object for it from
the extras array first. In fact, we needed three separate operations for accessing `vatPercentage` value:
- Read the `extras` array
- Find the object representing `vatPercentage` extra
- Read the value for `vatPercentage` from the extra object (or use a default)

Reading `vatPercentage` in this manner does not seem like a big deal when looking at this individual function, but we
had a total of 72 reads or writes on `vatPercentage`, so modifying all of these started to feel like a problem.

Our code wasn't DRY.
