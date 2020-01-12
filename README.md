# What's jorts.js

jorts.js abbreviates numbers for comparison using US English short-scale.

For example:

    > jorts.many([1231, 8345, 0, -9353])
    < ["1K", "8K", "0", "-9K"]

This abbreviation style puts focus on differences magnitude of the numbers,
rather than possibly arbitrary precision.

See <http://en.wikipedia.org/wiki/Long_and_short_scales> for more about short
scales in different cultures.

When to scale, and to what precision, is handled automatically by jorts. Use
'jorts.many' on the entire set of values you'll display for best results, rather
than making repeated calls to 'jorts.one'. The algorithm intentionally hides
irrelevant precision across the set: 117 rounds to "0K" in the presence of
values in the thousands (117 is not 0, but how not-zero it is doesn't matter
much more than how 1117 and 1000 differ), but 0 is always "0" (truly nothing),
and 117 on its own is still "117."

## Build status

[![Build status](https://travis-ci.org/waded/jorts.svg?branch=master)](https://travis-ci.org/waded/jorts)

## Notes

- Only US English short scale is supported. We could add additional locale
  support over time but I'm not familiar enough with all non-US English
  expectations to do it. Please offer to help if you'd like to research and
  implement a locale's short-scaling.
- In US English "M" is used instead of "MM" for 10^6. It's understood "MM" is
  sometimes used in financial reporting, but the focus of this library is
  abbreviation and "M" is shorter. "B" is used for 10^9.
- The largest scale used is trillion (10^12.) For US English use this seems
  sufficient. If you're scaling larger numbers scientific notation may be more
  appropriate than short scaling.
- This library's not intended for chart axes because, with the exception of 0,
  it aggressively rounds, which in the case of axis minimum and maximum labels
  puts the USS Chart on a collision course with a giant lieberg.
