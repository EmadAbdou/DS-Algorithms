function selectionSort(nums) {
    for (var i = 0; i < nums.length; i++) {
        var smallestIndex = i;
        for (var j = i + 1; j < nums.length; j++) {
            if (nums[smallestIndex] > nums[j]) {
                smallestIndex = j;
            }
        }
        if (smallestIndex != i) {
            [nums[i], nums[smallestIndex]] = [nums[smallestIndex], nums[i]]
        }
    }
    return nums;
};

// Big O => O(n * n)
// Space Complexity => O(1)