/*
 * @Author: chenjianfeng chenjianfeng93@163.com
 * @Date: 2023-12-27 16:52:50
 * @Description: 
 */
const a = [1, 3, 5, 7, 9]
const b = [1, 2, 4]


const combine = (num1, m, num2, n) => {
    const res = []
    let i = 0, j = 0
    while (i < m && j < n) {
        if (num1[i] <= num2[j]) {
            res.push(num1[i])
            i++
        } else {
            res.push(num2[j])
            j++
        }
    }

    if ( i < m ) {
        res.push(...num1.slice(i))
    }
    if (j < n) {
        res.push(...num2.slice(j))
    }

    for (let k = 0; k < res.length; k++) {
        num1[k] = res[k]
    }
}


combine(a, 8, b, 3)
console.log(a)