# What's jorts.js

jorts.js abbreviates numbers for numeric comparison using US English
short-scale.

For example:

    > jorts.many([1231, 8345, 0, -9353])
    < ["1K", "8K", "0", "-9K"]

This abbreviation style puts focus on differences magnitude of the numbers,
rather than possibly arbitrary precision.

See <http://en.wikipedia.org/wiki/Long_and_short_scales> for more about short
scales in different cultures.

When to scale, and to what precision, is handled automatically by jorts. Use
'jorts.many' on the entire set of values to be compared for best results, rather
than making individual calls to 'jorts.one'.
The algorithm attempts to hide irrelevant precision across the set of values, for
example the number 117 will round to "0K" in the presence of other values in the
thousands, but 0 is still "0", and a 117 on its own is still "117."

## Build status

[![Build status](https://travis-ci.org/waded/jorts.svg?branch=master)](https://travis-ci.org/waded/jorts)

## Notes

- Only US English short scale is supported. We could add additional locale
  support over time but I'm not familiar enough with all non-US English
  expectations to do it. Please offer to help if you'd like to research and
  implement a locale's short-scaling.
- US English "M" is used instead of "MM" for 10^6 for brevity. It's understood
  "MM" is sometimes used in financial reporting, but I don't like it.
- The largest scale used is trillion (10^12.) For US English use this seems
  sufficient. If you're scaling larger numbers scientific notation may be more
  appropriate than short scaling.
