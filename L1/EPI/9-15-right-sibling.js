/*
  For each node in the tree, set the levelNext node
  the levelNext node is the node to the right of the current node in the level
  Do this O(1) space because O(n) space is trivial
  Your input is a perfect binary tree

  Idea: To do anything in O(1) space for trees, you must use the structure of the tree
  to your advantage. For this one we take advantage of the perfect binary tree property

  We are guaranteed two things:
    1. A nodes left child level-next node will be the nodes right child
    2. A nodes right child level-next node will be the NEXT nodes left child

  A tricky bit is how we're going to search through the tree. Since we set the level-next node
  for each child node (starting from root), as we move down, we can use those pointers to do a level
  order traversal setting the NEXT level's level-next pointers.

  Then all we gotta do is go down the tree from the left until we run out of nodes

  Learning outcomes:
  Use a trees structure to your advantage, ESPECIALLY if required O(1) space.
  Think about a simple case and then expand it. Since we're given an input as a perfect binary tree,
  you can build out the cases for n= 1,2,3 easily and not have to worry about any edge cases.
*/
class Node {
  constructor(val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
    this.next = null;
  }
}

function setLevelNext(node) {
  while (node) {
    helper(node);
    node = node.left;
  }
}

function helper(node) {
  while (node && node.left) {
    node.left.next = node.right;

    if (node.next) {
      node.right.next = node.next.left;
    }
    node = node.next;
  }
}

/*
     A
   /   \
  B     C
 / \    / \
D   E  F   G
*/
let G = new Node('G', null, null)
let F = new Node('F', null, null)
let E = new Node('E', null, null)
let D = new Node('D', null, null)
let C = new Node('C', F, G)
let B = new Node('B', D, E)
let A = new Node('A', B, C)

setLevelNext(A);


function levelOrderLog(node) {
  let queue = [];
  queue.push(node);
  while (queue.length) {
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      let temp = queue.shift();
      if (temp.next) {
        console.log(temp.next.val);
      } else {
        console.log('null');
      }
      if (temp.left) queue.push(temp.left);
      if (temp.right) queue.push(temp.right);
    }
  }
}

// levelOrderLog(A);


/*
     A
   /   \
  B     C
*/
C = new Node('C', null, null)
B = new Node('B', null, null)
A = new Node('A', B, C)

setLevelNext(A);
levelOrderLog(A);

