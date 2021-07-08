/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	//defino vars

	let numero1;
	let numero2;
	let suma;
	
	/* esta es una manera mas larga
	//Asigno valores a las vars
	numero1 = document.getElementById("txtIdNumeroUno").value;
	numero2 = document.getElementById("txtIdNumeroDos").value;
	

	//convierto de string a no numerico a entero numero1 y numero2 (parse)
	numero1 = parseInt(numero1)
	numero2 = parseInt(numero2)
	*/

	//asigno los valores y los convierto a entero, (cuando sabes que es un nro, es mejor convertirlo a int o float):
	numero1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	numero2 = parseInt(document.getElementById("txtIdNumeroDOS").value);

	//sumo los valores de numero1 y numero2
	suma = numero1 + numero2;

	alert("la suma es " + suma);
}

