/*
  Reconstruct a binary tree given its preorder traversal sequence
  This preorder traversal is modified to mark where a left or right child is empty

  Idea: EZ tbh
  Lessons learned: none really.
  For time complexity, pass an index instead of shifting through the array.
  O(n) time for array shift and O(n)
*/

class Node {
  constructor(val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function preorderBuild(traversal) {
  let root = null;
  if (!traversal.length) return root;

  let val = traversal.shift();
  if (val === null) return val;

  root = new Node(val);
  root.left = preorderBuild(traversal);
  root.right = preorderBuild(traversal);
  return root;
}

let traversal = ['H', 'B', 'F', null, null, 'E', 'A', null, null, null, 'C', null, 'D', null, 'G', 'I', null, null, null];

let root = preorderBuild(traversal);

function inorderLog(root) {
  if (!root) {
    return;
  }
  inorderLog(root.left);
  console.log(root.val)
  inorderLog(root.right);
}

inorderLog(root);
