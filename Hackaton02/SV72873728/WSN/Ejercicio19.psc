//19. Hacer un algoritmo en Pseint para una helader�a se tienen 4 tipos de empleados ordenados de la siguiente forma con su n�mero identificador y salario diario correspondiente:
//	Cajero (56$/d�a).
//	Servidor (64$/d�a).
//	Preparador de mezclas (80$/d�a).
//	Mantenimiento (48$/d�a).
//	El due�o de la tienda desea tener un programa donde s�lo ingrese dos n�meros enteros que representen al
// n�mero identificador del empleado y la cantidad de d�as que trabaj� en la semana (6 d�as m�ximos). Y el programa le mostrar� por pantalla la cantidad de dinero que el due�o le debe pagar al empleado que ingres�

Algoritmo  Ejercicio19
	
	
	
	Definir empleado Como Caracter
	definir salario Como Real
	Definir dias Como Entero
	
	Escribir "Codigo de Empleado:"
	Escribir "01 = Cajero"
	Escribir "02 = Servidor"
	Escribir "03 = Preparador de Mezclas"
	Escribir "04 = Mantenimiento"
	
	Leer empleado
	
	Escribir "Cantidad de d�as (M�ximo 6):"
	Leer dias
	
			Segun empleado Hacer
				"01":
					salario = 56
				"02":
					salario = 64
				"03":
					salario = 80
				"04":
					salario = 48
				De Otro Modo:
					salario = 56
			Fin Segun
	
	
	
	
	// Mostrar los resultados
	Escribir "El salario  del empleado elegido es ", salario * dias
	
	
	
	
	
	
FinAlgoritmo
	