var maxDepth = function (root) {
  let maxDepth = 0;
  const explore = (node, depth) => {
    const currentDepth = depth + 1;
    maxDepth = Math.max(currentDepth, maxDepth);
    if (node.left) {
      explore(node.left, currentDepth);
    }
    if (node.right) {
      explore(node.right, currentDepth);
    }
  };
  if (!root) {
    return 0;
  }
  explore(root, 0);
  return maxDepth;
};
