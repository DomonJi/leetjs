"use strict";

/**
 * Created by Domon on 17/4/9.
 */
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function longestPalindrome(s) {
  var n = s.length;
  var pal = Array.from({ length: n }, function (_) {
    return Array(n);
  });
  var maxLength = 0;
  var res = void 0;
  for (var i = 0; i < n; i++) {
    var j = i;
    while (j >= 0) {
      if (s[i] === s[j] && (i - j < 2 || pal[j + 1][i - 1])) {
        pal[j][i] = true;
        if (maxLength < i - j + 1) {
          maxLength = i - j + 1;
          res = s.slice(j, i + 1);
        }
      }
      j--;
    }
  }
  return res;
};