// 寻找target在数组中的右侧边界的位置

const arr = [1, 2, 2, 2, 3, 5]
const target = 2

// 左闭右开的写法
const findRightPosition = (arr, target) => {
  // let start = 0, end = arr.length
  // while(start < end) {
  //   const mid = start + Math.floor((end - start) / 2)

  //   if (arr[mid] === target) {
  //     start = mid + 1
  //   } else if (arr[mid] < target) {
  //     start = mid + 1
  //   } else if (arr[mid] > target) {
  //     end = mid
  //   }

  // }
  // return start - 1
  let l = 0, r = arr.length - 1
  while (l <= r) {
    const mid = ((r - l) >> 1) + l
    if (arr[mid] <= target) {
      l = mid + 1
    } else {
      r = r - 1
    }
  }
  return l
}

// 左闭右闭的写法

const findRightPosition2 = (arr, target) => {
  let start = 0, end = arr.length - 1
  while(start <= end) {
    const mid = start + Math.floor((end - start) / 2)

    if (arr[mid] === target) {
      start = mid + 1
    } else if (arr[mid] < target) {
      start = mid + 1
    } else if (arr[mid] > target) {
      end = mid - 1
    }

  }
  if (end < 0 || arr[end] !== target) return -1

  return end
}

console.log(findRightPosition2(arr, target))