"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Created by Domon on 17/4/7.
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function twoSum(nums, target) {
  var hash = {},
      match = void 0;
  for (var i = 0; i < nums.length; hash[nums[i++]] = i) {
    match = hash[target - nums[i]];
    if (match !== undefined) return [match - 1, i];
  }
};
exports.default = twoSum;