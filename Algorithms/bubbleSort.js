function bubbleSort(nums) {
    var noSwaps;
    for (let i = nums.length - 1; i > 0; i--) {
        noSwaps = true;
        for (let j = 0; j < nums.length; j++) {
            if (nums[j] >= nums[j + 1]) {
                [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]
                noSwaps = false;
            }
        }
        if (noSwaps) break;
    }
};

// Big O => O(n * n)
// Space Complexity => O(1)