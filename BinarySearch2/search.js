/*
 * @Author: chenjianfeng chenjianfeng93@163.com
 * @Date: 2022-11-23 23:50:17
 * @Description: 
 */
// 最基本的二分查找

const arr = [1, 2, 3, 4, 5, 6, 7]

const search = (nums, target) => {
    let start = 0, end = nums.length - 1
    while(start <= end) {
        const mid = Math.floor((start + end) / 2)
        if (nums[mid] === target) {
            return nums[mid]
        } else if (nums[mid] < target) {
            start = mid + 1
        } else if (nums[mid] > target) {
            end = mid - 1
        }
    }
    return null
}

console.log(search(arr, 9))