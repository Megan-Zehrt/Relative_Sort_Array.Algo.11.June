// 1122. Relative Sort Array

// Given two arrays "arr1" and "arr2", the elements of "arr2" are distinct, and all elements in
// "arr2" are also in "arr1".

// Sort the elements of "arr1" such that the relative ordering of items in "arr1" are the same as in "arr2".
// Elements that do not appear in "arr2" should be replaced at the end of "arr1" in ascending order.




/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    
    let frequencyMap = new Map();
    let result = [];
    let remaining = [];

    // Populate frequency map with counts of each element in arr1
    for (let i = 0; i < arr1.length; i++) {
        if (frequencyMap.has(arr1[i])) {
            frequencyMap.set(arr1[i], frequencyMap.get(arr1[i]) + 1);
        } else {
            frequencyMap.set(arr1[i], 1);
        }
    }

    // Add elements from arr2 to the result array based on their frequency in arr1
    for (let i = 0; i < arr2.length; i++) {
        if (frequencyMap.has(arr2[i])) {
            let count = frequencyMap.get(arr2[i]);
            while (count > 0) {
                result.push(arr2[i]);
                count--;
            }
            frequencyMap.delete(arr2[i]);
        }
    }

    // Collect remaining elements not in arr2 and sort them
    for (let [key, value] of frequencyMap) {
        while (value > 0) {
            remaining.push(key);
            value--;
        }
    }
    remaining.sort((a, b) => a - b);

    // Add sorted remaining elements to the result array
    result = result.concat(remaining);

    return result;
};
