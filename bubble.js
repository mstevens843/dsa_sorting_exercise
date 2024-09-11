function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let swapped = false;
        for(let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                //swap elements.
                let temp = arr[j];
                arr[j] = arr[j+ 1];
                arr[j + 1] = temp;
                swapped = true; 
            }
        }
        // If no swaps, array is already sorted. 
        if(!swapped) break; 
    }
    return arr;
}

module.exports = bubbleSort;