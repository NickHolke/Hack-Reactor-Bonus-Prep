let binarySearch = function(arr, num) {

        if (arr.length === 0) {
            return "Not found";
        }
        let idx = Math.floor(arr.length / 2);
        if (arr[idx] === num) {
            return "found!";
        } 
        
        if (num < arr[idx]) {
            return binarySearch(arr.slice(0, idx), num);
        } else if (num > arr[idx]) {
            return binarySearch(arr.slice(idx + 1), num);
        }
}

let array = [1, 3, 4, 8, 11, 13, 15]
binarySearch(array, 15);

//while loop of binary search
var doSearch = function(array, targetValue) {
	var min = 0;
	var max = array.length - 1;
    var guess;
    
    while(min <= max) {
        guess = Math.floor((max + min) / 2);
        if (array[guess] === targetValue) {
            return guess;
        } else if (array[guess] < targetValue) {
            min = guess + 1;
        } else if (array[guess] > targetValue) {
            max = guess - 1;
        }
    }
	return -1;
};


const binarySearch2 = (arr, num) => {
    let result = 'Target not found';
    const binaryRecurse = (arr, num) => {
      let idx = Math.floor(arr.length / 2);
      if(arr.length === 0) return;
      if(arr[idx] === num) {
          result = 'Found it! The number is indeed in the array!';
          return;
      }
      num < arr[idx] ? binaryRecurse(arr.slice(0, idx), num) :
        binaryRecurse(arr.slice(idx + 1), num);       
    };
    binaryRecurse(arr, num);
    return result;
}  

binarySearch2(array, 15);