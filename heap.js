class Heap {
  constructor(list) {
    this.h = [0, ...list ]
  }

  pop() {
    const res = this.h[1]
    this.h[1] = this.h[this.h.length - 1]
    this.h.pop()
    this.sink(1)
    return res
  }
  // 不断地下沉
  sink(i) {
    while(i * 2 < this.h.length - 1) {
      const minIndex = getMinChildIndex(i)
      if (this.h[i] > this.h[minIndex]) {
        [this.h[i], this.h[minIndex]] = [this.h[minIndex], this.h[i]]
      }
      i = minIndex
    }
  }

  getMinChildIndex(i) {
    if (i * 2 + 1 > this.h.length - 1) return i * 2
    if (this.h[i * 2] > this.h[i * 2 + 1]) return i * 2
    return i * 2 + 1
  }

  push(val) {
    this.h.push(val)
  }

}