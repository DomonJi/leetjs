'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Created by Domon on 17/4/9.
 */
/**
 * @param {string} str
 * @return {string}
 */
// let longestPalindrome = function (s) {
//   let n = s.length, maxLength = 0, res
//   let pal = Array.from({length: n}, _ => Array(n))
//   for (let i = 0; i < n; i++) {
//     let j = i
//     while (j >= 0) {
//       if (s[i] === s[j] && (i - j < 2 || pal[j + 1][i - 1])) {
//         pal[j][i] = true
//         if (maxLength < i - j + 1) {
//           maxLength = i - j + 1
//           res = s.slice(j, i + 1)
//         }
//       }
//       j--
//     }
//   }
//   return res
//}

var longestPalindrome = function longestPalindrome(s) {
  s = '#' + s.split('').join('#') + '#';
  var RL = Array.from({ length: s.length }, function (_) {
    return 0;
  }),
      maxR = 0,
      pos = 0,
      res = '';
  for (var i = 0; i < s.length; i++) {
    RL[i] = i < maxR ? Math.min(RL[2 * pos - i], maxR - i) : 1;
    while (i >= RL[i] && i + RL[i] < s.length && s[i - RL[i]] === s[i + RL[i]]) {
      RL[i]++ && maxR < i + RL[i] - 1 && (maxR = RL[i] + i - 1, pos = i);
    }
    res.length < RL[i] && (res = s.slice(i - RL[i] + 1, i + RL[i]).split('#').join(''));
  }
  return res;
};
exports.default = longestPalindrome;