"use strict";

/**
 * Created by Domon on 17/4/8.
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function lengthOfLongestSubstring(s) {
  var map = {},
      res = 0,
      i = 0,
      p = -1;
  for (; i < s.length; map[s[i]] = i, res = Math.max(res, i++ - p)) {
    map[s[i]] > p && (p = map[s[i]]);
  }
  return res;
};