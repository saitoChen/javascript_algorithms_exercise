// const s = "abcabcbb"
// 找出不重复的连续子串
// const s = 'dvdf' // 不能使用start = end的case
const s = "pwwkew" // 不能使用start++的case
// 思路，使用滑动窗口，start和end，start记录每次不重复字符串的起始位置，end记录不重复字符串的终止位置
// 每次循环时end + 1，同时判断当前end下最大不符重复的个数Math.max(max, end - start + 1)
const lengthOfLongestSubstring = (s) => {
    const map = new Map()
    const len = s.length
    let max = 0
    for (let start = 0, end = 0; end < len; end++) {
        // 先判断当前end的这个字符是否在map中存在，如果存在说明字符重复了，此时需要更新start的位置
        if (map.has(s.charAt(end))) {
            // 注意，在用例dvdf中，当遇到第二个d时，不能简单的将start移至第二个d处，故这里的start = end其实是错误的
            // 应该将start向前移动一位，但不能直接移动，因为会存在两个字符连续相同的场景
            // start = end
            start = Math.max(map.get(s.charAt(end)), start)
        }
        max = Math.max(max, end - start + 1)
        // 记录当前字符所在的位置
        map.set(s.charAt(end), end + 1)
    }
    return max
}
console.log(lengthOfLongestSubstring(s))