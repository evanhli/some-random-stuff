/*

***REVIEW THIS***

 Write an inorder traversal without using recursion because it inheritly has an O(h) space complexity
 You have access to parent pointers
 Idea: You need to know whether you've visited a left or right subtree before.
 Keep a variable that tracks previous visited node.
 If the node you visited is this nodes left or right, then respond accordingly

 One big thing in this problem is breaking down the problem into a FSM, moving up or down the tree
 Should definitely revisit this problem as it took a bit to nail down the logic. Without thinking of it has going up and down the
 tree it was very hard
*/

class Node {
  constructor(val, left, right, parent) {
    this.val = val;
    this.left = left;
    this.right = right;
    this.parent = parent;
  }
}

/*
  Inorder goes left most then root then right

      10
   /      \
  7        20
 / \      /   \
5   8    18    24
 \       / \    /
  6    14  19 23

Go to 5,
Go to 6,

*/
function inorderTraverse(node) {
  let curr = node;
  let prev = null;
  while (curr !== null) {
    let next;
    // If you're going down the tree
    if (curr.parent === prev) {
      if (curr.left) {
        next = curr.left
      } else {
        console.log(curr.val);
        next = curr.right ? curr.right : curr.parent;
      }
    } else if (curr.left === prev) { // If you're going up the tree
      console.log(curr.val);
      next = curr.right ? curr.right : curr.parent;
    } else {
      next = curr.parent;
    }
    prev = curr;
    curr = next;
  }
}

let A = new Node(10);
let B = new Node(7);
let C = new Node(5);
let D = new Node(6);
let E = new Node(8);
let F = new Node(20);
let G = new Node(18);
let H = new Node(24);
let I = new Node(23);

A.left = B
A.right = F
A.parent = null;

B.left = C;
B.right = E
B.parent = A;

C.left = null;
C.right = D;
C.parent = B;

D.left = null;
D.right = null;
D.parent = C;

E.left = null;
E.right = null;
E.parent = B;

F.left = G;
F.right = H;
F.parent = A;

G.left = null;
G.right = null;
G.parent = F;

H.left = I;
H.right = null;
H.parent = F;

I.left = null;
I.right = null;
I.parent = H;

/*
        10
      /     \
     7       20
    / \    /    \
   5   8  18    24
    \           /
     6        23
*/

inorderTraverse(A);

/*
      10
      /
     9
    /
   8
  /
 7
*/
D = new Node(7, null, null);
C = new Node(8, D, null);
D.parent = C;
B = new Node(9, C, null);
C.parent = B;
A = new Node(10, B, null, null);
B.parent = A;

inorderTraverse(A);

// Skew right
D = new Node(13, null, null);
C = new Node(12, null, D);
D.parent = C;
B = new Node(11, null, C);
C.parent = B;
A = new Node(10, null, B, null);
B.parent = A;

inorderTraverse(A);
