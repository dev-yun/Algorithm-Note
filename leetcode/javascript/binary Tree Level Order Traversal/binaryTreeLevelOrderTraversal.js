/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  const output = [];

  if (root === null) return output;

  const queue = [root];

  while (queue.length > 0) {
    let subTreeCnt = queue.length;

    const level = [];

    while (subTreeCnt > 0) {
      const top = queue.shift();
      level.push(top.val);
      if (top.left) queue.push(top.left);
      if (top.right) queue.push(top.right);

      subTreeCnt -= 1;
    }

    output.push(level);
  }

  return output;
};
