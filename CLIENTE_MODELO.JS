export default class ClienteModelo{
    constructor(nombre, Apellido, Rol){
        this.nombre =nombre;
        this.Apellido = Apellido;
        this.Rol =Rol;
    }



    Validar(){

        const Invalido =document.getElementById("mensaje")
        if (this.nombre.length < 4){
        
            Invalido.innerHTML=`<p>INVALIDO!! El nombre debe tener mas de 3 caracteres </p>`;
            return false;
        } else{

            Invalido.innerHTML=`<P> </P>`
            return true;

        }
    }
}
/*    
    Get_nombre(){
        return this.nombre;
    }
    Set_nombre(nuevo_dato_nombre){
        this.nombre=nuevo_dato_nombre;

    }
    Get_Apellido(){
        return this.Apellido;
    }
    Set_Apellido(nuevo_dato_Apellido){
        this.Apellido=nuevo_dato_Apellido;

    }
    Get_Rol(){
        return this.Rol;
    }
    Set_Apellido(nuevo_dato_Rol){
        this.Rol=nuevo_dato_Rol;

    }
}
    */