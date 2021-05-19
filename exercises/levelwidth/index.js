// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  // let counters = [0];
  // // put first node into empty array and add a stopper. 
  // let array = [root, 'stopper']; 
  // let firstEl;
  // let index = 0;
  // while(array.length !== 1 && array[0] !== "stopper") {
  //   // if the first node has children, push the children to the array
  //   // remmove the first node, add the counter. 
  //   // check the 2nd node has children, if it has, push its children to the array, remove the node and add the counter. 
  //   // until reach the stopper. 
  //   // if it reaches the stopper, remove the stopper and push it to the back of the array. 
  //   // start a new level of tree and repeat above process. 
    
  //   while(array[0] !== "stopper") {
  //     firstEl = array.unshift(); 
  //     counters[index] += 1; 
  //     if(firstEl.children) {array.push(...firstEl.children)};
  //   }
  //   array.unshift().push("stopper");
  //   index += 1;

  // }
  // return counters;

  let counters = [0]; 
  let array = [root, 'stopper']; 

  while(array.length > 1) {
    let node = array.shift(); 
    if(node === 'stopper') {
      counters.push(0);
      array.push('stopper');
    } else {
      array.push(...node.children); 
      counters[counters.length - 1] += 1; 
    }
  }
  return counters;
}

module.exports = levelWidth;
