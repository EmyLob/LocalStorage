export default class Api_Modelo{

    guardar_cliente(lista_cliente, obj_cliente){
        const lista = JSON.parse(localStorage.getItem(lista_cliente)) || [];/* ternarias */
        
        const duplicado= document.getElementById("duplicado")        
        const doble = lista.some(cliente =>
            cliente.nombre === obj_cliente.nombre && cliente.Apellido === obj_cliente.Apellido
        );

        if (doble){
            duplicado.innerHTML = `<p>Usuario Duplicado</p>`;
            console.log("Duplicado");
        } else{
            lista.push(obj_cliente);
            localStorage.setItem(lista_cliente, JSON.stringify(lista));
            duplicado.innerHTML = `<p></p>`;
        }
    }

    imprimir_cliente(){
        const info = localStorage.getItem("lista_cliente");
        console.log(info); 

    }

}
