/*
Nombre: Miguel
Apellido: Leiva
4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio() {
    //declaro vars    
    let cantidadLamparas;
    let precioNeto;
    let precioSinDescuento;
    let marcaLampara;
    let porcentajeDescuento;
    let impuesto;

    //ingreso de datos
    precioSinDescuento = 35;
    porcentajeDescuento = 0;
    cantidadLamparas = parseInt(document.getElementById("txtIdCantidad").value);
    marcaLampara = document.getElementById("Marca").value;

    //condiciones
    if (cantidadLamparas > 5) //A
    {
        porcentajeDescuento = 50;
    } //fin de condicion mayor A 5
    else {
        if (cantidadLamparas == 5) //B
        {
            if (marcaLampara == "ArgentinaLuz") {
                porcentajeDescuento = 40;
            }
            else {
                porcentajeDescuento = 30;
            }

        }//Fin de condicion igual a 5
        else 
        {
            if (cantidadLamparas == 4) //C
            {
                if (marcaLampara == "FelipeLamparas" || marcaLampara == "ArgentinaLuz") 
                {
                    porcentajeDescuento = 25;
                }
                else 
                {
                    porcentajeDescuento = 20;

                }
            }//Fin de condicion igual a 4
            else 
            {
                if (cantidadLamparas == 3) //D
                {
                    if (marcaLampara == "ArgentinaLuz") 
                    {
                        porcentajeDescuento = 15;
                    }
                    else 
                    {
                        if (marcaLampara == "FelipeLamparas") 
                        {
                            porcentajeDescuento = 10;
                        }
                        else 
                        {
                            porcentajeDescuento = 5;
                        }//fin de condicion igual a 3
                    }
                }
            }
        }
    }

    //calculo precio
    precioNeto = (precioSinDescuento - (precioSinDescuento * porcentajeDescuento / 100)) * cantidadLamparas;

    //calculo de IIBB. Para mas de $120, suma 10%
    if (precioNeto > 120) {
        impuesto = precioNeto * 10 / 100;
        precioNeto = precioNeto + impuesto;
        alert("\"Usted pago $" + precioNeto + " de IIBB.\"" + ", siendo $" + impuesto + " el impuesto que se pagó.");
    }

    //asigno precio final a box html
    document.getElementById("txtIdprecioDescuento").value = precioNeto

}
