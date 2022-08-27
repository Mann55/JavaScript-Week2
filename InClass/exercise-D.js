function giveMessage(msg){
    if(msg=="happy"){
       return "Good job"; 
    }
    else if(msg=="sad"){
        return "Every cloud has a silver lining";
    }
    else if(msg==""){
        return "Beep beep boop";    
    }
    else{
        return  "I'm sorry, I'm still learning about feelings!";
    }
}

console.log(giveMessage("happy"));
console.log(giveMessage("sad"));
console.log(giveMessage(""));
console.log(giveMessage());