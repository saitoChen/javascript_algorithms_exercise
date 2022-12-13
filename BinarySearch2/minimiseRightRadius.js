// https://leetcode.cn/problems/heaters/


// const houses = [1,2,3,4], heaters = [1, 4]
const houses = [1,5], heaters = [10]
const findRadius = (houses, heaters) => {
  heaters.sort((a, b) => a - b)
  let result = 0
  const len = heaters.length
  for (let house of houses) {
    // 当前房子左侧暖炉的位置
    let i = headtersPosSearch(heaters, house)
    // 当前房子右侧暖炉的位置
    let j = i + 1

    const left = i < 0 ? Infinity : house - heaters[i]
    const right = j >= len ? Infinity : heaters[j] - house

    result = Math.max(result, Math.min(left, right))
  }

  return result
}

const headtersPosSearch = (nums, target) => {
  let left = 0, right = nums.length - 1
  if (nums[left] > target) return -1 // 说明房屋左侧没有暖炉
  while (left < right) {
    const mid = left + Math.floor((right - left + 1) / 2)
    if (nums[mid] > target) {
      right = mid - 1
    } else {
      left = mid
    }
  }

  return left
}

console.log(findRadius(houses, heaters))