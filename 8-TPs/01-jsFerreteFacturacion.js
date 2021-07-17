/*
Apellido: Leiva
Nombre: Miguel
1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    //declaro vars
    let preciouno;
    let preciodos;
    let preciotres;
    let sumatotal;

    //asigno los valores
    preciouno = document.getElementById("txtIdPrecioUno").value;
    preciodos = document.getElementById("txtIdPrecioDos").value;
    preciotres = document.getElementById("txtIdPrecioTres").value;

    //convierto a float
    preciouno = parseFloat(preciouno);
    preciodos = parseFloat(preciodos);
    preciotres = parseFloat(preciotres);

    //operaciones
    sumatotal = preciouno + preciodos + preciotres;
    alert("La suma de los mismos es " + sumatotal);

	
}
function Promedio () 
{
    //declaro vars
    let preciouno;
    let preciodos;
    let preciotres;
    let sumaprecios;
    let promedio;

    //asigno los valores
    preciouno = document.getElementById("txtIdPrecioUno").value;
    preciodos = document.getElementById("txtIdPrecioDos").value;
    preciotres = document.getElementById("txtIdPrecioTres").value;

    //convierto a float
    preciouno = parseFloat(preciouno);
    preciodos = parseFloat(preciodos);
    preciotres = parseFloat(preciotres);

    //operaciones suma y division para promedio
    sumaprecios = preciouno + preciodos + preciotres;
    promedio = sumaprecios / 3

    alert("El promedio es: " + promedio)

	
}
function PrecioFinal () 
{
    //declaro vars
    let preciouno;
    let preciodos;
    let preciotres;
    let precioivatotal;

    //asigno los valores
    preciouno = document.getElementById("txtIdPrecioUno").value;
    preciodos = document.getElementById("txtIdPrecioDos").value;
    preciotres = document.getElementById("txtIdPrecioTres").value;

    //convierto a float
    preciouno = parseFloat(preciouno);
    preciodos = parseFloat(preciodos);
    preciotres = parseFloat(preciotres);
    preciototalsiniva = preciouno + preciodos + preciotres;

    //operaciones
    precioivauno = preciouno * 21 / 100;
    precioivados = preciodos * 21 / 100;
    precioivatres = preciotres * 21 / 100;
    precioivatotal = precioivauno + precioivados + precioivatres + preciototalsiniva;
    
    alert("El precio final mas Iva es " + precioivatotal);  

	
}