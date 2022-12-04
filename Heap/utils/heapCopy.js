
class Heap {
    constructor(list) {
        this.heap = [0, ...list]
    }

    push(val) {
        this.heap.push(val)
        this.up(this.heap.length - 1)
    }

    // 上浮操作
    up(i) {
        // 
        let parentIndex = Math.floor(i / 2)
        while(parentIndex > 0) {
            if (this.heap[parentIndex] > this.heap[i]) {
                [this.heap[parentIndex], this.heap[i]] = [this.heap[i], this.heap[parentIndex]]
            }
            parentIndex = Math.floor(parentIndex / 2)
        }
    }

    pop() {
        if (this.heap.length === 1) throw new Error('空堆')
        const num = this.heap[1]
        // 因为是满二叉树，所以二叉堆最后层的最后一个节点是数组的最后一个节点
        this.heap[1] = this.heap[this.heap.length - 1]
        // 删除最后一个节点，因为已经去第一个节点了
        this.heap.pop()
        // 开始将新的根节点进行下沉
        this.sink(1)
        return num
    }

    sink(i) {
        // 从i开始不停的找左子节点
        // 因为二叉堆是有序的，所以左子节点要小于右子节点
        while( 2 * i < this.heap.length - 1 ) {
            // minIndex为当前节点的左右子节点中的最小值的索引
            const minIndex = this.getMinChildIndex(i)
            if (this.heap[i] > this.heap[minIndex]) {
                [this.heap[i], this.heap[minIndex]] = [this.heap[minIndex], this.heap[i]]
            }
            i = minIndex
        }
    }

    // 求当前节点的左右子节点最小值的索引
    getMinChildIndex(i) {
        if (i * 2 + 1 > this.heap.length - 1) return i * 2
        if (this.heap[i * 2 + 1] > this.heap[i * 2]) return i * 2
        return i * 2 + 1
    }
}

const heap = new Heap([1, 2, 3, 4])
heap.pop()
console.log(heap.heap)
heap.push(1)
console.log(heap.heap)
heap.pop()
console.log(heap.heap)