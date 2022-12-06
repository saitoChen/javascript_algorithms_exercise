/*
 * @Author: chenjianfeng chenjianfeng93@163.com
 * @Date: 2022-11-22 23:15:22
 * @Description: 
 */
// https://leetcode.cn/problems/longest-substring-without-repeating-characters/

// 滑动窗口，map记录字符和它对应得位置，max记录最长的字符串
var lengthOfLongestSubstring = function(s) {
    const map = new Map()
    const len = s.length;
    let max = 0
    for (let start = 0, end = 0; end < len; end++) {
        // 此时说明存在相同的字符串了，这时候需要重置start的位置
        if (map.has(s.charAt(end))) {
            start = Math.max(map.get(s.charAt(end)), start)
        }
        // 计算max的最大值
        max = Math.max(max, end - start + 1)
        // 在map中end向前滑动一位
        map.set(s.charAt(end), end + 1)
    }

    return max
};

lengthOfLongestSubstring("abcabcbb")