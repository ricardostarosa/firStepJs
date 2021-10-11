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


