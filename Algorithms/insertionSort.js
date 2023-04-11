function insertionSort(nums) {
    for (var i = 1; i < nums.length; i++) {
        var currentVal = nums[i];
        for (var j = i - 1; j >= 0 && nums[j] > currentVal; j--) {
            nums[j + 1] = nums[j];
        }
        nums[j + 1] = currentVal;
    }
    return nums;
};

// Big O => O(n * n)
// Space Complexity => O(1)