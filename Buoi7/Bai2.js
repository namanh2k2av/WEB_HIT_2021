const users = [
    { id: 1, name: "Hoang Bui", age: 19, gender: "male", money: 1000 },
    { id: 2, name: "Tran Duong", age: 14, gender: "female", money: 2000 },
    { id: 3, name: "Dinh Huan", age: 25, gender: "female", money: 1050 },
    { id: 4, name: "Minh Hoang", age: 15, gender: "male", money: 500 },
];

// Ý 1

console.log(
    "-----MENU-----\n"+
    "1. Xem danh sách\n"+
    "2. Thêm người dùng\n"+
    "3. Xóa người dùng theo id\n"+
    "4. Cập nhật thông tin người dùng theo id\n"
)

function showUser(){
    users.forEach(item => {
        console.log(item);
    })
}

function addUser(users, newUser){
    users.push(newUser);
}

function deleteUser(id){
    for(let i in users)
        if(users[i].id == id)
            delete users[i];
}

function updateUser(id, newname, newage, newgender, newmoney){
    for(let i in users){
        if(users[i].id === id){
            users[i].name = newname;
            users[i].age = newage;
            users[i].gender = newgender;
            users[i].money = newmoney;
        }
    }
}

console.log("Danh sách")
showUser();
const user1 = { id: 5, name: "Nam Anh", age: 18, gender: "male", money: 10000}
addUser(users,user1);
deleteUser(4);
updateUser(5, "Nam Anh", 18, "male", 2222);

// Ý 2
const user2 = { id: 6, name: "User1", age: 12, gender: "male", money: 191}
const user3 = { id: 7, name: "User2", age: 16, gender: "female", money: 131}
addUser(users, user2);
addUser(users, user3);
var countmale=0, olderthan15=0, sumeven=0, rich=0, poor=0;
for(let i in users){
    if(users[i].gender==="male"){
        ++countmale;
        users[i].gender="female";
    }
    if(users[i].age>15)
        ++olderthan15;
    if(users[i].id%2===0)
        sumeven += users[i].money;
    if(users[i].money>users[rich].money)
        rich=i;
    if(users[i].money<users[poor].money)
        poor=i;  
}
console.log(`Co ${countmale} nam, ${olderthan15} nguoi co tuoi lon hon 15 tuoi`);
console.log(`Tong tien nhung nguoi co id chan: ${sumeven}`);
console.log("Nguoi ngheo nhat la: ");
console.log(users[poor]);
console.log("Nguoi giau nhat la: ");
console.log(users[rich]);

// Ý 3
console.log("Sau khi chuyen nhung nguoi co gioi tinh male thanh female: ");
console.log(users);