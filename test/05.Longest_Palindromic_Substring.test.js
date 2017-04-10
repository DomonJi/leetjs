/**
 * Created by Domon on 17/4/9.
 */

import longestPalidrome from '../src/05.Longest_Palindromic_Substring'
import assert from 'power-assert'

describe('LPS',function () {
  it('correctly',function () {
    assert(longestPalidrome('aaa')==='aaa')
  })
  it('test case 2',function () {
    assert(longestPalidrome('babadada')==='adada')
  })
})