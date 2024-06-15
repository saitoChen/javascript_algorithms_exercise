//https://leetcode-solution-leetcode-pp.gitbook.io/leetcode-solution/medium/365.water-and-jug-problem

var canMeasureWater = function(jug1Capacity, jug2Capacity, targetCapacity) {
    if (jug1Capacity + jug2Capacity === targetCapacity) return true
    if (jug1Capacity === targetCapacity || jug2Capacity === targetCapacity) return true
    if (jug1Capacity + jug2Capacity < targetCapacity) return false

    // [0, 0]模拟的是两个空杯
    const queue = [[0, 0]]
    // 用来缓存是否记录过某种杯状态
    const cache = new Set()

    while (queue.length > 0) {
        const [x, y] = queue.pop()
        if (x + y === targetCapacity || x === targetCapacity || y === targetCapacity) return true
        if (cache.has(`${x}-${y}`)) continue
        cache.add(`${x}-${y}`)
        queue.push([0, y])
        queue.push([x, 0])
        queue.push([x, jug2Capacity])
        queue.push([jug1Capacity, y])

        // 把x中的水倒入y中
        queue.push([x - Math.min(x, jug2Capacity - y), y + Math.min(x, jug2Capacity - y)])
        // 把y中的水倒入x中
        queue.push([x + Math.min(y, jug1Capacity - x), y - Math.min(y, jug1Capacity - x)])
    }

    return false
};

console.log(canMeasureWater(3, 5, 4))
console.log(canMeasureWater(2, 6, 5))
console.log(canMeasureWater(1, 2 ,3))