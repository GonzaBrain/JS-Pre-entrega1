
const USER = 'wolf';
function login() {
    let ingresar = false
    for (let i = 2; i >= 0; i--) {
        let ingresoUSER = prompt ('ingresa tu usuario tienes ' + (i + 1) + ' oportunidades');
        if(ingresoUSER === USER) {
            alert('bienvenido/a ' + USER + ' | ingreso exitoso ');
            ingresar = true
            break;
        } else{
            alert ('usuario no registrado')
        }
    }
    return ingresar;
}

function menuPrincipal() {
    let opciones = prompt ('Bienvenido a Fenrir Tech expertos en tecnologia en que podemos ayudarte? \n1 inicio \n2 tienda \n3 imperdibles \n4 concatenador de texto \n5  digite "salir" para salir');
    switch (opciones) {
        case '1':
            inicio2()
            break;
        case '2':
            tienda2()
            break;
        case '3':
            imperdibles2()
            break;
        case "4":
            concatenadorDeTexto()
            break;
        case "salir":
             bye()
            break;
        default:
            alert("ingresa un dato valido")
            menuPrincipal()
    }
}

function tienda2(){
    let tienda = prompt('aca encontraras nuestros productos \n1 Tienda \2 Componentes \3 Perifericos \4 escriba "volver" para volver \n5 escriba "salir" para salir ')
    switch (tienda) {
        case "1":
            menuTienda()
            break;
        case "2":
            componentes()
            break;
        case "3":
            perifericos()
            break;
        case "volver":
            menuPrincipal()
            break;
        case "salir":
            bye()
            break;
        default:
            alert ("ingresa un dato correcto")
            tienda2()
    }
}

function imperdibles2(){
    let imperdibles = prompt('descuentos imperdibles \n1 Imperdibles \n2 fan cooler \n3 teclados \n4 gabinete \5 escribe "volver" para volver \6 escribe "salir" para salir ')
  switch (imperdibles) {
    case "1":
        menuImperdibles()
        break;
    case "2":
        fanCooler()
    case "3":
        teclados()
    case "4":
        gabinete()
    case "volver":
        menuPrincipal()
        break;
    case "salir":
        bye()
        break;
     default:
         alert ("ingresa un dato correcto")
         imperdibles2()


    
  }
}


function concatenadorDeTexto () {
    let txt1 = prompt ("ingrese el texto a concatenar")
    let txt2 = prompt ("ingresa la segunda parte de el texto a concatenar")
    alertconcatenadorDeTexto (txt1,txt2)
    menuPrincipal()
}

function alertconcatenadorDeTexto (txt1,txt2){ alert ("texto concatenado: " + txt1 + " " + txt2)}

function bye (){
    alert("gracias por visitarnos")
}

let ingreso = login ()
if (ingreso) {
    menuPrincipal()
}

function tienda2(){
    let tienda2 = prompt('no hay tienda disponible ingresa "salir" para salir o "volver" para volver')
    if (tienda2 === "salir") {
        bye()
    } else{
        if (tienda2 === "volver"){
            menuPrincipal()
        }else{
            alert('Ingresa una opcion valida')
            tienda2()
        }
    }
}


function imperdibles2(){
    let imperdibles2 = prompt ('no hay ofertas/descuentos disponibles en estos momentos por favor intente nuevamente mas tarde, ingrese "volver" para volver al menu o "salir" para salir')
    if (imperdibles2 === "salir") {
        bye()
    } else {
        if(imperdibles2 === "volver"){
            menuPrincipal()
        }else{
            alert ('ingrese una opcion valida')
            imperdibles2()
        }
    }
}