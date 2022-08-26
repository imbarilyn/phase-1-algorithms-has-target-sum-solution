function hasTargetSum(array, target) {
  for(let i = 0; i < array.length; i++){
    const complement = target - array[i];
    for(j  = i + 1; j < array.length; j++){
      if(array[j] === complement){
        return true;
      }
    }
  }
  return false;
  // Write your algorithm here
}

/* 
  Write the Big O time complexity of your function here
  The big O time complexity is O(n*2). It's quadratic plus three steps one for subtraction and the other one for comparison.
*/

/* 
  Add your pseudocode here
  function hasTargetSum(array, target){
    loops over the arrayfrom the first index
    Does the subraction of the element from the loop from the target
    Loops again from the second index to get a second element
    A condition statement if () to check whether the element from the secon iteration equals the result of subtraction
    If yes in the above it returns true otherwiae false
  }

*/

/*
  Add written explanation of your solution here
  The function takes in two parameters the firat one is the array the second is the target
  We also have nested for loop. The first for loop loops from the first element
  It subtracts the first element from the loop fro the target
  The second loop loops through the array from the second index
  We also have a nested if condition statement to check if the result of subtraction equals the element from the second loop
  If that's true it returns true otherwiae false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
