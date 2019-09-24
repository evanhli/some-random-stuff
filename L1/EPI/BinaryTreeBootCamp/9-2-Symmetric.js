/*
  Train of thought:
  1 - What kind of traversals can we use here?
  2 - Ignore that, a tree is symmetric if all of its subtrees are symmetric
    Not true, consider
       1
     /   \
    2     2
   / \   / \
  3   4 4   3

  3 - Nope, We just need to check mirror image

  Compare children left and right

  What if a node is null?, well dont recurse down that way

  Learning outcomes: Probably better to approach the problem upfront before thinking about traversals
  Also, consider base case faster when writing helper.
*/
class Node {
  constructor(val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function isSymmetric(root) {
  if (!root) return true;
  return helper(root.left, root.right);
}

function helper(left, right) {
  if (!left && !right) return true;
  if (!left || !right) return false;
  return left.val === right.val && helper(left.left, right.right) && helper(left.right, right.left);
}

/*
     A
   /   \
  B     C
 / \    / \
D   E  F   G
            \
             H
*/
let H = new Node('H', null, null)
let G = new Node('G', null, H)
let F = new Node('F', null, null)
let E = new Node('E', null, null)
let D = new Node('D', null, null)
let C = new Node('C', D, F, G)
let B = new Node('B', D, E)
let A = new Node('A', B, C)

console.log(isSymmetric(A) === false);


/*
      A
   /    \
  B      B
 / \    / \
D   E  E   D
*/

let E2 = new Node('E', null, null)
let E1 = new Node('E', null, null)
let D2 = new Node('D', null, null)
let D1 = new Node('D', null, null)
let B2 = new Node('B', E2, D2);
let B1 = new Node('B', D1, E1)
A = new Node('A', B1, B2)

console.log(isSymmetric(A) === true);


/*
      A
   /    \
  B      B
 / \    / \
E   D  E   D
*/

E2 = new Node('E', null, null)
E1 = new Node('E', null, null)
D2 = new Node('D', null, null)
D1 = new Node('D', null, null)
B2 = new Node('B', E2, D2);
B1 = new Node('B', E1, D1)
A = new Node('A', B1, B2)

console.log(isSymmetric(A) === false);
