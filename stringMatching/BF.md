### BF (Brute Force)
> Main string, Pattern string
> main string.length === n, pattern string.length === m.
> n > m

- In the main string, we check the n-m+1 strings whose starting positions are 0,1,2.....n-m and length m, to see if they match the pattern string.
- Worst case time complexity is O(m*n).
- Simple thoughts are not easy to make mistakes.
