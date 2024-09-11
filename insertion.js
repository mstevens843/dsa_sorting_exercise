function insertionSort(arr) { 
    for (let i = 1; i < arr.length; i++) {
        let currentVal = arr[i];
        let j = i - 1; 
        while (j >= 0 && arr[j] > currentVal) {
            arr[j + 1] = arr[j];  // Shift element to the right
            j--;
        }
        arr[j + 1] = currentVal;  // Insert currentVal at the correct position
    }
    return arr; 
}

module.exports = insertionSort;
