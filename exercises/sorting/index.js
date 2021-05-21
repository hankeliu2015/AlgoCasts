// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
// outter loop from 0 to arr length
// inner loop from 0 to arr legth - i 
// compare and swap elements at j and j+1 
// return the array. 

  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr.length - i - 1; j++){

      if(arr[j] > arr[j+1]) {
        let tempVal = arr[j+1]; 
        arr[j+1] = arr[j]
        arr[j] = tempVal;
      }
    }
  }
  return arr;
}

// outer loop from 0 to arr length 
// declare value hold the min of index, not the element value
// use a inner loop to compare the el from outter loop with the rest of the elments
// if there is a lower value, store the index, not the value. 
// back to outer loop, if the min index is not the same as the current el, swap them
function selectionSort(arr) {

  for( i = 0; i < arr.length; i++){
    let indexofMin = i; 

    for(j = i + 1; j < arr.length; j++) {
      if(arr[indexofMin] > arr[j]) {
        indexofMin = j; 
      }
    } 

    if(indexofMin !== i) {
      let tempVal = arr[i]; 
      arr[i] = arr[indexofMin]; 
      arr[indexofMin] = tempVal; 
    }
  }
  return arr;
}

function mergeSort(arr) {

}

function merge(left, right) {

}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
