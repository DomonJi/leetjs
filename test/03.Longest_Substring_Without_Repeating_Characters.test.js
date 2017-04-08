/**
 * Created by Domon on 17/4/8.
 */
import lengthOfLongestSubstring from '../src/03.Longest_Substring_Without_Repeating_Characters'
import assert from 'power-assert'

describe('length of longest substring',function () {
  it('correctly',function () {
    assert(lengthOfLongestSubstring('abca')===3)
  })
})