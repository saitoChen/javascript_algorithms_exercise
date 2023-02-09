// https://leetcode.cn/problems/non-overlapping-intervals/

const eraseOverlapIntervals = (intervals) => {
  intervals.sort((a, b) => a[1] - b[1])
  let count = 1
  let end = intervals[0][1]
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] >= end) {
      end = intervals[i][1]
      count++
    }
  }

  return intervals.length - count
}