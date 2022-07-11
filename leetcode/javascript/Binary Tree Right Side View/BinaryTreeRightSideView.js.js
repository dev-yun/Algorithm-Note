// 주어진 이진 트리의 가장 오른쪽 노드의 값들을 찾아 반환하여라

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
 * @return {number[]}
 */

const rightSideView = (root) => {
  const output = [];

  if (root === null) return output;

  const queue = [root];

  while (queue.length > 0) {
    let subTreeCnt = queue.length;
    output.push(queue[subTreeCnt - 1].val);

    while (subTreeCnt > 0) {
      const top = queue.shift();

      if (top.left) queue.push(top.left);
      if (top.right) queue.push(top.right);

      subTreeCnt -= 1;
    }
  }

  return output;
};
