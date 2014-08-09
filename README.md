Jorts abbreviates numbers for numeric comparison, using US English short-scale

E.g. 1231 becomes "1K", and 2 becomes "8M"

Such abbreviation puts focus on magnitude rather than precision. It saves mental, vocal, and screen ink for more important things.

See http://en.wikipedia.org/wiki/Long_and_short_scales for more about short scales in different cultures.

When to scale, and to what precision, is domain-specific. See the tests for specific details about when Jorts' functions apply scaling, when they do not, and how much precision is allowed.

Notes:

- Only US English short scale is supported. We'd like to add additional locale support over time, but aren't familiar enough with all expecations. Please offer to help if you'd like to research a locale!
- US English "M" is used instead of "MM" for 10^6 for brevity, even though "MM" is sometimes used in financial scenarios in the US
- The largest scale used is trillion (10^12.) 500 billion is the largest number I've personally needed to scale, and expontential scales are probably more useful than short-scaling in scientific applications. We've extended it to trillion in support of scaling the US national debt specifically, even though there's no other value in the trillions to compare it to...