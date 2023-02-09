// https://leetcode.cn/problems/max-area-of-island/solution/javascriptban-jie-ti-si-lu-by-ityou-o-ya9n/

//标星星

// 思路: 先找到1这个点，然后递归去找四周的点，计算总和,

const maxAreaOfIsland = (grid) => {
  let x = grid.length, y = grid[0].length, count = 0
  for (let i = 0; i < x; i++) {
    for (let j = 0; j < y; j++) {
      if (grid[i][j] === 1) {
        count = Math.max(count, calclucateIsland(grid, x, y, i, j))
      }
    }
  }
  return count
}

const calclucateIsland = (grid, x, y, i, j) => {
  // 处在不可能成为岛或者不是1的情况
  if (i >= x || i < 0 || j >= y || j < 0 || grid[i][j] === 0) return 0
  let num = 1
  // 需要把当前点标为0，不然遍历四周节点时又会计算回这个点导致无限循环
  grid[i][j]=0;
  num += calclucateIsland(grid, x, y, i + 1, j)
  num += calclucateIsland(grid, x, y, i - 1, j)
  num += calclucateIsland(grid, x, y, i, j + 1)
  num += calclucateIsland(grid, x, y, i, j - 1)

  return num
}

const grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]


console.log(maxAreaOfIsland(grid))