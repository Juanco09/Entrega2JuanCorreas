
const vinos = [
    {id: 1, nombre: "valle las acequias", variedad: "syrah", precio: 815},
    {id: 2, nombre: "el ciprés", variedad: "cabernet sauvignon", precio: 510},
    {id: 3, nombre: "luis segundo", variedad: "malbec", precio: 2450},
];

const Carrito = [
    {precio: 0}
];

let NombreUsuario = "juancorreas";
let Contrasena = "1234";

//funcion de ingreso.
function login() {
    let ingreso = false;
    for (i=2; i>=0; i--){
        let IngresoUsuario = prompt("Ingrese su nombre de usuario.");
        let IngresoContrasena = prompt("Ingrese su contraseña. Tiene " + (i + 1) + " " + "oportunidades.");
        if (IngresoContrasena === Contrasena && IngresoUsuario === NombreUsuario) {
            alert ("Bienvenido," + " " + NombreUsuario + ".");
            ingreso = true;
            break;
            } else {
                if (IngresoUsuario == "" || IngresoContrasena == ""){
                    alert ("Los campos no deben estar vacíos.");
                } else {
                    alert ("Contraseña o usuario incorrectos.");
                }
            } 
        }   
    return ingreso;
};

//funcion para realizar el pago.
function pago () {
    do { 
    let tarjeta = false;
    let NumeroTarjeta = prompt("Por favor, ingrese el número de su tarjeta de crédito o débito.");
    if (NumeroTarjeta.length != 16) {
        alert ("No se puede comprobar el método de pago. Inténtelo nuevamente.");
    } else {
        let CodigoSeguridad = prompt("Ingrese el código de seguridad (3 dígitos que figuran en el dorso de su tarjeta).");
        if (CodigoSeguridad.length != 3) {
            alert ("Código incorrecto. Inténtelo nuevamente.");
        } else {
            alert ("¡Gracias por su compra!");
            tarjeta = true;
            break;
        }
        }
    } while (true); 
};

//funcion para buscar un producto.
function BuscarProducto(arr, filtro){
    const busqueda = arr.find((vinos)=>{
        return vinos.nombre.includes(filtro) || vinos.variedad.includes(filtro);
    })
    return busqueda;
};

//funcion para cargar un producto en el carrito.

function AgregarProducto(arr, prod){
    arr.push(prod);
};

let PrecioFinal = Carrito.reduce((acc, pr) => acc + pr.precio, 0);

let UsuarioValidado = login();

if (UsuarioValidado) {
    let menu = prompt("Opciones: \n1-Buscar producto. \n2-Ver todos los productos. \n3-Comprar.");
    while (menu != "3") {
        switch (menu) {
            case "1":
                let Busq = prompt("Buscar producto");
                console.log(BuscarProducto(vinos, Busq));
                break;
            case "2":
                console.log(vinos);
                break;
            default:
                alert("Opción incorrecta.");
                break;
        }        
        menu = prompt("Opciones: \n1-Buscar producto. \n2-Ver todos los productos. \n3-Comprar.");
    };

    let Compras = prompt("Seleccione el producto que desea comprar: \n1-Valle Las Acequias. \n2-El Ciprés. \n3-Luis Segundo. \n0-Finalizar.")
    while (Compras != 0) {
        switch(Compras) {
            case "1":
                AgregarProducto(Carrito, {id: 1, nombre: "valle las acequias", variedad: "syrah", precio: 815});
                console.log(Carrito);
                PrecioFinal = Carrito.reduce((acc, pr) => acc + pr.precio, 0);
                break;
            case "2":
            AgregarProducto(Carrito, {id: 2, nombre: "el ciprés", variedad: "cabernet sauvignon", precio: 510});
                console.log(Carrito);
                PrecioFinal = Carrito.reduce((acc, pr) => acc + pr.precio, 0);
                break;
            case "3":
                AgregarProducto(Carrito, {id: 3, nombre: "luis segundo", variedad: "malbec", precio: 2450});
                console.log(Carrito);
                PrecioFinal = Carrito.reduce((acc, pr) => acc + pr.precio, 0);
                break;
            default:
                alert("Producto inexistente o no disponible.");
                break;
        }
        Compras = prompt("Seleccione el producto que desea comprar: \n1-Valle Las Acequias. \n2-El Ciprés. \n3-Luis Segundo. \n0-Finalizar.");
    };

    if(PrecioFinal >0) {
        alert("El monto a pagar es de $" + PrecioFinal);
        pago();
    } else {
        alert("¡Gracias por su visita!");
    };
} else {
    alert ("Intentos agotados. Vuelva a intentarlo más tarde.");
};
