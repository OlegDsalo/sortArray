// There are 2 sorted arrays.
// Create 3rd sorted array which includes elements of 2 initial arrays.
// Complexity of algorithm  O(n+m).
// Please  do not use internet for solution.
// Don't use array.sort as well


//can be swapped 
const a = [2, 5, 6, 8, 20, 40, 43, 57];
const b = [1, 4, 7, 8, 23, 38, 41, 43, 53, 68, 73];
let arr = new Array();
let i = 0;
let k = 0;
// 1 a[0]=2 b[0]=1
// 2 a[0]=2 b[1]=3 
// 3 a[1]=4 b[1]=3
// 4 a[1]=4 b[2]=7
// 5 a[2]=6 b[2]=7 
// 6 a[3]=8 b[2]=7
// 7 a[3]=8 b[3]=8 
while (i < a.length || k < b.length) {
    if (a[i] === undefined) {
        arr.push(b[k]);
        k++;
    }
    else if (b[k] === undefined) {
        arr.push(a[i]);
        i++;
    }
    else if (a[i] < b[k]) {
        arr.push(a[i]);
        i++;
    }
    else if (b[k] < a[i]) {
        arr.push(b[k]);
        k++;
    }
    else {
        arr.push(a[i], b[k]);
        i++;
        k++;
    }

}
console.log(arr);