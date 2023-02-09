// https://leetcode.cn/problems/find-all-anagrams-in-a-string/

// 思路
// 1. 当s < p时，一定不存在异位词
// 2. 窗口的大小就是p的长度，比较p中每个单词的数量和窗口中单词的数量是否相等

const findAnagrams = (s, p) => {
  let slen = s.length, plen = p.length
  if (slen < plen) return []

  let result = []
  // 26个字母的个数
  const countS = new Array(26).fill(0)
  const countP = new Array(26).fill(0)
  for (let i = 0; i < plen; i++) {
    countS[s[i].charAtCode() - 'a'.charAtCode()]++
    countP[p[i].charAtCode() - 'a'.charAtCode()]++
  }
  if (countS.toString() === countP.toString()) {
    result.push(0)
  }

  for(let i = 0; i < slen - plen; i++) {
    // --是因为已经比较过了，需要还原
    countS[s[i].charAtCode() - 'a'.charAtCode()]--
    countS[s[i + plen].charAtCode() - 'a'.charAtCode()]++

    if(countS.toString() === countP.toString()) {
      result.push(i + 1)
    }
  }
  return result
}


console.log(findAnagrams('cbaebabacd', 'abc'))