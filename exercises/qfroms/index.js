// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
  // test not passed. 
  // constructor() {
  //   const data1 = new Stack(); 
  //   const data2 = new Stack(); 
  // }
  // add(el) {
  //   this.data1.push(el);
  //   this.data2.push(el);
  // }
  // peek() {
  //   return this.data1.peek();
  // }

  // remove() {
  //   this.data1 = [];
  //   while(this.data2.length > 1 ) {
  //     this.datat1.push(this.data2.pop())
  //   }
  //   return this.data2;
  // }
}

module.exports = Queue;
