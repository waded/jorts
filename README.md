Jorts abbreviates numbers for numeric comparison using US English short-scale.

E.g. 

   jorts.many([1231, 8345, 0]) yields ["1K", "8K", "0"]

Such abbreviation puts focus on magnitude rather than precision. It saves mental, vocal, and screen ink for more important things.

See http://en.wikipedia.org/wiki/Long_and_short_scales for more about short scales in different cultures.

When to scale, when not to scale, and if scaling, to what precision, is handled automatically by jorts. See the tests for specific details.

Notes:

- Only US English short scale is supported. We could add additional locale support over time but I'm not familiar enough with all non-US English excpectations to do it. Please offer to help if you'd like to research and implement a locale's short-scaling!
- US English "M" is used instead of "MM" for 10^6 for brevity, even though "MM" is sometimes used in financial reporting
- The largest scale used is trillion (10^12.) 500 billion is the largest number I've personally needed to scale, and expontential scales are more useful than short-scaling in scientific applications. I've extended it to trillion in support of scaling the US national debt in dollars, even though there are very few other US dollar values in the trillions to compare the debt to.