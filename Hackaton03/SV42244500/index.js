

    document.getElementById("Ejercicio01").addEventListener("click", Ejercicio01)

    function Ejercicio01(){
    /**
    * 1. Hacer un algoritmo en JavaScript que lea un número por el teclado y determinar si tiene tres dígitos.
    */
    const num = prompt("Escribir un numero por el teclado")

        if (num > 99 && num < 1000){
            console.log("El numero tiene tres digitos")
        } else {
            console.log("El numero no tiene tres digitos")    
        }
    }

    function Ejercicio02(){
    /**
     *2. Hacer un algoritmo en JavaScript que lea un número entero por el teclado y determinar si es negativo.
    */
     const numero = prompt("Escribir un numero: ")
     
     if (numero < 0 ){
         console.log("El numero es negativo")
     } else {
         console.log("El numero no es negativo") 
      }
    }

    function Ejercicio03(){
        /**
         *3. Hacer un algoritmo en JavaScript que lea un número y determinar si termina en 4.
        */
         const num = prompt("Ingrese un numero: ")

         if (num %10 == 4){
             console.log("El numero termina en 4")
        }else{
             console.log("El numero no termina en 4")
        }
    }

    function Ejercicio04(){
        /**
         *4. Hacer un algoritmo en JavaScript que lea tres números enteros y los muestre de menor a mayor.
        */
         const num1 = prompt("Escriba el primer numero")
         const num2 = prompt("Escriba el segundo numero")
         const num3 = prompt("Escriba el tercer numero")
         
         let menor, intermedio, mayor;

         if (num1 <= num2 && num1 <= num3) {
            menor = num1
            if (num2 <= num3) {
            intermedio = num2
            mayor = num3
            }else{
            intermedio = num3
            mayor = num2
            }
         } else if (num2 <= num1 && num2 <= num3) {
            menor = num2

         if (num1 <= num3) {
            intermedio = num1
            mayor = num3
         }else{
            intermedio = num3
            mayor = num1
         }
         }else{
            menor = num3
         if (num1 <= num2) {
            intermedio = num1
            mayor = num2
         }else{
            intermedio = num2
            mayor = num1
            }
         }

    console.log("Los números de menor a mayor son: " + menor + ", " + intermedio + ", " + mayor)

    }

    function Ejercicio05(){
        /**
         *5. Hacer un algoritmo en JavaScript para una tienda de zapatos que tiene una promoción de descuento para vender al mayor,
         esta dependerá del número de zapatos que se compren. Si son más de diez, se les dará un 10% de descuento sobre el total de la compra;
         si el número de zapatos es mayor de veinte pero menor de treinta, se le otorga un 20% de descuento; y si son más treinta zapatos se otorgará
         un 40% de descuento. El precio de cada zapato es de $80.
        */
         const precio = 80       
         let totalPagar, totalOriginal, descuento
         const cantidadZapatos= prompt("Ingresar la cantidad de zapatos comprados")
         totalOriginal = cantidadZapatos * precio

         descuento = 0
         
         if (cantidadZapatos >= 10 && cantidadZapatos < 20){
             descuento = totalOriginal * 0.1
         } else {
             if (cantidadZapatos >= 20 && cantidadZapatos < 30){
                 descuento = totalOriginal * 0.2
            } else {    
             if (cantidadZapatos >= 30){
                 descuento = totalOriginal * 0.4
             }
            }
           }
            totalPagar = totalOriginal - descuento
            console.log("Cantidad comprada: ",
                cantidadZapatos,
                "Total original: ",
                totalOriginal
            )
         console.log("descuento: ", descuento, "Total a pagar: ", totalPagar)
    }

    function Ejercicio06(){
    /**
    *6. Hacer un algoritmo en JavaScript para ayudar a un trabajador a saber cuál será su sueldo semanal, se sabe que si trabaja
    40 horaso menos,se le pagará $20 por hora, pero si trabaja más de 40 horas entonces las horas extras se le pagarán a $25 por hora.
    */
    let sueldoSemanal, cantidadHoras
	
	cantidadHoras = prompt ("Escribir la cantidad de horas trabajadas: ")
	
	if (cantidadHoras > 0 && cantidadHoras <= 40){
		sueldoSemanal = cantidadHoras * 20
    } else {
			if (cantidadHoras > 40)
			sueldoSemanal = cantidadHoras * 25
        }

    console.log("El sueldo semanal sera de: ", sueldoSemanal)

    }

    function Ejercicio07(){
    /**
    *7. Hacer un algoritmo en JavaScript para una tienda de helado que da un descuento por compra a sus clientes con membresía dependiendo de su tipo,
    sólo existen tres tipos de membresía, tipo A, tipo B y tipo C. Los descuentos son los siguientes:
    Tipo A 10% de descuento
    Tipo B 15% de descuento
    Tipo C 20% de descuento
    */

    let descuento
	
	precioHelado = prompt ("Escribir precio del helado")
	membresia = prompt ("Escriba el tipo de membresia A, B o C: ").toUpperCase()
	
	switch (membresia){

		case 'A':
			descuento = 0.1
            break
		case 'B':
			descuento = 0.15
            break
        case 'C':
			descuento = 0.2
            break
		default:
			console.log("Por favor ingresar un tipo de membresia valida, A, B o C")
			descuento = 0
    }
	
    const precioFinal = precioHelado * ( 1 - descuento )
	
	console.log ("El precio del helado con descuento es: ", + precioFinal)

    }

    function Ejercicio08(){
        /**
        *8. Hacer un algoritmo en JavaScript para calcular el promedio de tres notas y determinar si el estudiante aprobó o no.
        */

	    const primeraNota = parseFloat(prompt("Introduce la primera nota:"))
        const segundaNota = parseFloat(prompt("Introduce la segunda nota:"))
        const terceraNota = parseFloat(prompt("Introduce la tercera nota:"))

        const promedio = (primeraNota + segundaNota + terceraNota) / 3

        console.log("El promedio es: " + promedio)

        if (promedio > 10) {
        console.log("El estudiante aprobo")
        } else {
        console.log("El estudiante desaprobo")
        }
     }

    function Ejercicio09(){
    /**
    *9. Hacer un algoritmo en JavaScript para determinar el aumento de un trabajador, se debe tomar en cuenta que si ganaba
    más de $2000tendrá un aumento del 5%, si generaba menos de $2000 su aumento será de un 10%.
    */

    let aumento, nuevoSalario
    aumento = 0;
    nuevoSalario = 0;
	const salario = +prompt ("Ingrese el salario del trabajador: ")

	if (salario > 2000){
		aumento = salario * 0.05
    } else {
		aumento = salario * 0.1
	}
	
	nuevoSalario = salario + aumento
	console.log("Salario base: ", salario)
	console.log("El aumento es de: " , aumento)
	console.log("El nuevo salario es de: ", nuevoSalario)

     }

    function Ejercicio10(){
    /**
    *10. Hacer un algoritmo en JavaScript que diga si un número es par o impar.
    */

	const numero = prompt ("Escriba cualquier numero positivo")
    
    if (numero % 2 == 0){
		console.log("El numero " + numero + " es par")
        } else {
		console.log("El numero " + numero + " es impar")
    }
    }

    function Ejercicio11(){
        /**
        *11. Hacer un algoritmo en JavaScript que lea tres números y diga cuál es el mayor.
        */

        numero1 = prompt("Ingrese el primer numero")
        numero2 = prompt("Ingrese el segundo numero")
        numero3 = prompt("Ingrese el tercer numero")
        
        if ((numero1 > numero2) && (numero1 > numero3)) {
            mayor = numero1
        }
        if ((numero2 > numero1) && (numero2 > numero3)) {
            mayor = numero2
        }
        if ((numero3 > numero1) && (numero3 > numero2)) {
            mayor = numero3
        }

        console.log("El mayor numero es: "+ mayor + "")

    }

    function Ejercicio12(){
        /**
        *12. Hacer un algoritmo en JavaScript que lea dos números y diga cuál es el mayor.
        */

        numero1 = prompt("Ingrese el primer numero")
        numero2 = prompt("Ingrese el segundo numero")

        if ((numero1 > numero2) && (numero1 > numero3)) {
            mayor = numero1
        } else {
            mayor = numero2
        }

        console.log("El mayor numero es: "+ mayor + "")

    }

    function Ejercicio13(){
        /**
        *13. Hacer un algoritmo en JavaScript que lea una letra y diga si es una vocal.
        */
    
        const letra = prompt("Ingrese una letra").toLowerCase()

        if (letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u') {
        console.log("La letra " + letra + " es una vocal");
        } else {
        console.log("La letra " + letra + " no es una vocal");
        }
    }

    function Ejercicio14(){
        /**
        *14. Hacer un algoritmo en JavaScript que lea un entero positivo del 1 al diez y determine si es un número primo.
        */

        const numero = prompt("Ingresar un numero del 1 al 10 para verificar si es primo o no")

        i = 1
        contador = 0

        while (i <= numero){
        if(numero % i == 0){
        contador += 1
        }
        i += 1
        }
        if (contador == 2){
        console.log("El numero " + numero + " es primo")
        } else {
        console.log("El numero " + numero + " no es primo")
        }
    }

    function Ejercicio15(){
        /**
        *15. Hacer un algoritmo en JavaScript que convierta centímetros a pulgadas y libras a kilogramos.
        */

        const centimetros = parseFloat(prompt("Introduce la longitud en centimetros: "))
        const pulgadas = centimetros * 0.393701

        const libras = parseFloat(prompt("Introduce el peso en libras: "))
        const kilogramos = libras * 0.453592

        console.log(centimetros + " centimetros son " + pulgadas + " pulgadas")
        console.log(libras + " libras son " + kilogramos + " kilogramos")
    }

    function Ejercicio16(){
        /**
        *16.Hacer un algoritmo en JavaScript que lea un número y según ese número, indique el día que corresponde.
        */

        const num = parseInt(prompt("Introduce un número del 1 al 7: "))

        let dia

        switch (num) {
        case 1:
            dia = "Lunes"
            break
        case 2:
            dia = "Martes"
            break
        case 3:
            dia = "Miercoles"
            break
        case 4:
            dia = "Jueves"
            break
        case 5:
            dia = "Viernes"
            break
        case 6:
            dia = "Sabado"
            break
        case 7:
            dia = "Domingo"
            break
        default:
            dia = "El numero ingresado es invalido. Por favor, introduce un numero del 1 al 7"
        }

        console.log(dia)

    }

    function Ejercicio17(){
        /**
        *17.Hacer un algoritmo en JavaScript donde se ingrese una hora y nos calcule la hora dentro de un segundo.
        */

        let hora = parseInt(prompt("Ingrese la hora: "))
        let min = parseInt(prompt("Ingrese el minuto: "))
        let seg = parseInt(prompt("Ingrese los segundos: "))

        seg = seg+1
        if(seg == 60){
        seg = 0
		min = min+1
        }
        if(min == 60){
        min = 0
		hora = hora+1
        }
        if(hora == 24){
        hora = 0
        }

        console.log("La hora dentro de un segundo sera: horas: " + hora +", minutos: " + min +", segundos: " + seg + "")

    }

    function Ejercicio18(){
        /**
        *18.Hacer un algoritmo en JavaScript para una empresa se encarga de la venta y distribución de CD vírgenes.
        Los clientes pueden adquirir los artículos (supongamos un único producto de una única marca) por cantidad. Los precios son:
        $10. Si se compran unidades separadas hasta 9.
        $8. Si se compran entre 10 unidades hasta 99.
        $7. Entre 100 y 499 unidades.
        $6. Para mas de 500 unidades.
        La ganancia para el vendedor es de 8,25 % de la venta. Realizar un algoritmo en JavaScript que dado un número de
        CDs a vender calcule el precio total para el cliente y la ganancia para el vendedor.
        */

        let cantidadCD = prompt("Ingrese la cantidad de Cds que se compraran")
        cantidadCD = Number(cantidadCD)

        if (cantidadCD <= 9) {
        precio = 10
        } else {
        if (cantidadCD <= 99) {
        precio = 8
        } else {
        if (cantidadCD <= 499) {
            precio = 7
        } else {
            precio = 6
            }
          }
        }
        ingreso = precio * cantidadCD
        utilidad = ingreso * 0.0825

        console.log("Por comprar: " + cantidadCD + " CDs, el precio es de " + precio + " y la ganancia es de " + utilidad.toFixed(2) + "")

    }

    function Ejercicio19(){
        /**
        *19.Hacer un algoritmo en JavaScript para una heladería se tienen 4 tipos de empleados ordenados de la siguiente
        forma con sunúmero identificador y salario diario correspondiente:
        Cajero (56$/día).
        Servidor (64$/día).
        Preparador de mezclas (80$/día).
        Mantenimiento (48$/día).
        El dueño de la tienda desea tener un programa donde sólo ingrese dos números enteros que representen al número
        identificador del empleado y la cantidad de días que trabajó en la semana (6 días máximos). Y el programa le mostrará
        por pantalla la cantidad de dinero que el dueño le debe pagar al empleado que ingresó
        */

        let id = parseInt(prompt("Identificadores de tipo de Empleado\n  1 CAJEROS\n  2 SERVIDOR\n  3 PREPARADOR DE MEZCLAS\n  4 MANTENIMIENTO\n  * Ingrese un identificador de empleado: "))

        switch (id) {
        case 1:
        empleado = "Cajero"
        salario = 56
        break
        case 2:
        empleado = "Servidor"
        salario = 64
        break
        case 3:
        empleado = "Preparador de mezclas"
        salario = 80
        break; 
        case 4:
        empleado = "Mantenimiento"
        salario = 48
        break
        default:
        console.log("Ingrese un identificador valido")
        break
        }

        const cantDias = parseInt(prompt("Ingrese la cantidad de horas trabajadas por el empleado " + empleado + ":"))

        console.log("Para una cantidad trabajada de " + cantDias + " dias, el empleado de " +  empleado + " debe recibir " + cantDias*salario +" en total")

    } 

    function Ejercicio20(){
        /**
        *20.Hacer un algoritmo en JavaScript que que lea 4 números enteros positivos y verifique y realice las siguientes operaciones:
        ¿Cuántos números son Pares?
        ¿Cuál es el mayor de todos?
        Si el tercero es par, calcular el cuadrado del segundo.
        Si el primero es menor que el cuarto, calcular la media de los 4 números.
        Si el segundo es mayor que el tercero, verificar si el tercero esta comprendido entre los valores 50 y 700.
        Si cumple se cumple la segunda condición, calcular la suma de los 4 números.
        */

        let cantPar, numMayor, suma, media, Cuadrado
        const num1 = prompt("Ingrese el primer numero")
        const num2 = prompt("Ingrese el segundo numero")
        const num3 = prompt("Ingrese el tercer numero")
        const num4 = prompt("Ingrese el cuarto numero")
        
        if(num1>=0 && num2>=0 && num3>=0 && num4>=0){
        cantPar=0
        if(num1 % 2 == 0){
            cantPar=cantPar+1
        }
        if(num2 % 2 == 0){
            cantPar=cantPar+1
        }
        if(num3 % 2 == 0){
            cantPar=cantPar+1
        }
        if(num4 % 2 == 0){
            cantPar=cantPar+1
        }
        if(num1>num2){
            if(num1>num2){
                if(num1>num3){
                    if(num1>num4){
                        numMayor=num1
                    }else{
                        numMayor=num4
                    }
                }else{
                    if(num3>num4){
                        numMayor=num3
                    }else{
                        numMayor=num4
                    }
                }
            }else{
                if(num2>num3){
                    if(num2>num4){
                        numMayor =num2
                    }else{
                        numMayor =num4
                    }
                }else{
                    if(num3>num4){
                        numMayor =num3
                    }else{
                        numMayor =num4 
                    }
                }
            }
        }else{
            if(num2>num3){
                if(num2>num3){
                    numMayor=num2
                }else{
                    numMayor=num2
                }
            }else{
                if(num3>num4){
                    numMayor = num3
                }else{
                    numMayor = num4
                }
            }
        }
        console.log("La cantidad de numeros pares es ",cantPar)
        console.log("El numero mayor es ", numMayor)
        if(num3 % 2 ==0){
            Cuadrado=num2^2
            console.log("El cuadrado del segundo es ", Cuadrado)
        }
        if(num1<num4){
            media=(num1+num2+num3+num4)/4
            console.log("La media de los 4 numeros es ", media)
        }
        if(num2>num3){
            if(num3>=50 && num3<=700){
                suma=num1+num2+num3+num4
                console.log("El numero mayor es ", numMayor)
                console.log("La suma de los 4 digitos es ", suma)
            }

        }
    }else{
        console.log("Los numeros no son positivos")
    }
}

    function Ejercicio21(){
    /**
    *21. Hacer un algoritmo en JavaScript que permita calcular el factorial de un número.
    */

    let numero = parseInt(prompt("Ingrese un numero para calcular su factorial"))
    
    contador = 1
    factorial = 1

    while (contador <= numero) {
    factorial *= contador
    contador += 1
    }

    console.log("El factorial de " + numero + " es " + factorial + "")

    }

    function Ejercicio22(){
        /**
        *22. Hacer un algoritmo en JavaScript para calcular la suma de los n primeros números.
        */

        let suma = 0
        const n = prompt("Ingrese la cantidad de primeros numeros a sumar")

        for (let i=1; i<=n; i++){
        suma = suma+i
        }

        console.log("La suma de los primeros " + n + " numeros es: " + suma + "")

    }

    function Ejercicio23(){
        /**
        *23.Hacer un algoritmo en JavaScript para calcular la suma de los números impares menores o iguales a n.
        */

        let suma=0

        const n = prompt("Ingrese un numero entero positivo")

        for (let i=1; i<=n; i++){
         if(i%2 !=0){
            suma = suma+i
        }
      }

        alert(`La suma de los numeros impares menores o iguales a ${n} es: ${suma}`);
    
    }

    function Ejercicio24(){
        /**
        *24. Hacer un algoritmo en JavaScript para realizar la suma de todos los números pares hasta el 1000.
        */

        let suma=0

        for (let i=2; i<=1000; i+=2){
        suma += i
      }

      console.log("La suma de todos los numeros pares hasta 1000 es: " + suma + "")

    }

    function Ejercicio25(){
        /**
        *25. Hacer un algoritmo en JavaScript para calcular el factorial de un número de una forma distinta.
        */

        let n, factorial, contador
        
        factorial = 1
        contador = 1

        n = +prompt("Ingrese un numero entero positivo para calcular el factorial: ")
        while (contador <= n){
        factorial = factorial * contador
        contador = contador + 1
        }
        
        alert(`El factorial de ${n} es ${factorial}`)

    }

    function Ejercicio26(){
        /**
        *26. Hacer un algoritmo en JavaScript para calcular el resto y cociente por medio de restas sucesivas.
        */

        const dividendo= prompt("Ingrese el dividendo: ")
        const divisor= prompt("Ingrese el divisor: ")

        cociente=0
        resto=dividendo

        while(resto>=divisor){
        resto = resto - divisor
		cociente = cociente+1
        }
        if(divisor==0){
        console.log("No se puede dividir entre cero")
        }

        console.log("El cociente es: " + cociente + "")
        console.log("El residuo es: " + resto + "")

    }

    function Ejercicio27(){
        /**
        *27.Hacer un algoritmo en JavaScript para determinar la media de una lista indefinida de números positivos, se debe acabar el programa al ingresar un número negativo.
        */

        let numero, suma, contador

        contador = 0
        suma = 0

        do {
        numero = +prompt("Ingrese un numero positivo ( o un numero negativo para culminar ) : ")

        if(numero >= 0){
            suma = suma + numero
            contador++
         }
        } while(numero > 0)

        if(contador > 0){

        console.log("La media de los numeros ingresados es: ", suma / contador)
        
        } else {

            console.log("No se ingresaron numeros positivos")
        
        }
    }

    function Ejercicio28(){
        /**
        *28.Hacer un algoritmo en JavaScript para calcular la suma de los primeros cien números con un ciclo repetir.
        */

        let suma = 0
        let contador = 1

        do {
        suma += contador
        contador++
        } while (contador <= 100)

        alert(`La suma de todos los numeros pares hasta 100 es: ${suma}`)
    
    }

    function Ejercicio29(){
        /**
        *29.Hacer un algoritmo en JavaScript para calcular la suma de los primeros cien números con un ciclo mientras.
        */

        let suma = 0
        let contador = 1

        while (contador <= 100) {
        suma += contador
        contador++
        }

        alert(`La suma de todos los numeros pares hasta 100 es: ${suma}`)

    }

    function Ejercicio30(){
        /**
        *30.Hacer un algoritmo en JavaScript para calcular la suma de los primeros cien números con un ciclo para.
        */

        let suma=0
        for(let i=1; i<=100; i++) {
        suma= suma + i
        }

        alert(`La suma de todos los numeros pares hasta 100 es: ${suma}`)
    }

    function Ejercicio31(){
        /**
        *31.Hacer un algoritmo en JavaScript parar calcular la media de los números pares e impares, sólo se ingresará diez números.
        */

        let  sumaPar = 0, sumaImpar = 0, contadorPar = 0, contadorImpar = 0

        for (let contador = 0; contador < 10; contador++){
        const num= parseInt(prompt("Ingrese un numero positivo: "))
        if(num>0){
            if(num%2==0){
                sumaPar += num
                contadorPar++
            } else {
                sumaImpar += num
                contadorImpar++
            }
          } 
        }

        if (contadorPar > 0){
        let mediaPar = sumaPar / contadorPar
        console.log("La media de los pares es: " + mediaPar + "")
        } else {
        console.log("No hay numeros pares")
        }

        if (contadorImpar > 0){
        let mediaImpar = sumaImpar / contadorImpar
        console.log("La media de los impares es: " + mediaImpar + "")
            } else {
            console.log("No hay numeros impares")
        } 
    }

    function Ejercicio32(){
        /**
        *32.Se quiere saber cuál es la ciudad con la población de más personas, son tres provincias y once ciudades, hacer un algoritmo en JavaScript que nos permita saber eso. 
        */

        let nombreProvincia, nombreCiudad, ciudadMayorPoblacion
        let poblacion, mayorPoblacion
        let i

        mayorPoblacion = 0

        for (i = 1; i <= 3; i++) {
        nombreProvincia = prompt(`Ingrese el nombre de la provincia ${i}`)
        for (let j = 1; j <= 3; j++) {
            nombreCiudad = prompt(`Ingrese el nombre de la ciudad N: ${j} de la provincia ${nombreProvincia}`)

            poblacion = Math.floor(Math.random() * 1000) + 1

            if (poblacion > mayorPoblacion) {
            mayorPoblacion = poblacion
            ciudadMayorPoblacion = nombreCiudad
            }
         }
      }

    console.log(`La ciudad con mayor poblacion es: ${ciudadMayorPoblacion} con una poblacion de ${mayorPoblacion}`)

    }

    function Ejercicio33(){
        /**
        *33.Hacer un algoritmo en JavaScript que permita al usuario continuar con el programa.
        */

        const continuar= prompt("¿Desea continuar? (s/n):?")
        while(continuar !== "s" && continuar!== "n"){
        continuar=prompt("Respuesta invalida. Por favor ingrese s para si o n para no")
        }
        if(continuar=='s'){
        alert(`Procederemos a continuar`);
        } else {
        alert(`Es hora de tomarte un descanso. ¡Adios!`)
      }
    }

    function Ejercicio34(){
        /**
        *34.Hacer un algoritmo en JavaScript que imprima la tabla de multiplicar de los números del uno al nueve.
        */

        let i, j, multiplicacion
        for(i=1; i<=9; i++){
        console.log("Tabla del " + i + "")
        for(j=1; j<=10; j++){
            multiplicacion = i*j
            console.log(i+ " x " + j + " = " + multiplicacion + "")
        }
      }
    }

    function Ejercicio35(){
        /**
        *35.Hacer un algoritmo en JavaScript que nos permita saber cuál es el número mayor y menor, se debe ingresar sólo veinte números.
        */

        let numeros = []

        for (let i = 1; i <= 20; i++) {
        let numero = parseFloat(prompt("Ingrese el numero " + i + ":"))
        numeros.push(numero)
        }

        let mayor = numeros[0]
        let menor = numeros[0]

        for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > mayor) {
            mayor = numeros[i]
        }
        if (numeros[i] < menor) {
            menor = numeros[i]
        }
      }

        console.log("El número mayor es: " + mayor + "")
        console.log("El numero menor es: " + menor + "")

    }

    function Ejercicio36(){
        /**
        *36.Hacer un algoritmo en JavaScript para calcular la serie de Fibonacci.
        */

        primero = 0, segundo = 1, nuevo = 0, i = 1
        let n = prompt("Ingrese la cantidad de terminos de la serie de Fibonacci que desea calcular: ")
        console.log(primero)
        console.log(segundo)
        while (i <= n-2) {
        nuevo = primero + segundo
        console.log(nuevo)
        primero = segundo
        segundo = nuevo
        i += 1;
      }
    }

    function Ejercicio37(){
        /**
        *37.Hacer un algoritmo en JavaScript para conseguir el M.C.D de un número por medio del algoritmo de Euclides.
        */

        let num1 =prompt("Ingrese el primer numero: ")
        let num2 =prompt("Ingrese el segundo numero: ")

        while(num2!==0){
        let cop=num2
        num2=num1 % num2
        num1=cop
        }

        console.log("El M.C.D es: " + num1 + "")
    
    }

    function Ejercicio38(){
        /**
        *38.Hacer un algoritmo en JavaScript que nos permita saber si un número es un número perfecto.
        */

        let num = 0, sumaDivisor = 0
        num = prompt("Ingresar un numero para saber si es perfecto")
        for (let i = 1; i < (num - 1); i++) {
            if (num % i == 0) {
            sumaDivisor += i
          }
        }
            if ( sumaDivisor == num ) {
            console.log("El numero " + num + " es perfecto")
        } else {
        console.log("El numero " + num + " no es perfecto")
      }
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
      
      function Ejercicio40() {
        let pi, termino, n, signo, iteraciones;
        pi = 3;
        n = 2;
        signo = 1;
      
        iteraciones = +prompt("ingrese el numero de iteraciones");
      
        for (let i = 1; i <= iteraciones; i++) {
          termino = 4 / (n * (n + 1) * (n + 2));
          pi = pi + signo * termino;
          signo = signo * -1;
          n = n + 2;
        }
      
        alert(
          `La aproximacion de pi despues de ${iteraciones} iteraciones es de: ${pi}`
        );
      }


