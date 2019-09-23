/*
  Idea: Each subtree needs to keep track of the nodes it has found (easy extension for LCA of n values)
  DFS through the tree, and return [] when you have found nothing.
  Pop up through the subtrees and concat the found values together so that each parent subtree knows what its children has found
  If you have found 2 values (LCA of 2 values), push up the value of the current node to the n-ary tree
  Now when you go up the parent trees, you'll push up a set of 3 values, meaning we have already found the LCA, stop searching
  and pop it up to the root
*/

class Node {
  constructor(id, children) {
    this.id = id;
    this.children = children;
  }
}

function getLCA(node, id1, id2) {
  return helper(node, id1, id2)[2];
}

function helper(node, id1, id2) {
  const foundNodes = [];
  if (!node) return foundNodes;

  if (node.id === id1 || node.id === id2) {
    foundNodes.push(node.id)
  }
  for (const child of node.children) {
    foundNodes.push(...helper(child, id1, id2))
    if (foundNodes.length === 2 && !foundNodes.includes(node.id)) {
      foundNodes.push(node.id);
      return foundNodes
    }

    if (foundNodes.length === 3) {
      return foundNodes;
    }
  }

  return foundNodes;
}


/*

         A
       / |  \
     B   C   D
    / \  |   |
   E   I F   G
  /          |
 Z           H
*/
const Z = new Node('Z', [])
const I = new Node('I', []);
const H = new Node('H', []);
const G = new Node('G', [H]);
const F = new Node('F', []);
const D = new Node('D', [G]);
const E = new Node('E', [Z]);
const B = new Node('B', [E, I]);
const C = new Node('C', [F]);
const A = new Node('A', [B, C, D]);

console.log(getLCA(A, 'E', 'G') === 'A');
console.log(getLCA(A, 'F', 'H') === 'A');
console.log(getLCA(A, 'E', 'I') === 'B');
console.log(getLCA(A, 'Z', 'I') === 'B');
console.log(getLCA(A, 'Z', 'B') === 'A');
console.log(getLCA(A, 'Z', 'H') === 'A');
