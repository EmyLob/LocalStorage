 export default class Api_Modelo{

    guardar_cliente(lista_cliente, obj_cliente){
        const lista = JSON.parse(localStorage.getItem(lista_cliente)) || [];/* ternarias */
        lista.push(obj_cliente);
        localStorage.setItem(lista_cliente,JSON.stringify(lista));

        const duplicado= document.getElementById("duplicado")
        if (lista.includes(lista_cliente)){
            duplicado.innerHTML=`<p> Usuario Duplicado</p>`
            console.log("Duplicado")
        } else{
            duplicado.innerHTML=`<p> </p>`
        }
    }

    imprimir_cliente(){
        const info = localStorage.getItem("lista_cliente");
        console.log(info); 

    }

}
