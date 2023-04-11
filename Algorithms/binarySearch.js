function binarySearch(nums, target) {
    let min = 0;
    let max = nums.length - 1;
    let guess;
    
    while(min <= max) {
        guess = Math.floor(( min + max) / 2);
        if(nums[guess] === target) {
            return guess;
        } else {
            if(nums[guess]  < target) {
                min = guess + 1;
            }  else {
                max = guess - 1;
            }
        }
    }
    return -1;
};

// Big O => O(log n)
// Space Complexity => O(n)