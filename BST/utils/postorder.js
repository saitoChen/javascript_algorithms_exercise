/*
 * @Author: chenjianfeng chenjianfeng9335@gmail.com
 * @Date: 2023-12-14 00:01:55
 * @Description:
 */
const { Tree } = require("./index");
const list = [3, 1, 4, 2, 7, 6, 8, 10];

const root = new Tree(list).generateTree();

const postorder = (root) => {
  if (!root) return null;
  postorder(root.left);
  postorder(root.right);
  console.log(root.val);
};

console.log(postorder(root));
