/*
 * @Author: chenjianfeng chenjianfeng93@163.com
 * @Date: 2023-09-26 15:58:37
 * @Description: 
 */
// https://leetcode.cn/problems/jump-game/?envType=study-plan-v2&envId=top-interview-150

var canJump = function(nums) {
    let maxReach = 0, len = nums.length
    for (let i = 0; i <len; i++) {
        if (i > maxReach) return false
        maxReach = Math.max(maxReach, i + nums[i])
    }
    return true
};

// [2, 3, 1, 1, 4]
