function add(digits){
    let number = digits.reduce((a, b) => {
        return a + b;
    }, "");
    number = parseInt(number)+1;
    return number.toString().split('').map(element => +element);
}

const arr1 = [1, 2, 3];
const arr2 = [0];
const arr3 = [9];

console.log('---CASE1---');
console.log(add(arr1));

console.log('---CASE1---');
console.log(add(arr2));

console.log('---CASE1---');
console.log(add(arr3));