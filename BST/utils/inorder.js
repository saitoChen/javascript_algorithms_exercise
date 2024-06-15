const { Tree } = require("./index");

const list = [3, 1, 4, 2, 7, 6, 8, 10];

const root = new Tree(list).generateTree();

// 使用递归
// var inorderTraversal = function (root) {
//   if (!root) return [];
//   const dfs = (root) => {
//     if (!root) return;
//     dfs(root.left);
//     console.log(root.val);
//     dfs(root.right);
//   };
//   dfs(root);
// };

// 使用迭代
var inorderTraversal = function (root) {
  if (!root) return [];
  const stack = [root];
  while (stack.length > 0) {
    const node = stack[stack.length - 1];
    stack.push(node.right);
  }
};

console.log(inorderTraversal(root));
