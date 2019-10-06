function mergeSort(arr) {
    if (arr.length < 2) {
        return arr;
    }
    
    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
    
    function merge(arr1, arr2) {
        let array = [];
        while(arr1.length && arr2.length) {
            if (arr1[0] < arr2[0]) {
                array.push(arr1.shift());
            } else {
                array.push(arr2.shift());
            }
        }
        return array.concat(arr1).concat(arr2);
    }
}