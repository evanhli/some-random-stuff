/*
  Idea: Search for the nodes, once you find the node, find the path back up to root

  Compare the two paths
  If the paths are the same length, just start at the end of each path and move a pointer up one node
  until you've found a matching node
  Otherwise, move the deeper node pointer up until it reaches the same depth as the shorter path and then do the same

  Learning outcomes:
    I initially actually wanted to pop up an array of paths and then do the path validation in the LCA function via the array from search
    but I realized that since I have parent pointers, I can just build the path after finding and returning the node.

    This isn't a completely space efficient algorithm because we don't have to store the paths at all, we can find which node is deeper
    in O(1) space by 2 different methods (easy)
      Racing two pointers
      Moving one pointer and checking if it ever hits the node at the other pointer

    Overall O(h) O(1) (for optimal)
*/

class Node {
  constructor(id, left, right, parent) {
    this.id = id;
    this.left = left;
    this.right = right;
    this.parent = parent;
  }
}

function LCA(root, val1, val2) {
  let node1 = search(root, val1);
  let node2 = search(root, val2);

  if (!node1 || !node2) return null;

  let path1 = [];
  let path2 = [];
  while (node1 || node2) {
    if (node1) {
      path1.push(node1);
      node1 = node1.parent;
    }

    if (node2) {
      path2.push(node2);
      node2 = node2.parent;
    }
  }

  if (path1.length > path2.length) {
    path1.splice(0, path1.length - path2.length);
  } else {
    path2.splice(0, path2.length - path1.length);
  }

  let index = 0;
  while (path1[index] !== path2[index]) {
    index++;
  }
  return path1[index];
}

function search(node, id) {
  if (!node) return null;
  if (node.id === id) {
    return node;
  }

  return search(node.left, id) || search(node.right, id);
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
H.parent = G;

let F = new Node('F', null, null)
let E = new Node('E', null, null)
let D = new Node('D', null, null)


let C = new Node('C', F, G)
G.parent = C;
F.parent = C;

let B = new Node('B', D, E)
D.parent = B;
E.parent = B;

let A = new Node('A', B, C)
B.parent = A
C.parent = A;

console.log(LCA(A, 'F', 'G').id === 'C');
console.log(LCA(A, 'H', 'E').id === 'A');
console.log(LCA(A, 'D', 'E').id === 'B');
console.log(LCA(A, 'E', 'C').id === 'A');
console.log(LCA(A, 'D', 'B').id === 'B');
console.log(LCA(A, 'G', 'H').id === 'G');
console.log(LCA(A, 'B', 'C').id === 'A');
console.log(LCA(A, 'A', 'D').id === 'A');
console.log(LCA(A, 'A', 'B').id === 'A');
console.log(LCA(A, 'H', 'F').id === 'C');
console.log(LCA(A, 'H', 'Z') === null);
