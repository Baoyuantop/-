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

### Binary search tree
1. Feature is supports fast insertion, deletion, and lookup operations for dynamic data collection.
2. The request is: in any node in the tree, the value of each node in the left subtree is less than the value of this node, and the value of the right subtree node is greater than the value of this node.
3. Find operation: Starting from the root node, less than the root node goes to the left subtree recursively, larger than the root node goes to the right subtree recursively.
4. Insert operation: Recursively find the insertion position, insert if it is empty, continue to find if it is not empty.
5. Delete operation: Need to discuss the situation. If there is no child node in the node to be deleted, just empty the pointer in the parent node pointing to the node to be delete.If the node to be deleted has only one child node, just update the pointer in the parent node to point to the child node.If the node to be deleted has two child node, simply find the smallest node in the right subtree to replace the node and delete the smallest node.
6. Important feature: The in-order traversal binary search tree can output ordered data sequences with a time cpmplexity of O(n).
