# Binary Tree (Basic)

### Tree
1. Node Height. The longest path from node to leaf node.
2. Node Depth. The number of edges that the root node goes through to this node.
3. Node Level. Node depth plus one.
4. Height of the tree. Height of the root node.

### Binary Tree
1. Full binary tree. The leaf nodes are at the bottom, except for the leaf nodes, each node has two left and right child nodes.
2. Complete binary tree. The leaf nodes are at the bottom two floors, the leaf nodes of the last layer are arranged to the left, and the number of the nodes in the other layer except the last layer must reach the maximum.

### Represent or store a binary tree
1. Chain storage. Set three fields per node, one of them store data, and the other two are pointers to left and right child nodes.
2. Array-based sequential storage. The root node is stored in the array index of 1.
3. Choose memory-saving storage according to the type of binary tree.

### Traversal of binary tree
1. Preorder traversal. Print this node first, then print its left subtree, and finally print its right subtree.
2. In-order traversal. Print its left subtree first, then print itself, and finally print its right subtree.
3. Post-order traversal. Print its left subtree first, then print its right subtree, and finally print itself.
4. Time complexity is O(n).
