/*
  A binary tree is height balanced if the difference of the height between its left and right subtrees
  is no more than 1

  Idea: Bottom up approach
  DFS down the tree till you hit a root node and return 0
  After you return that 0, it will be set as the height as either a left or right subtree (when doing comparison in parent node)
  Now in parent node, check that left and right have a difference in height of no more than 1
    if there is a > 1 difference: return a signal number (-1) to show that a case has failed and we don't need to check
    every other value anymore
    else: return the maximum height between the left and right subtrees (as it is the height of the subtree)

  As you go up the tree you'll be comparing heights of the precomputed left and right subtrees (O(1)) and checking for
  the signal number

  If we return a valid height, that means we got a height balanced binary tree, otherwise we would have returned the signal number


  Learning outcome: When trying to return 2 different values in a recursive function, try just returning a signal value
  that can be used to represent 2 states.
*/
class Node {
  constructor(val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function isBalanced(node) {
  return dfsHeight(node) !== -1;
}

function dfsHeight(node) {
  if (!node) {
    return 0;
  }
  // DFS down
  const leftHeight = dfsHeight(node.left);
  if (leftHeight === -1) return -1;
  const rightHeight = dfsHeight(node.right);
  if (rightHeight === -1) return -1;
  if (Math.abs(leftHeight - rightHeight) > 1) return -1;
  return Math.max(dfsHeight(node.left), dfsHeight(node.right)) + 1;
}

let C = new Node('C', null, null)
let B = new Node('B', C, null)
let A = new Node('A', B, null)

console.log(isBalanced(A) === false);

C = new Node('C', null, null)
B = new Node('B', null, null)
A = new Node('A', B, C)
console.log(isBalanced(A) === true);


/*
     A
   /  \
  B    C
 /     /
E    D
    / \
   F  G

*/
let G = new Node('G', null, null)
let F = new Node('F', null, null)
let E = new Node('E', null, null)
let D = new Node('D', F, G)
C = new Node('C', D, null)
B = new Node('B', E, null)
A = new Node('A', B, C)

console.log(isBalanced(A) === false);

/*
     A
   /   \
  B     C
 / \    / \
D   E  F   G
*/
G = new Node('G', null, null)
F = new Node('F', null, null)
E = new Node('E', null, null)
D = new Node('D', null, null)
C = new Node('C', D, F, G)
B = new Node('B', D, E)
A = new Node('A', B, C)

console.log(isBalanced(A) === true);


/*
     A
   /   \
  B     C
 / \    / \
D   E  F   G
            \
             H
*/
const H = new Node('H', null, null)
G = new Node('G', null, H)
F = new Node('F', null, null)
E = new Node('E', null, null)
D = new Node('D', null, null)
C = new Node('C', D, F, G)
B = new Node('B', D, E)
A = new Node('A', B, C)

console.log(isBalanced(A) === true);
