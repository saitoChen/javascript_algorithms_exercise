const { Tree } = require("./index");

const list = [3, 1, 4, 2, 7, 6, 8, 10];

const root = new Tree(list).generateTree();

// 使用递归
// const preOrder = (root) => {
//   if (!root) return;
//   console.log(root.val);
//   preOrder(root.left);
//   preOrder(root.right);
// };

// 使用迭代，自己维护一个调用栈
const preOrder = (root) => {
  if (!root) return null;
  const stack = [root];
  while (stack.length > 0) {
    const node = stack.pop();
    if (!node) continue;
    console.log(node.val);
    stack.push(node.right);
    stack.push(node.left);
  }
};

console.log(preOrder(root));
