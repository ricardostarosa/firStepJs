// loop


for (let x = '#'; x.length <= 7; x += '#'){

    console.log(x); 
  }



for(let number = 1; number <= 100 ; number++){

        
    if(number % 3 == 0 && number % 5 == 0) console.log('FizzBuzz');
    else if(number % 3 == 0) console.log('Fizz');
    else if(number % 5 == 0) console.log('Buzz');
    else console.log(number);
}

// checker board

let hash = '';

for(let b = 0; b < 10; b++){

hash = "";

for (let a = 0; a < 10; a++){

   if((a+b) % 2 == 0){

     hash += " ";
   
   }else{

     hash += "#";
   }

}

  console.log(hash);
  
}


