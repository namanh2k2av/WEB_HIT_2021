//Case 1
const nums = [1, 3, 5, 7, 1, 2, 3, 4, 5, 6];

//Case 2
const nums1 = [1, 1, 1, 10, 23, 2, 26, 26];

//Case 3
const nums2 = [1000, 2000, 1000, 2000, 10000, 22222];

function countNumbers(a){
    a.sort();
    let count = 0;
    for(let i=0; i<a.length; i++){
        count++;
        if(a[i] !== a[i+1]){
            console.log("Số " + a[i] + " xuất hiện " + count + "lần");
            count = 0;
        }
    }
}

console.log("\n--CASE1--")
console.log(countNumbers(nums));

console.log("\n--CASE2--")
console.log(countNumbers(nums1));

console.log("\n--CASE3--")
console.log(countNumbers(nums2));