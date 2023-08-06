const removeDuplicates = (nums) => {

    if (nums.length === 1) return nums
    const map = new Map()
    map.set(nums[nums.length - 1], true)
    const last = nums.length - 1
    for (let i = nums.length - 2 ; i >= 0; i--) {
        if (map.has(nums[i])) {
            nums.splice(i, 1)
        } else {
            map.set(nums[i], true)
        }
        if (i === last) break
    }

    return nums.length
}

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))