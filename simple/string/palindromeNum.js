/*
 * @Author: chenjianfeng chenjianfeng9335@gmail.com
 * @Date: 2023-09-04 21:50:01
 * @Description: 
 */
// https://leetcode.cn/problems/palindrome-number/

// 121
const isPalindrome = (x) => {
    const strList = String(x).split('')
    let i = 0, j = strList.length - 1
    while (i < j) {
        if (strList[i] !== strList[j]) {
            return false
        } else {
            i++
            j--
        }
    }
    return true
};

console.log(isPalindrome(11))