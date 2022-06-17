// 깊이 우선 탐색을 통해 제일 하단의 leaf node부터 탐색한다.
// 4가지 상황에 맞춰 코드를 진행한다.
// 만약 매개변수root(node)가 null이 아니라면 covered(최하단부터)로 대입한다.
// 만약 오른쪽 자식, 왼쪽 자식이 모두 covered면 부모는 notCovered로 할당한다.
// 만약 왼쪽자식 또는 오른쪽자식에 notCovered가 있다면 부모는 hasCamera로 할당한다.
// 만약 왼쪽자식 또는 오른쪽자식에 hasCamera가 있다면 부모는 covered로 할당한다.

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
 * @return {number}
 */
var minCameraCover = function (root) {
  let count = 0;
  const notCovered = 0;
  const hasCamera = 1;
  const covered = 2;

  function dfs(root) {
    // Recursive termination condition
    if (!root) {
      return covered;
    }

    const left = dfs(root.left);
    const right = dfs(root.right);
    if (left === covered && right === covered) {
      return notCovered;
    } else if (left === notCovered || right === notCovered) {
      count++;
      return hasCamera;
    } else if (left === hasCamera || right === hasCamera) {
      return covered;
    }
  }
  if (dfs(root) === notCovered) {
    count++;
  }

  return count;
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
