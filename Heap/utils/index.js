// 实现一个二叉堆


function minHeap(A = []) {
    this.heapify(A);
}

// 上浮了哈，沿着父节点向上比较，如果比父节点小，就和父节点进行交换
minHeap.prototype._shiftUp = function(i) {
// i / 2是求父节点, >>> 0 表示整除暂时
let parent_i = (i / 2) >>> 0;
while (parent_i > 0) {
    if (this.h[i] < this.h[parent_i]) {
        [this.h[i], this.h[parent_i]] = [this.h[parent_i], this.h[i]];
    }
    i = parent_i
    parent_i = (parent_i / 2) >>> 0;
}
};

// 下沉，沿着最小路径将节点下沉
minHeap.prototype._shiftDown = function(i) {
while (i * 2 <= this.h.length - 1) {
    // mc为i的子节点中最小值节点的索引
    const mc = this._minChild(i);
    // 如果当前值大于最小的子节点，那么就交换
    // ？为什么要和最小子节点交换呢？
    if (this.h[i] > this.h[mc]) {
        [this.h[i], this.h[mc]] = [this.h[mc], this.h[i]];
    }
    i = mc;
}
};

// 求当前节点的左右子节点的最小值
minHeap.prototype._minChild = function(i) {
    if (i * 2 + 1 > this.h.length - 1) return i * 2;
    if (this.h[i * 2] < this.h[i * 2 + 1]) return i * 2;
    return i * 2 + 1;
};

minHeap.prototype.pop = function() {
    if (this.h.length === 1) throw new Error('空了就别弹了吧？');
    // 由二叉堆特性可以知道根节点是最小值，所以取走
    const ans = this.h[1];
    // 为了维护二叉堆完全二叉树的性质，需要将最后一个节点放到根节点
    this.h[1] = this.h[this.h.length - 1];
    // 移除最后一个节点
    this.h.pop();
    // 开始将根节点下沉
    this._shiftDown(1);
    return ans;
};

minHeap.prototype.push = function(a) {
    this.h.push(a);
    this._shiftUp(this.h.length - 1);
    console.log(this.h);
};

minHeap.prototype.heapify = function(A) {
    // 初始化的时候添加一个前置的索引为0的项
    // 目的是保证树的根节点是1（从1开始计数），左子节点为2 * i，右子节点为2 * i + 1
    this.h = [0].concat(A);
    // i = 1;
    // while (i < this.h.length) {
    //     this._shiftDown(i);
    //     i++;
    // }
    console.log('init ->', this.h)
};

// test:
h = new minHeap([4, 5, 8, 7, 10, 9]);
// h.push(4);
// h.push(5);
// h.pop();
// h.pop();
// console.log(h.h); // inspect internal value
h.pop()
h.push(1)
h.pop()

