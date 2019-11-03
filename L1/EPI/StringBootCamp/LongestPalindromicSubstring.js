/**
            C         R
0 0 1 0 3 0 5 0 7 0 0 0 0 0 0 0 0
$ # a # b # a # b # a # b # a # @
0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6
                ^
  M

1. Get mirror, and copying the length of the palindrome over

2. Expansion, expand based off of i + (p[i] + 1) and i - (p[i] + 1)

3. Check did we make a longer palindromic substring?
  If so update our new center for it and our bound

**/

function longestPalindromicSubstring(s) {
  // P represents the longest palindrome lengths at each index
  let P = new Array(s.length);
  P.fill(0);
  s = '$' + s.split('').join('#') + '@';
  let C = 0;
  let R = 0;
  for (let i = 1; i < s.length - 1; i++) {
    let mirror = 2 * C - i;
    if (mirror > 0) {
      P[i] = P[mirror];
    }

    while (s[i + (P[i] + 1)] === s[i - (P[i] + 1)]) {
      P[i]++;
    }

    if (i + P[i] > R) {
      C = i;
      R = i + P[i];
    }
  }
}


longestPalindromicSubstring('abba');
