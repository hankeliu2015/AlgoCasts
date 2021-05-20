// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.

// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.

// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
  constructor(data){
    this.data = data; 
    this.left = null; 
    this.right = null;
  }

  // incursive solution
  // 4 senario to insert value 
  // value greater than node, right is true, call the function itself
  // value greater than node, and right is false, assign right with the node 
  // value less than node and left is true, call the function itself
  // value less than node, and left is false, assign left with the node. 
  insert(value) {
   
    if(value > this.data && this.right) {
      this.right.insert(value);
    } else if( value > this.data) {
      this.right = new Node(value);
    } else if( value < this.data && this.left) {
      this.left.insert(value); 
    } else if( value < this.data) {
      this.left = new Node(value);
    }
  }

    //if the value is less than node, compare it with the left. 
    // if it is equl to the left, return the left. 
    // if it is less, go left again. recursive
    // if it is greater just go right. recursive
  contains(value) {
    if(value === this.data) {
      return this; 
    } else if(value > this.data && this.right) {
      return this.right.contains(value);
    } else if( value > this.data) {
      return null;
    } else if(value < this.data && this.left) {
      return this.left.contains(value);
    } else if(value < this.data) {
      return null;
    }
    return null;
  }
}

module.exports = Node;
