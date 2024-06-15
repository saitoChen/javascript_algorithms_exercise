/*
 * @Author: chenjianfeng chenjianfeng9335@gmail.com
 * @Date: 2023-12-27 23:18:49
 * @Description:
 */
// https://leetcode.cn/problems/count-number-of-nice-subarrays/

var numberOfSubarrays = function (nums, k) {
  // 前缀和
  // const sum = [];
  // let ans = 0;
  // sum[0] = 0;
  // const len = nums.length;
  // // % -> odd -> 1, even -> 0
  // // [1, 1, 2, 1, 1] -> [1, 1, 0, 1, 1]
  // for (let i = 0; i < len; i++) {
  //   // [1, 1, 0, 1, 1]
  //   sum[i + 1] = sum[i] + (nums[i] % 2);

  //   // sum -> [0, 1, 2, 2, 3, 4]
  // }
  // // 计算两和之差

  // // 使用数组的方式
  // let count = new Array(sum.length).fill(0);
  // for (let j = 0; j < sum.length; j++) {
  //   if (sum[j] - k >= 0) {
  //     ans += count[sum[j] - k];
  //   }
  //   count[sum[j]]++;
  // }

  // return ans;
  if (!nums) return 0;
  const sum = [];
  // [1 ,1 ,2, 1, 1] -> [0, 1, 2, 2, 3, 4]
  for (let i = 0; i < nums.length; i++) {
    sum[i] = nums[i] % 2;
  }
  let presum = 0;
  let count = 0;
  const map = new Map();
  map.set(0, 1);
  for (let i = 0; i < sum.length; i++) {
    presum += sum[i];
    if (map.has(presum - k)) {
      count += map.get(presum - k);
    }
    if (map.has(presum)) {
      map.set(presum, map.get(presum) + 1);
    } else {
      map.set(presum, 1);
    }
  }
  return count;
};

console.log(numberOfSubarrays([1, 1, 2, 1, 1], 3));
