//Hacer un algoritmo en Pseint que nos permita saber si un n�mero es un n�mero perfecto.


Algoritmo  Ejercicio38
	
	Definir  numero, sumaDivisores, i como entero;
	Escribir  "Ingrese un numero para verificar si es perfecto"
	leer numero;
	
	
	sumaDivisores=0
	
	para i <-1 hasta numero-1 con paso 1 Hacer
		si numero %i =0 Entonces
			sumaDivisores= sumaDivisores+i
		FinSi
	FinPara
	
	
	si sumaDivisores = numero Entonces
		Escribir  "el numero ",numero " es perfecto"
	SiNo
		Escribir  "el numero ",numero " no es perfecto"
	FinSi
FinAlgoritmo