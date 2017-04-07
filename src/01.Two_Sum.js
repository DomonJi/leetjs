/**
 * Created by Domon on 17/4/7.
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let twoSum = function (nums, target) {
  let hash = {}, match
  for (let i = 0; i < nums.length; hash[nums[i++]] = i) {
    match = hash[target - nums[i]]
    if (match !== undefined) return [match - 1, i]
  }
}
export default twoSum