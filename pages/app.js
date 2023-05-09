//SALUDO BIENVENIDA

function saludar(){
    let nombre = prompt("Ingrese su nombre")
    let apellido = prompt("Ingrese su apelido")
    alert(
        "Hola " +  nombre + " " + apellido + " Llegaste a Full Drinks"
    )
}

//PRODUCTOS OFRECIDOS

let Gin = 8400;
let Vodka = 3500;
let Tequila = 5000; 

function productos (){
    bebida = prompt("En nuestra tienda podes seleccionar los siguientes productos \n 1. Gin \n 2. Vodka \n 3. Tequila");
    if(bebida === "1"){
        alert("Buena elección, Gin!. Su precio es de $ " + Gin)
    }else if (bebida === "2"){
        alert("Buena elección, Vodka!. Su precio es de $ " + Vodka)
    }else if (bebida === "3"){
        alert("Buena elección, Tequila! Su precio es de $ " + Tequila)
    }
}

//CANTIDAD A COMPRAR

function unidades (){
    cantidad = prompt("Cuantas botellas deseas? \n 1. Botella \n 2. Botellas \n 3. Botellas");
    if(cantidad === "1"){
        alert("Seleccionaste 1 botellas")
    }else if (cantidad === "2"){
        alert("Seleccionaste 2 botellas")
    }else if (cantidad === "3"){
        alert("Seleccionaste 3 botellas")
    }else (cantidad)
        alert ("Por más cantidad comunicate a nuestra linea de telefono")
}

//TOTAL DE LA COMPRA

function multiplicar(){
    if(bebida === "1"){
        alert("Su total a pagar por su compra es de $ " + Gin * cantidad)
    }else if(bebida === "2"){
        alert("Su total a pagar por su compra es de $ " + Vodka * cantidad)
    }else if(bebida === "3"){
        alert("Su total a pagar por su compra es de $ " + Tequila * cantidad)
    }
}

saludar(); 
productos();
unidades();
multiplicar();

//METODO DE PAGO

let pago = prompt(`
    Con que metodo de pago elegis abonar?    
    1. Debito;
    2. Credito;
    3. Transferencia;
`);

let metodo = "Usted esta por pagar con ";

function total(pago){
    switch(pago){
        case "1":
            return metodo + "Debito";
            break;
        case "2":
            return metodo + "Credito";
            break;
        case "3":
            return metodo + "Transferencia";
            break;
    }   
}
alert(total(pago));

total();