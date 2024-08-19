// Task 3:  Write a function that takes an array of positive integers and returns the length of the longest chain of consecutive numbers. A chain is defined as a sequence of numbers in the array where each number is exactly one more than the previous number in the sequence, and the sequence can be in any order in the array. Also explain the time complexity and space complexity. 


function longestConsecutiveChain(nums) {
    if (nums.length === 0) {
        return 0;
    }
  
    const numSet = new Set(nums);
    let longestChain = 0;
  
    for (const num of numSet) {
      // Checking if it's the start of a sequence
      if (!numSet.has(num - 1)) {
        let currentNum = num;
        let currentChainLength = 1;
  
        // Counting the length of the sequence
        while (numSet.has(currentNum + 1)) {
          currentNum += 1;
          currentChainLength += 1;
        }
  
        longestChain = Math.max(longestChain, currentChainLength);
      }
    }
  
    return longestChain;
  }
  
// here is the example
const nums = [100, 4, 200, 1, 3, 2];
console.log(longestConsecutiveChain(nums)); // you can see output in terminal also: 4 (The longest chain is [1, 2, 3, 4])
