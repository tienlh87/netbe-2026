const users = [
    { name: "A", active : true},
    { name: "B", active : false},
    { name: "C", active : true}
] ;

let count = 0;
for (const user of users){
    if (user.active === true) {  
       count++;
    } 
}
        console.log(count);
