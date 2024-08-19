
// Task 5 : You are given an integer array nums and you have to return a new counts array where counts[i] is the number of smaller elements to the right of nums[i].


function countSmaller(nums) {
    // 1st Step => Coordinate compression
    const sortedUniqueNums = Array.from(new Set(nums)).sort((a, b) => a - b);
    const rankMap = new Map();
    sortedUniqueNums.forEach((num, index) => {
        rankMap.set(num, index + 1);
    });

    // 2nd Step => Binary Indexed Tree (or BIT) initialization
    function update(index, value, bit, size) {
        while (index <= size) {
            bit[index] += value;
            index += index & -index;
        }
    }

    function query(index, bit) {
        let result = 0;
        while (index > 0) {
            result += bit[index];
            index -= index & -index;
        }
        return result;
    }

    const size = sortedUniqueNums.length;
    const bit = new Array(size + 1).fill(0);
    const result = [];

    // 3rd Step => Traversing the array from right to left
    for (let i = nums.length - 1; i >= 0; i--) {
        const rank = rankMap.get(nums[i]);

        // Query for the number of elements smaller than the current element
        result.push(query(rank - 1, bit));

        // Updating the BIT with the current element
        update(rank, 1, bit, size);
    }

    return result.reverse(); // Reversing the result to get the correct order
}

// here is the example for this
const nums = [5, 2, 6, 1, 0];
console.log(countSmaller(nums)); // you can see output in terminal also: [ 3, 2, 2, 1, 0 ] .
