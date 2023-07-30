// 快速排序

const arr = [5, 4, 2, 1, 6, 7]

const quickSort = (arr, start, end) => {
  if (start > end) return
  let i = start, j = end, pivot = arr[start]
  while (i < j) {
    while (arr[j] >= pivot && i < j) {
      j--
    }
    while (arr[i] <= pivot && i < j) {
      i++
    }

    if (i < j) {
      [arr[i], arr[j]] = [arr[j], arr[i]]
    }
  }

  arr[start] = arr[i]
  arr[i] = pivot

  quickSort(arr, start, i - 1)
  quickSort(arr, i + 1, end)

  return arr
}

console.log(quickSort(arr, 0, arr.length - 1))