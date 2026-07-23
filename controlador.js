/*function hacer_bucle(){

    for(let i =0; i<10000; i++){
        console.log(i)
    }
}

async function hacer_saludo(){
    const info= await hacer_bucle();
    console.log("hola munco ..")
}

const info_cliente ={
    "nombre" :"Emely",
    "Apellido":"Lozano",
    "cedula":"1093294421",
}

const boton_enviar=
document.getElementById("registrar");
console.log(boton_enviar);

boton_enviar.addEventListener("click",()=>{
    const info_storage = localStorage.getItem("cliente");
    console.log(info_storage);

    localStorage.setItem("info_cliente", JSON.stringify(info_cliente));
    localStorage.setItem("info_token", JSON.stringify([]));
    localStorage.setItem("info_api", JSON.stringify([]));
    localStorage.setItem("info_producto", JSON.stringify([]));
    
    hacer_saludo();


});
*/
import ClienteModelo from "./CLIENTE_MODELO.JS";
import Api_Modelo from "./API_MODELO.JS";

const boton_registrar = document.getElementById("boton_registrar");
boton_registrar.addEventListener("click", function(){
    const nombre= document.querySelector("#nombre").value;

    
    const apellido= document.querySelector("#apellido").value;
    const rol= document.querySelector("#rol").value;
    
    const cliente = new ClienteModelo(nombre, apellido, rol)
    console.log(cliente)

    const mensaje = document.getElementById("mensaje");
    const duplicado = document.getElementById("duplicado");

    if(cliente.Validar()){
    mensaje.innerHTML = "";
    const api = new Api_Modelo();

        if(api.guardar_cliente("lista_cliente", cliente)){
            resultado.innerHTML = `<p>Hola ${cliente.nombre}</p>`;
            duplicado.innerHTML = "";
        }else{
            duplicado.innerHTML = "<p>Usuario duplicado</p>";
        }

    }else{
        mensaje.innerHTML = `<p>${cliente.obtenerMensaje()}</p>`;
    }
    
});
    


