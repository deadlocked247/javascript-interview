# Javascript Review

## Data Strutures

### Array
<!-- language: lang-js -->
```
var array = ["a", "b", "c"];
// array = [a, b, c]

array[0] = "z";
// array = [z, b, c]

array.splice(0, 1);
// array = [b, c]
```

* Access by index `O(1)`
* Search by value `O(n)`
* Insert `O(n)`
* Delete `O(n)`

### Trees
* A *tree* is an undirected, connected, acyclic graph
* A *forest* has multiple distinct trees
* An *n-ary* tree has atm ost n children per node

### Binary Tree
* A *binary tree* has nodes with at most 2 children (designated left & right)
* **Full**: every node has 0 or 2 children
* **Complete**: every level, except possibly the last, is filled, and the last level's nodes are as far left as possible 
	* *Number of internal nodes: floor(n/2)* 
* Traversals
	* **Pre-order**: open current, visit left subtree, visit right subtree
	* **In-order**: visit left subtree, open current, visit right subtree (returns sorted list)
	* **Post-order**: visit left subtree, visit right subtree, open current
	* **Level-order**: breadth-first traversal, level by level

## Concepts
## Dynamic Programming
* A general method for solving a problem with optimal substructure by breaking it down into overlapping subproblems

* **Top-down**: memoize (store) solutions to subproblems and solve problem recursively

* **Bottom-up**: build up subproblems from base case up and avoid recursive overhead
	* Order subproblems by topologically sorting DAG of dependencies

* Knapsack problem, longest common subsequence, coin change, edit distance, minimum number of jumps, longest palindrome substring, balanced partition

