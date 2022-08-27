function exponential(number) {
  return number * number;
}

function isEven(number) {
  return number % 2 === 0;
}

for(let n=5; n< 20; n++){
  if(isEven(n)){
    console.log(`The exponential of: ${n} is ${exponential(n)}`);
  }
}


//console.log(exponential(3));
//console.log(isEven(3));