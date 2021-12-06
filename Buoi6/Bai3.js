const case1 = "    hOang Bui   ";
// -> Hoang Bui

const case2 = " hOANG      BUI   hOang     ";

const case3 = "23traN    dUOng23     ";

function chuanhoa(string){
    string = string.trim().toLowerCase();
    string = string.replace(/\d/g,'');
    string = string.replace(/\s+/g,' ');
    const newstring = string.split(' ').map(ele => {
        return ele.charAt(0).toUpperCase()+ele.slice(1);
    }).join(' ');
    return newstring;
}


console.log("\n---CASE1---");
console.log(chuanhoa(case1));

console.log("\n---CASE2---");
console.log(chuanhoa(case2));

console.log("\n---CASE3---");
console.log(chuanhoa(case3));