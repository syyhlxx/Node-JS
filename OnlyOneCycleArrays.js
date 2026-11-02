
function hasSingleCycle(array) {
  let numElementsVisited = 0;
  let currentIndex = 0;
  const visited = new Set(); 

  while (numElementsVisited < array.length) {
    // If we return to 0 before visiting all elements, it's a small cycle
    if (numElementsVisited > 0 && currentIndex === 0) {
      return false;
    }

    if (visited.has(currentIndex)) {
      return false; // If we revisit an index, it's not a single cycle
    }   

    visited.add(currentIndex); // Mark current index as visited
    numElementsVisited++;
    currentIndex = getNextIndex(currentIndex, array);
  }

  // Must end at the starting position
  return currentIndex === 0;
}

function getNextIndex(currentIndex, array) {
  // The value at the current index determines how far to jump  
  const jump = array[currentIndex];
  // Using modulo to wrap around, handling negative jumps
  const nextIndex = (currentIndex + jump) % array.length;
  // If result is negative, shift it to positive array range
  return nextIndex >= 0 ? nextIndex : nextIndex + array.length;
}

// Example Usage:
console.log('Test 1: Valid single cycle [2, 3, 1, -4, -4, 2] ->', hasSingleCycle([2, 3, 1, -4, -4, 2])); // true
//console.log('Test 2: Not returning to start [1, 1, 1, 1, 2] ->', hasSingleCycle([1, 1, 1, 1, 2])); // false
//console.log('Test 3: Simple cycle [1, -1] ->', hasSingleCycle([1, -1])); // true
//console.log('Test 4: Disconnected [1, 0] ->', hasSingleCycle([1, 0])); // false
/*console.log('Test 5: Empty array [] ->', hasSingleCycle([])); // true (but may need to handle as false)
console.log('Test 6: Single element [0] ->', hasSingleCycle([0])); // true
console.log('Test 7: Negative jumps [-1, 1] ->', hasSingleCycle([-1, 1])); // true
console.log('Test 8: Large jumps [10, -5, 3] ->', hasSingleCycle([10, -5, 3])); // false
console.log('Test 9: All zeros [0, 0] ->', hasSingleCycle([0, 0])); // true (bug: doesn't visit second)
console.log('Test 10: Chain [1, 1, 1] ->', hasSingleCycle([1, 1, 1])); // false*/


/*
This approach avoids recursion to prevent stack overflow errors on large arrays
and uses the modulo operator to handle wrapping around the array boundaries. 

The Algorithm
Traverse the array starting from index 0.

Count the number of steps taken.

Use Modulo to calculate the next index: (currentIndex + jumpValue) % array.length.
Handle Negative Jumps: If the jump results in a negative index, add the array length to it to find the correct position.

Validate:
If you reach the starting point (index 0) before visiting all elements, it's not a single cycle.
If you visit all elements and land back at 0, it is a single cycle. 
Medium
Medium
 +4
JavaScript Implementation (O(n) Time, O(1) Space)
*/ 