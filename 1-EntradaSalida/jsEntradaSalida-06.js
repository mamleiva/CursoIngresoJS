/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	//defino vars

	let numerouno;
	let numerodos;
	let suma;
	
	//* Manera A: esta es una manera mas larga
	//Asigno valores a las vars
	numerouno = document.getElementById("txtIdNumeroUno").value;
	numerodos = document.getElementById("txtIdNumeroDos").value;
	
	//convierto de string a numerico a entero numero1 y numero2 (parse)
	numerouno = parseInt(numerouno);
	numerodos = parseInt(numerodos);
	
	/*
	//Manera B: asigno los valores y los convierto a entero, (cuando sabes que es un nro, es mejor convertirlo a int o float):
	numero1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	numero2 = parseInt(document.getElementById("txtIdNumeroDOS").value);
	*/

	//sumo los valores de numero1 y numero2
	suma = numerouno + numerodos;

	alert("la suma es " + suma);
}

