//https://leetcode.cn/problems/maximum-number-of-vowels-in-a-substring-of-given-length/
// 滑动窗口的经典题

const vowels = ['a', 'e', 'i', 'o', 'u']

const maxVowels = (s, k) => {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u'])
    let count = 0,
        l = 0,
        r = 0
    while (r < k) {//初始化大小k的窗口
        vowels.has(s[r]) && count++
        r++
    }
    let max = count
    while (r < s.length) {//不断移动窗口
        vowels.has(s[r]) && count++
        // count--是因为此时是k + 1个数，所以如果l是元音的话要去掉
        vowels.has(s[l]) && count--
        l++
        r++
        max = Math.max(max, count)//更新最大元音数
    }
    return max
};

console.log(maxVowels("abciiidef", 3))