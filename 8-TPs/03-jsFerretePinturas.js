/*
Apellido: Leiva
Nombre: Miguel
3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	//vamos a usar la formula (°F − 32) × 5/9 = xxx °C

    //declaro vars
    let gradingresados;
    let convtocent;
    
    //tomo valor ingresado
    gradingresados = document.getElementById("txtIdTemperatura").value;
    
    //convierto a float
    gradingresados = parseFloat(gradingresados);


    //operaciones
    convtocent = (gradingresados -32) * 5 /9;
    

    alert("son " + convtocent + " grados Centigrados"); 



}

function CentigradosFahrenheit () 
{
	//vamos a usar la formula (°C × 9/5) + 32 = XXX °F

    //declaro vars
    let gradingresados;
    let convtofahr;
    
    //tomo valor ingresado
    gradingresados = document.getElementById("txtIdTemperatura").value;
    
    //convierto a float
    gradingresados = parseFloat(gradingresados);


    //operaciones
    convtofahr= (gradingresados *9) / 5 + 32;

    alert("son " + convtofahr + " grados Fahrenheit");
}
