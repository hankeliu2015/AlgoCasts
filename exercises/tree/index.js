// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
  constructor(data) {
    this.data = data; 
    this.children = [];
  }

  add(data){
    // const node = new Node(data);
    this.children.push(new Node(data));
  }

  remove(number) {
    this.children = this.children.filter(el => {
      el !== number;
    })
  }
}

class Tree {
  constructor(){
    this.root = null;
  }

  traverseBF(fn) {
    let arr = [this.root]; 

    while(arr.length) {
      let firstEl = arr.shift()
      arr.push(...firstEl.children)
      fn(firstEl);
    }
  }

  traverseDF(fn) {
    let arr = [this.root]; 
    while(arr.length > 0) {
      let firstEl = arr.shift(); 
      arr.unshift(...firstEl.children);
      // for(let el of firstEl.children) {
      //   arr.unshift(el);
      // } 
      fn(firstEl);
    }
  }
}

module.exports = { Tree, Node };
