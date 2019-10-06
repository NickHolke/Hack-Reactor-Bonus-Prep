const selectionSort = function (arr) {
    function swap (arr, idx1, idx2) {
        let temp = arr[idx1];
        arr[idx1] = arr[idx2];
        arr[idx2] = temp;
    }

    for (let i = 0; i < arr.length - 1; i++) {
        let min = arr[i];
        let idx = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < min) {
                min = arr[j];
                idx = j;
            }
        }
        if (idx !== i) {
            swap(arr, i, idx);
        }
    }
    return arr;
}
