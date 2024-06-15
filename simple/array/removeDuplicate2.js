/*
 * @Author: chenjianfeng chenjianfeng93@163.com
 * @Date: 2023-09-10 10:54:06
 * @Description: 
 */
// https://leetcode.cn/problems/remove-duplicates-from-sorted-array-ii/?envType=study-plan-v2&envId=top-interview-150

var removeDuplicates = function(nums) {
    // left指针指位置，right指针指数据
    // let left = 1, right = 1, len = nums.length
    // let needDel = false
    // debugger
    // for (; right < len; right++) {
    //     if (nums[right] !== nums[right - 1]) {
    //         nums[left] = nums[right]
    //         left++
    //         needDel = false
    //     } else {
    //         if (needDel) {
    //             continue
    //         } else {
    //             left++
    //             needDel = true
    //         }
    //     }
    // }
    // return left

    // 弱智了，这题巨简单
    if (nums.length <= 2 ) {
        return nums.length
    }
    let left = 2, right = 2, len = nums.lengh
    for (; right < len; right++) {
        if (nums[right] !== nums[left - 2]) {
            nums[left] = nums[right]
            left++
        }
    }
    return left
};


console.log(removeDuplicates([0,0,1,1,1,1,2,3,3]))