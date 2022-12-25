// https://leetcode.cn/problems/sqrtx/solution/

var mySqrt = function(x) {
  let i = 0, j = x
  let result = -1
  while (i <= j) {
      const mid = i + Math.floor((j - i) / 2) 
      if (mid * mid <= x) {
        result = mid
        i = mid + 1
      } else {
        j = mid - 1
      }
  }

  return result
};

console.log(mySqrt(4))