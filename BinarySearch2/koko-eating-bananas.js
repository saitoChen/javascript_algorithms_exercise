/*
 * @Author: chenjianfeng chenjianfeng93@163.com
 * @Date: 2024-04-11 22:39:07
 * @Description: 
 */
// https://leetcode-cn.com/problems/koko-eating-bananas/description/

var minEatingSpeed = function(piles, h) {
    // slow -> 最慢吃派，一小时吃一个，fast -> 最快吃派，
   let slow = 1, fast = Math.max(...piles)

   while (slow <= fast) {
       let mid = Math.floor((fast - slow) / 2) + slow;

       if (canEatBananas(piles, h, mid)) {
           // 压一下速度
           fast = mid - 1
       } else {
           slow = mid + 1
       }
   }
   return slow
};

const canEatBananas = (piles, h, mid) => {
   let time = 0

   for (let i = 0; i < piles.length; i++) {
       // 向上取整牛牛牛
       time += Math.floor(piles[i] + mid - 1) / mid
   }
   return time <= h
}

minEatingSpeed([3,6,7,11], 8)