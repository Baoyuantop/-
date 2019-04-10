### BM (Boyer-Moore)

> Explore the most efficient mode string after the number of shifts.

#### bad character rule
- Pattern string matching order from back to front.
- A character that cannot match is called a bad character.(from the main string)
- The bad character was not found in the pattern string, and the pattern string was swept backwards to the bad character.
#### good suffix shift