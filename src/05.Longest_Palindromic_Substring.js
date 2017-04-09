/**
 * Created by Domon on 17/4/9.
 */
/**
 * @param {string} s
 * @return {string}
 */
let longestPalindrome = function (s) {
  let n = s.length, maxLength = 0, res
  let pal = Array.from({length: n}, _ => Array(n))
  for (let i = 0; i < n; i++) {
    let j = i
    while (j >= 0) {
      if (s[i] === s[j] && (i - j < 2 || pal[j + 1][i - 1])) {
        pal[j][i] = true
        if (maxLength < i - j + 1) {
          maxLength = i - j + 1
          res = s.slice(j, i + 1)
        }
      }
      j--
    }
  }
  return res
}
