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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  const flipNode = (node) => {
    const right = node.left ? flipNode(node.left) : null;
    const left = node.right ? flipNode(node.right) : null;
    return new TreeNode(node.val, left, right);
  };
  if (!root) {
    return null;
  }
  return flipNode(root);
};
