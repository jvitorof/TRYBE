/*Agora você irá criar um novo array a partir do array numbers, 
sem perdê-lo. Cada valor do novo array deverá ser igual ao valor 
correspondente no array numbers multiplicado pelo seguinte. Por exemplo: 
o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 
(primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array 
deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 
3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a 
multiplicação deverá ser feita por 2. Faça isso utilizando o for e o 
método push. O resultado deve ser o array abaixo:*/

//let resultado = [45, 27, 57, 1330, 560, 800, 200, 70, 945, 54];
//console.log(resultado.length);
let numbers = [5,9,3,19,70,8,100,2,35,27];
let array = [];
for ( i = 0 ; i < numbers.length; i += 1) {
    if (i!==(numbers.length-1)) {
        array.push(numbers[i]*numbers[i+1]);
    } else {
        array.push(numbers[i]*2);
    }
}
console.log(array);