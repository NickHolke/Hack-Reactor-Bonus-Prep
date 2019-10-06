const insertionSort = function (arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let swapped = false;
        if (arr[i+1] < arr[i]) {
            swap(arr, i+1, i);
            swapped = true;
        }

        if (swapped) {
            for (let j = i; j >= 1; j--) {
                if (arr[j] < arr[j-1]) {
                    swap(arr, j, j-1);
                }
            }
        }
    }

    function swap(arr, idx1, idx2) {
        let temp = arr[idx1];
        arr[idx1] = arr[idx2];
        arr[idx2] = temp;
    }
}

const insertionSortv2 = function(arr) {
    for (let i = 1; i < arr.length; i++) {
        let val = arr[i];
        let idx = i;
        while(idx > 0 && arr[idx - 1] > val) {
            arr[idx] = arr[idx - 1];
            idx--;
        }
        arr[idx] = val;
    }
    return arr;
}
