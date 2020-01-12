# jorts

[![Build status](https://travis-ci.org/waded/jorts.svg?branch=master)](https://travis-ci.org/waded/jorts)

This module abbreviates numbers for comparison using US English short-scale.

For example:

    > jorts.many([1231, 8345, 0, 19353])
    < ["1K", "8K", "0", "19K"]

This abbreviation style puts focus on differences magnitude of the numbers,
rather than possibly arbitrary precision.

When to scale, and to what precision, is handled automatically. Use `jorts.many`
on the entire set of values you'll display for best results, rather than making
repeat calls to `jorts.one`. The algorithm intentionally hides noisy precision
across the set: 117 becomes "0K" in the presence of values in the thousands (117
isn't 0, but how not-zero it is doesn't matter much when considering values much
larger than 117), while 0 is always "0" (truly nothing, as short as it gets),
and 117 on its own is "117" (there's time and space to ponder a 117 by itself
exactly as it is.)

See <http://en.wikipedia.org/wiki/Long_and_short_scales> for more about short
scales.

## jorts for charting

jorts should be used very carefully, if at all, in graphing/charting, because it
doesn't return intermediate (rounded) values it abbreviates.

In charting you should generally choose axis minimum, maximum, and axis marker
values because they bound & explain the other data *and then* because they have
nice abbreviations. Say you're plotting `[545, 627, 1993, 4871]`. You might
choose axis marker values `[0, 1000, 2000, 3000, 4000, 5000]`. You'd plot 545
close to midway between 0 and 1000, 627 a bit above 545, 1993 near 2000, and
4871 near 5000. You might label the 0 plot "0", the 1000 "1K", the 2000 "2K",
and you might then think "ah, I'll use jorts for that part", but then you're
making an assumption about how it works internally. You already did the hard
work of choosing values that abbreivate nicely, and you may as well finish it
without jorts.

## Notes

- Only US English is supported. We could add additional locales over time but
  I'm not familiar enough with non-US English short scaling expectations to do
  it. Please offer to help if you'd like to research and implement a locale.
- In US English "M" is used instead of "MM" for 10^6. It's understood "MM" is
  sometimes used in US financial reporting, but the focus of this library is
  abbreviation and "M" is shorter. "B" is used for 10^9.
- The largest scale used is 10^12. For US English this seemed sufficient. If
  you're scaling larger numbers scientific notation may be more appropriate than
  short scaling.

