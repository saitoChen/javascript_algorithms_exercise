/*
 * @Author: chenjianfeng chenjianfeng93@163.com
 * @Date: 2022-12-18 23:00:20
 * @Description: 
 */
// https://github.com/leetcode-pp/91alg-9-daily-check/issues

// 思路：遍历watch的小时和分钟，将他们转换成2进制，接着获取二进制中所有的1，1的个数就是turnedOn
// js转换成二进制的方法是num.toStrint(2)

const readBinaryWatch = (turnedOn) => {
    const result = []
    for (let h = 0; h < 12; h++) {
        for (let m = 0; m <= 59; m++) {
            if (getOneCount(transform2Binary(h)) + getOneCount(transform2Binary(m)) === turnedOn) {
                result.push(h + ":" + (m < 10 ? "0" : "") + m)
            }
        }
    }
    return result
}

const transform2Binary = (num) => num.toString(2)
const getOneCount = (binary) => binary.split('0').join('').length