Algoritmo Ejercicio08
	
	//Hacer un algoritmo en Pseint para calcular el promedio de tres notas 
	//y determinar si el estudiante aprob� o no.
    Definir nota1, nota2, nota3, promedio Como Real
	

    Escribir "Ingrese la primera nota: "
    Leer nota1
    Escribir "Ingrese la segunda nota: "
    Leer nota2
    Escribir "Ingrese la tercera nota: "
    Leer nota3
	
    promedio = ((nota1 + nota2 + nota3) / 3)
	
    Escribir "El promedio es: ", promedio
	
    Si promedio >= 10 Entonces
        Escribir "El estudiante ha aprobado."
    Sino
        Escribir "El estudiante ha desaprobado."
    FinSi
FinAlgoritmo
