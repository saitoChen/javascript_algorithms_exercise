/*
 * @Author: chenjianfeng chenjianfeng93@163.com
 * @Date: 2022-12-06 23:21:00
 * @Description: 
 */
var sortArray = function (nums) {

    quickSort(nums, 0, nums.length - 1)

    return nums
};

const quickSort = (nums, left, right) => {
    if (left > right) return
    const mid = portition(nums, left, right)

    quickSort(nums, left, mid - 1)
    quickSort(nums, mid + 1, right)
}

const portition = (nums, left, right) => {
    const pivot = nums[left]
    let i = left, j = right
    while (i < j) {
        while (nums[j] >= pivot && i < j) {
            j--
        }
        while (nums[i] <= pivot && i < j) {
            i++
        }

        if (i < j) {
            swap(nums, i, j)
        }
    }
    swap(nums, left, i)

    return i
}

const swap = (nums, i, j) => {
    return [nums[i], nums[j]] = [nums[j], nums[i]]
}

console.log(sortArray([5, 2, 3, 1]))
