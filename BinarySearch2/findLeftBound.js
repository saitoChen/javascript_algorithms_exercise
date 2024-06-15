/*
 * @Author: chenjianfeng chenjianfeng93@163.com
 * @Date: 2022-11-30 00:12:15
 * @Description: 
 */
// 找左侧边界插入

const arr = [1,2,2,2,3,4]
const target = 2

// 左闭右开
const insertLeft = (arr, target) => {
    // let left = 0, right = arr.length
    // // 注意：左闭右开
    // while(left < right) {
    //     const mid = left + Math.floor((right - left) / 2)
    //     if (arr[mid] === target) {
    //         right = mid
    //     } else if (arr[mid] < target) {
    //         left = mid + 1
    //     } else if (arr[mid] > target) {
    //         right = mid
    //     }
    // }
    // return left
    let l = 0, r = arr.length - 1
    while (l <= r) {
        const mid = ((r - l) >> 1) + l
        if (arr[mid] >= target) {
            r = mid - 1
        } else {
            l = mid + 1
        }
    }
    return l
}

// 再试试左闭右闭
const insertLeft2 = (arr, target) => {
    let left = 0, right = arr.length - 1
    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2)
        if (arr[mid] >= target) {
            right = mid - 1
        } else if (arr[mid] < target) {
            left = mid + 1
        }
    }

    // 右闭需要单独判断一下
    // if (arr[left] != target) return -1
    return left
}

insertLeft(arr, target)