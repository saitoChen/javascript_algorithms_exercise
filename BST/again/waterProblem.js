/*
 * @Author: chenjianfeng chenjianfeng93@163.com
 * @Date: 2022-10-17 22:26:25
 * @Description: 
 */
// 水壶问题嗷，老规矩
// 直接bfs

const canMeasureWater = (jug1Capacity, jug2Capacity, targetCapacity) => {
    if ( jug1Capacity === targetCapacity || jug2Capacity === targetCapacity || jug1Capacity + jug2Capacity === targetCapacity) return true
    // 记录已查看过的场景
    const seen = new Set()
    const queue = [[0, 0]]

    while (queue.length > 0) {
        const [x, y] = queue.pop()
        if (x === targetCapacity || y === targetCapacity || x + y === targetCapacity) return true
        // 如果这个场景访问过，就不在近一步分析
        if (seen.has(`${x}+${y}`)) continue
        seen.add(`${x}+${y}`)
        queue.push([x, 0])
        queue.push([0, y])
        queue.push([x, jug2Capacity])
        queue.push([jug1Capacity, y])
        // 关键场景
        //场景一，将x中的水倒入y中，直到x倒光或者y倒满
        queue.push([x - Math.min(x, jug2Capacity - y), y + Math.min(x, jug2Capacity - y)])
        //场景二，将y中的水倒入x中，直到y倒光或者x倒满
        queue.push([x + Math.min(y, jug1Capacity - x), y - Math.min(y, jug1Capacity - x)])
    }

    return false
}


console.log(canMeasureWater(2, 6, 5))