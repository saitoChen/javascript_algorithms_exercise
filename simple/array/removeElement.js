/*
 * @Author: chenjianfeng chenjianfeng93@163.com
 * @Date: 2023-09-09 13:13:47
 * @Description: 
 */
// https://leetcode.cn/problems/remove-element/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    // 不知道为什么这个双指针的方案没过


    // let i = 0, j = nums.length - 1
    // while (i < j) {
    //     if ((nums[i] === val && nums[j] !== val) || (nums[j] === val && nums[i] !== val)) {
    //         [nums[i], nums[j]] = [nums[j], nums[i]]
    //         i++
    //         j--
    //     } else if (
    //         nums[i] === val && nums[j] === val
    //     ) {
    //         j--
    //     } else if (
    //         nums[i] !== val && nums[j] !== val
    //     ) {
    //         i++
    //         j--
    //     }
    // }

    // return nums.slice(0, i + 1)
    // 官方推荐的双指针
    let len = nums.length
    let left = 0, right = 0
    for (; right < len; right++) {
        if (nums[right] !== val) {
            nums[left] = nums[right] 
            left++
        }
    }
    return left
};

console.log(removeElement([3,2,2,3], 3))