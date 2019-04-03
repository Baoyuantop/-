### RK (Rabin-Karp)
> Main string, Pattern string
> main string.length === n, pattern string.length === m.
> n > m

- Add a hash algorithm based on [BF](./BF.md).
- Calculate the hash values of the main string and the pattern string separately for comparison.
- The key is to calculate the speed of the hash(The hash value calculation formula of adjacent substrings has an intersection).
- Time complexity is O(n). 