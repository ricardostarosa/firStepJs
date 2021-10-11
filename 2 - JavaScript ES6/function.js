// valor da variável to tipo função.

const calcularQuadrado = function(x){

    return x * x;
}

console.log(calcularQuadrado(5));

const saudarUsuario = function(){

    console.log("Olá, Tudo bem?");
}

saudarUsuario();

const calcularPotencia = function(base,expoente){

     let result = 1;
     for(let cont = 0; cont < expoente; cont++){

         result *= base;  
    }
    return result;
}

console.log(calcularPotencia(5,3));

// call stack - the function return to the caller after the execution of the function

// closure - The ability to treat functions as values, combined with the fact that
// local bindings are re-created every time a function is called

function multiplier(factor) {
    return number => number * factor;
    }
    let twice = multiplier(2);
    console.log(twice(5));

let teste = (x) => { return y => (y * x) + 5 };

let segunda = teste(2);
console.log(segunda(3));
