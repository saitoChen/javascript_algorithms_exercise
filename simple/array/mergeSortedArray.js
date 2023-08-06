const merge = (nums1, m, nums2, n) => {
    let i = 0, j = 0
    while (i < m && j < n) {
        if (nums1[i] >= nums2[j]) {
            nums1.splice(i, 0, nums2[j])
            j++
        } else {
            i++
        }
    }
    if (j >= n) {
        nums1 = nums1.slice(0, m + n)
    } else {
        let remainCount = n - j
        nums1 = [...nums1.slice(0, (m + n - remainCount)), ...nums2.slice(j, n)]
    }
    // nums1 = [...nums1.slice(0, (m - remainCount)), ...nums2.slice(j, n)]
    // if (j >= n) {
    //     nums1 = nums1.slice(0, m)
    // } else {
    //     let count = n - j
    //     nums1 = [...nums1.slice(0, (m - count)), ...nums2.slice(j, n)]
    // }
    console.log(nums1)
};

merge([0], 0, [1], 1)