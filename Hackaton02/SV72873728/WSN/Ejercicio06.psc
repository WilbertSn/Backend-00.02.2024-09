Algoritmo  Ejercicio06
	
	//6. Hacer un algoritmo en Pseint para ayudar a un trabajador a saber cu�l ser� su sueldo 
	//semanal, se sabe que si trabaja 40 horas o menos, se le pagar� $20 por hora, pero si 
	//trabaja m�s de 40 horas entonces las horas extras se le pagar�n a $25 por hora.
	
	
		Definir HT Como Entero
		Definir SueldoSem, HE Como Real
	
		Definir pago_por_hora, pago_por_hora_extra Como Real
		pago_por_hora = 20
		pago_por_hora_extra = 25
		
		Escribir "Ingrese el n�mero de horas trabajadas en la semana: "
		Leer HT
		
		Si HT <= 40 Entonces
			SueldoSem = HT * pago_por_hora
		Sino
			HE = HT - 40
			SueldoSem = (40 * pago_por_hora) + (HE * pago_por_hora_extra)
		FinSi
		
		Escribir "El sueldo semanal ser�: $", SueldoSem
FinAlgoritmo



