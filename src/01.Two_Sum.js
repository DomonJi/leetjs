/**
 * Created by Domon on 17/4/7.
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let twoSum = (nums, target) => {
  let hash = {}
  let match
  for (let i = 0; i < nums.length; i++) {
    match = hash[target-nums[i]]
    if(match!==undefined) return [match,i]
    hash[nums[i]] = i
  }
}
export default twoSum