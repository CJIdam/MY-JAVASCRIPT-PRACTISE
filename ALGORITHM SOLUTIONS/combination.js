// combination sum iv

var combinationSum4 = function(nums, target) {
    // Create No array
  const No = Array(target + 1).fill(0)
  // Set default
  No[0] = 1
  // Loop until we hit target
  for(let i = 0; i <= target;i++) {
      // Loop through all possible nums
      for(let j = 0; j < nums.length; j++) {
          // If the sum of the current position in No and the current num is less than target, increment the index at the sum in No array by all the ways to make No[i]
          if(nums[j]+i <= target) No[nums[j]+i] += No[i]
      }
  }
  return No[target]
};