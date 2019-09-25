/**
 * Idea: Drew it out a bit at the bottom but the key observation is splitting the arrays to left and right subtrees
 * from the preorder traversal. You know the first node in preorder is the root. Another thing to note is to not
 * greedily split the tree in some way like a binary search. I avoided the headache of that problem by drawing
 * a big enough example that covers a lot of cases
 * Leetcode submit passed for testing
 */
class Node {
  constructor(val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function buildTree(preorder, inorder) {
  if (!preorder.length || !inorder.length) return null;

  let rootIndex = inorder.indexOf(preorder[0]);
  let leftInorder = inorder.slice(0, rootIndex);
  let rightInorder = inorder.slice(rootIndex + 1);

  let leftPreorder = preorder.slice(1, 1 + leftInorder.length);
  let rightPreorder = preorder.slice(1 + leftInorder.length);

  return new Node(preorder[0], buildTree(leftPreorder, leftInorder), buildTree(rightPreorder, rightInorder));
};

/*
Example:
preorder = [3,9,20,15,7]
inorder = [9,3,15,20,7]

    3
   / \
  9  20
    /  \
   15   7

Preorder, root left right
Inorder, left root right

We know 3 is the first node from preorder
We know to the left of 3 is 9, which is the left subtree
we know the right subtree of 3 is 15, 20, 7

Lets expand our example a bit
preorder = [3,9,20,15,7]
inorder = [9,3,15,20,7]

       10
   /      \
  7        20
 / \      /   \
5   8    18    24
        / \    /
       14  19 23

Build 10
preorder = [10, 7, 5, 8, 20, 18, 14, 19, 24, 23]
inorder =  [5, 7, 8, 10, 14, 18, 19, 20, 23, 24]

Build 7
preorder = [7, 5, 8]
inorder =  [5, 7, 8]

Build 20
preorder = [20, 18, 14, 19, 24, 23]
inorder =  [14, 18, 19, 20, 23, 24]

preorder = [5]
inorder =  [5]

*/
