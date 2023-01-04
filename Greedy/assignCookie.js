// https://leetcode.cn/problems/assign-cookies/


// 思路：贪心算法
const findContentChildren = (g, s) => {
  g.sort((a, b) => a - b)
  s.sort((a, b) => a - b)
  let result = 0
  let cookieIndex = s.length - 1
  for (let i = g.length - 1; i >= 0; i--) {
    if (cookieIndex >= 0 && s[cookieIndex] >= g[i]) {
      result++
      cookieIndex--
    }
  }

  return result
};