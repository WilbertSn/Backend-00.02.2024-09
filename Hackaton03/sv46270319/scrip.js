function Ejercicio1() {
    const num = prompt("ingrese un numero");
  
    //number
    //string
    //date
    //boolean
    //null
    //undefine
  
    if (num > 99 && num < 1000) {
      console.log("El numero tiene tres digitos");
    } else {
      console.log("El numero no tiene tres digitos");
    }
  }



function Ejercicio2()
{
   	const num  =  +prompt ( "Escribe un número ");
	
	if (num > 0) {
        alert ("EL número es positivo")
    }
    else {
        alert ("EL número es negativo")
    }
	
}

function Ejercicio3() {
    const num = +prompt("ingrese un numero");
  
    if (num % 10 == 4) {
      console.log("El numero termina en 4");
    } else {
      console.log("El numero no termina en 4");
    }
  }


  function Ejercicio4()
{
//    alert (
//        `En construcción`
//    )

let num1, num2, num3

num1 = prompt ("Escriba el Número 1 :")
num2 = prompt ("Escriba el Número 2 :")
num3 = prompt ("Escriba el Número 3 :")

if (num1 <= num2 && num1 <= num3 )
     {
    if (num2 <= num3) {

        alert (`${num1} , ${num2} , ${num3} `)
    }
    else
    {
        alert (`${num2} , ${num3} , ${num1} `)
    }
}

else
{
    if (num2 <= num1 && num2 <= num3) {
        if (num1<= num3) {
            alert (`${num2} , ${num1} , ${num3} `)
            }
    else {
        alert (`${num1} , ${num2} , ${num3} `) 
            }
    }
else 
{
if (num3 <= num1 && num3 <= num2) {
    if (num1<= num2) {
        alert (`${num3} , ${num1} , ${num2} `)
    }
    else
{
    alert (`${num3} , ${num2} , ${num1} `)
}}}}}   





function Ejercicio5() {
    const precio = 80;
    let totalPagar, totalOriginal, descuento;
    const cantidadZapatos = +prompt("ingrese cantidad de zapatos");
    totalOriginal = cantidadZapatos * precio;
    totalPagar = cantidadZapatos * precio;
  
    descuento = 0;
    if (cantidadZapatos >= 10 && cantidadZapatos < 20) {
      descuento = totalOriginal * 0.1;
    } else {
      if (cantidadZapatos >= 20 && cantidadZapatos < 30) {
        descuento = totalOriginal * 0.2;
      } else {
        if (cantidadZapatos >= 30) {
          descuento = totalOriginal * 0.4;
        }
      }
    }
    totalPagar = totalOriginal - descuento;
    console.log(
      "Cantidad comprada: ",
      cantidadZapatos,
      " Total original: ",
      totalOriginal
    );
    console.log("Descuento: ", descuento, " Total a pagar: ", totalPagar);
  }


  function Ejercicio6()
{

let HT, sueldoSem, pagoHoras, PagoHorasExtras, HE

HT = +prompt ("Ingrese el número de horas trabajadas en la semana")

pagoHoras = 20
PagoHorasExtras = 25

if (HT <= 40) {
sueldoSem = HT * pagoHoras
}
else {
    HE = HT - 40
    sueldoSem = (40*pagoHoras) + (HE * PagoHorasExtras)
}
    alert (`El sueldo semanal será $:   ${sueldoSem} `)
}




function Ejercicio7()
{
//    alert (
 //       `En construcción`
 //   )

let totalCompra, tipoMembresia, descuento,total_con_descuento


totalCompra = +prompt("Ingrese el total de la compra")
tipoMembresia = prompt ("Tipo de Membresía (A,B,C) ")

descuento = 0

switch (tipoMembresia) {
    case "A":
        
        descuento = 0.10 
        break;

    case "B":
        descuento = 0.15
        break;
    case "C":
        descuento = 0.20
        break;
    default:

    alert ("Membresía inválida, no se aplicará descuento")

        
}
total_con_descuento = totalCompra - (totalCompra * descuento)
alert ( `El total con descuento es : $  ${total_con_descuento} ` )

}


function Ejercicio8()
{

let nota1,nota2,nota3 
let promedio

nota1 = +prompt ("Nota 1 : ")
nota2 = +prompt ("Nota 2 : ")
nota3 = +prompt ("Nota 3 : ")

promedio = ((nota1+nota2+nota3)/3)


if (promedio >= 10) {
    alert (` Promedio : ${promedio} , APROBADO `)
}
else {
    alert (` Promedio : ${promedio} , DESAPROBADO `)
}

}


function Ejercicio9() {
    let aumento, nuevoSalario;
    aumento = 0;
    nuevoSalario = 0;
    const salario = +prompt("ingrese su salario");
    if (salario > 2000) {
      aumento = salario * 0.05;
    } else {
      aumento = salario * 0.1;
    }
  
    nuevoSalario = salario + aumento;
    //console.log("salario base: ", salario);
    //console.log("El aumento es: ", aumento);
    //console.log("El nuevo salario es: ", nuevoSalario);

        alert("salario base: " + salario + "\nEl aumento es: " + aumento + "\nEl nuevo salario es: " + nuevoSalario);

  }


  function Ejercicio10()
{
    let num
    
    
    num = +prompt ("Ingresa un número :")


    
    if (num %2 == 0 ) {
        alert (` El número  : ${num} , ES PAR `)
    }
    else {
        alert (` El número  : ${num} , ES IMPAR `)
    }
}


function Ejercicio11()

{
    let num1,num2,num3

    num1 = +prompt (" Primer número :")
    num2 = +prompt (" Segundo número :")
    num3 = +prompt (" Tercer número :")


if (num1 >= num2 && num1 >= num3)
     
    alert (`El mayor es : ${num1} ` )
    else {
        if (num2 >= num1 && num2 >= num3) 
            alert (`El mayor es : ${num2} ` )    
        else
                alert (`El mayor es : ${num1} ` )
        
        }}


function Ejercicio12()
{
    let num1,num2

    num1 = +prompt (" Primer número :")
    num2 = +prompt (" Segundo número :")



if (num1 > num2 )
     
    alert (`El mayor es : ${num1} ` )
    else {
        if (num2 > num1 ) 
            alert (`El mayor es : ${num2} ` )    
        else
                alert (`Ambos son iguales` )
        
        }}



function Ejercicio13() {
    const letra = prompt("ingrese una letra");
  
    switch (letra) {
      case "a":
        console.log("La letra es una vocal");
        break;
      case "e":
        console.log("La letra es una vocal");
        break;
      case "i":
        console.log("La letra es una vocal");
        break;
      case "o":
        console.log("La letra es una vocal");
        break;
      case "u":
        console.log("La letra es una vocal");
        break;
      default:
        console.log("La letra no es una vocal");
    }
  }


  function Ejercicio14()
{

let num

num = +prompt ("Escriba un número : ")

switch (num) {
    case 2:
        alert ("Es un número primo")
        break;
    case 3:
        alert ("Es un número primo")
        break;

    case 5:
            alert ("Es un número primo")
            break;

    case 7:
                alert ("Es un número primo")
                break;
    default:
        alert ("No es un número primo")
        
}

}


function Ejercicio15()
{

let centimetros, pulgadas, libras, kilogramos

centimetros = +prompt ("Ingrese la cantidad de centímetros")
libras = +prompt ("Ingrese el peso en libras")

pulgadas = centimetros/2.54
kilogramos = libras * 0.453592 

alert (`${libras} centimetros equivalen a ${pulgadas} pulgadas \n ${libras} libra equivalen a ${kilogramos} kilogramos`)

}






function Ejercicio16()
{

  let dia

  dia = +prompt("Escribe un número del 1 al 7")

  switch (dia) {
    case 1:
      alert ("Lunes")
      break;
  
      case 2:
        alert ("Martes")
      break;
      case 3:
        alert ("Miercoles")
      break;
      
      case 4:
        alert ("Jueves")
      break;
      case 5:
        alert ("Viernes")
      break;
      case 6:
        alert ("Sábado")
      break;
       
      case 7:
        alert ("Domingo")
      break;
    default:
      alert ("Número debe estar entre 1 y 7")
     
  }



}

function Ejercicio17()
{

let horas,minutos, segundos

horas = +prompt("Ingrese la hora")
minutos = +prompt("Ingrese los minutos")
segundos = +prompt("Ingrese los segundos")

segundos = segundos + 1

 if (segundos > 59) {
  segundos = 0
  minutos = minutos + 1
  if (minutos>59) {
    minutos = 0
    horas = horas + 1
    if (horas > 23) {
      horas = 0
    }
  }

 }
alert (`La nueva hora es : ${horas}: ${minutos}: ${segundos}  `)

}

function Ejercicio18()
{

let cantidad,precio,total,ganancia

cantidad = +prompt ("Escribe una cantidad a vender")


if (cantidad <= 9) {
  precio = 10;
} else if (cantidad >= 10 && cantidad <= 99) {
  precio = 8;
} else if (cantidad >= 100 && cantidad <= 499) {
  precio = 7;
} else if (cantidad >= 500) {
  precio = 6;
}

total = cantidad * precio
ganancia = total * 0.0825

alert (`El precio total es :  $ ${total} \nLa ganancia del vendedor es $: ${ganancia} `  )

}

function Ejercicio19()
{


  let dia,empleado,salario


  empleado = prompt("Código de Empleado : \n01 = Cajero \n03 = Prepadador de Mezclas \n04 = Mantenimiento")
  dia = +prompt("Cantidad de días (Máximo 6 días)")
  switch (empleado) {
    case "01":
      salario = 35
      break;
  
      case "02":
        salario = 35
      break;
      case "03":
        salario = 35
      break;
      
      case "04":
        salario = 35
      break;
      
    default:
      salario = 56
     
  }

alert (`El Salario del empleado elegido es :  ${salario * dia} `)
}

function Ejercicio20()
{

  let num1,num2,num3,num4

num1 = +prompt ("Ingresa el número 1")
num2= +prompt ("Ingresa el número 2")
num3 = +prompt ("Ingresa el número 3")
num4 = +prompt ("Ingresa el número 4")


}

function Ejercicio21()
{

  let n,factorial,contador

  factorial = 1
  contador =1
  n = prompt ("Ingrese un número entero positivo para calcular el factorial")

  while (contador<= n) {
    factorial = factorial * contador
    contador = contador + 1
  }
alert (`El factorial del número : ${n}  es ${factorial} `)
}

function Ejercicio22()
{

let n, suma 
suma  = 0
n = +prompt ("Ingresa el valor de n :")
  


for (let i = 1; i <= n; i++) {
  suma = suma + i;
}


alert ( `La suma de los primeros números hasta : ${n}  es : ${suma} ` )


}




function Ejercicio23() {
    let suma = 0;
  
    const n = prompt("Ingrese un numero entero positivo");
  
    for (let i = 1; i <= n; i++) {
      if (i % 2 != 0) {
        suma = suma + i;
      }
    }
  
    alert(`la suma de los numeros impares menores o iguales a ${n} es: ${suma}`);
  }



  function Ejercicio24()
{
  let  suma
  suma  = 0
   
  for (let i = 2; i <= 1000; i+=2) {
    suma = suma + i;
   
  }
  
  //console.log (suma)
  alert ( `La suma de los primeros números pares hasta 1000 es : ${suma} ` )
  
}


function Ejercicio25 () {
    let n, factorial, contador;
    factorial = 1
    contador = 1

    n = +prompt("Ingrese un número")
    while (contador <= n) {
        factorial = factorial * contador;
        contador =contador +1 

    }

    alert(`El factorial del numero: ${n} es: ${factorial}`);
}

function Ejercicio26()
{
    alert (
        `En construcción`
    )
}

function ejercicio27() {
    let numero, suma, contador;
  
    contador = 0;
    suma = 0;
  
    do {
      numero = +prompt(
        "Ingrese un numero positivo(o un numero negativo apra culminar el programa)"
      );
      if (numero >= 0) {
        suma = suma + numero;
        contador++;
      }
    } while (numero > 0);
  
    if (contador > 0) {
      console.log("La media de los numeros ingresados es: ", suma / contador);
    } else {
      console.log("No se ingresaron numeros positivos");
    }
  }


  function Ejercicio28()
{
  
  
}

function Ejercicio29()
{
  let  suma
  suma  = 0
   
  for (let i = 0; i <= 100; i+=1) {
    suma = suma + i;
   
  }
  
  //console.log (suma)
  alert ( `La suma de los primeros números pares hasta 100 es : ${suma} ` )}

function Ejercicio30()
{
    alert (
        `En construcción`
    )
}

function Ejercicio31()
{
    alert (
        `En construcción`
    )
}

  function Ejercicio32() {
    let nombreProvincia, nombreCiudad, ciudadMayorPoblacion;
    let poblacion, mayorPoblacion;
    let i;
  
    mayorPoblacion = 0;
  
    for (i = 1; i <= 3; i++) {
      nombreProvincia = prompt(`Ingrese el nombre de la provincia ${i}`);
      for (let j = 1; j <= 3; j++) {
        nombreCiudad = prompt(
          `Ingrese el nombre de la ciudad N:${j} de la provincia ${nombreProvincia}`
        );
  
        //   poblacion = prompt(`ingrese la poblacion de la ciudad ${nombreCiudad}`);
        poblacion = Math.floor(Math.random() * 1000) + 1;
  
        if (poblacion > mayorPoblacion) {
          mayorPoblacion = poblacion;
          ciudadMayorPoblacion = nombreCiudad;
        }
      }
    }
    console.log(
      `la ciudad con mayor poblacion es: ${ciudadMayorPoblacion}con una poblacion de ${mayorPoblacion}`
    );
  }


  function Ejercicio33() {
    
  let continuar

  
   do {
    continuar = prompt ("¿Desea continuar S/N")  
    continuar = continuar.toUpperCase();
   } while (continuar != "S");
      
   
  }



  function Ejercicio34() {
  
    for (let i = 1; i <= 9; i++) {  
      console.log(`Tabla de multiplicar del ${i}`);
      
   
      for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
      }
    }
  }
  
  function Ejercicio35() {
  
    let mayor = -9999
    let menor = 9999
    let numero

    for (let i = 1; i <= 5; i++) {  
      numero = +prompt("Ingrese el número:");

      if (numero > mayor) {
          mayor = numero; 
      }
      if (numero < menor) {
          menor = numero; 
      }
  }


    alert (`El número mayor es : ${mayor} \nEl número menor es : ${menor} ` )
  }

function Ejercicio39() {
    let pi, termino, n, signo, iteraciones;
    pi = 0;
    n = 1;
    signo = 1;
  
    iteraciones = +prompt("ingrese el numero de iteraciones");
  
    for (let i = 1; i <= iteraciones; i++) {
      termino = 4 / n;
      pi = pi + signo * termino;
      signo = signo * -1;
      n = n + 2;
    }
  
    alert(
      `La aproximacion de pi despues de ${iteraciones} iteraciones es de: ${pi}`
    );
  }

function Ejercicio40() 
{
    let pi, termino, n, signo, iteraciones;
    pi = 3;
    n = 2;
    signo = 1;
  
    iteraciones = +prompt("ingrese el numero de it eraciones");
  
    for (let i = 1; i <= iteraciones; i++) {
      termino = 4 / (n * (n + 1) * (n + 2));
      pi = pi + signo * termino;
      signo = signo * -1;
      n = n + 2;
    }
  
    alert(      `La aproximacion de pi despues de ${iteraciones} iteraciones es de: ${pi}`);
  }
