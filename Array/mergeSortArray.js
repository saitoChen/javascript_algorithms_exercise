// https://leetcode.cn/problems/merge-sorted-array/
const merge = (nums1, m, nums2, n) => {
    nums1.splice(m + 1, n)
    const result = []
    let p1 = 0, p2 = 0
    let cur
    while(p1 !== m || p2 !== n) {
        if (p1 === m) {
            cur = nums2[p2]
            p2++
        } else if (p2 === n) {
            cur = nums1[p1]
            p1++
        } else if (nums1[p1] < nums2[p2]) {
            cur = nums1[p1]
            p1++
        } else {
            cur = nums2[p2] 
            p2++
        }
        result[p1 + p2 - 1] = cur
    }

    for (let i = 0; i < m + n; i++) {
        nums1[i] = result[i]
    }

};

const nums1 = [1, 2, 4, 5, 0, 0, 0]
const m = 3
const nums2 = [2, 2, 6]
const n = 3

merge(nums1, m, nums2, n)
console.log(nums1)