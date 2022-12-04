const arr = [4, 5, 0, -2, -3, 1]
const prevSum = []
prevSum[0] = arr[0]
prevSum[1] = arr[0] + arr[1]
prevSum[2] = arr[0] + arr[1] + arr[2]
prevSum[3] = arr[0] + arr[1] + arr[2] + arr[3]
prevSum[4] = arr[0] + arr[1] + arr[2] + arr[3] + arr[4]
prevSum[5] = arr[0] + arr[1] + arr[2] + arr[3] + arr[4] + arr[5]

//...

// arr[i] = prev[i] - prev[i - 1]
// arr[2] = prevSum(2) - prevSum(1) = 9 - 9

// arr[i] + ... + arr[j] = prevSum[j] - prevSum[i - 1]
// arr[2] + arr[3] + [arr4] = prevSum(4) - prevSum(1) = 4 - 9

// 前缀和思路

// prevSum(j) - prevSum(i - 1) % k === 0 根据同余定理 -> prevSum(j) % k === prevSum(i - 1) % k

console.log(prevSum)