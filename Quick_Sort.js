const quickSort = function(arr, start, end) {
    if (start >= end || end < start) return;

    let pval = arr[end];
    let pidx = end;

    for (let i = pidx - 1; i >= start; i--) {
        let val = arr[i];
        let idx = i;
        if (val > pval) {
            while (idx < pidx) {
                swap(arr, idx, idx + 1);
                idx++; 
            }
            pidx = idx - 1;
        }
    }

    quickSort(arr, start, pidx - 1);
    quickSort(arr, pidx+1, end);

    return arr;

    function swap(arr, idx1, idx2) {
        let temp = arr[idx1];
        arr[idx1] = arr[idx2];
        arr[idx2] = temp;
    }
}