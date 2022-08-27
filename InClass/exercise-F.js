function checkUserName(userType, userName){
    if(userType === "admin" || userType === "manager"){
        return "Username valid";
    }else if(userName[0] == userName[0].toUpperCase() && userName.length <= 10 && userName.length >= 5){
        return "Username valid";
    }else{
        return "Username Invalid";
    }
}

console.log(checkUserName("admin", "Manpreet"));
console.log(checkUserName("hello", "manpreet"));

