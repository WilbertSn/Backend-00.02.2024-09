Algoritmo Ejercicio35
    Definir i, numero, mayor, menor Como Entero

    mayor = -999999
    menor = 999999

    Para i Desde 1 Hasta 5 Hacer
        Escribir "Ingrese el n�mero ", i, ": "
        Leer numero
		

        Si numero > mayor Entonces
            mayor = numero
        FinSi
		

        Si numero < menor Entonces
            menor = numero
        FinSi
    FinPara

    Escribir "El n�mero mayor es: ", mayor
    Escribir "El n�mero menor es: ", menor
FinAlgoritmo
