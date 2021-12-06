/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    
    const isNodeTheClosestRoot = (node, p, q) => {
        let minor, greater;
        if (p.val > q.val) {
            minor = q;
            greater = p;
        } else {
            minor = p;
            greater = q;
        }
        return node.val >= minor.val && node.val <= greater.val;
    }
    
    const getLCA = (node, p, q) => {
        if (isNodeTheClosestRoot(node, p, q)) {
            return node;
        } else if (node.val > p.val && node.val > q.val) {
            return getLCA(node.left, p, q);
        } else {
            return getLCA(node.right, p, q);
        } 
    }
    
    return getLCA(root, p, q);
};
