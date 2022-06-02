function guardarDatos() {
    var nombre = document.getElementById("nombre").value;
    var movil = document.getElementById("movil").value;
    var email = document.getElementById("email").value;
    
    const datos={
        'movil': movil,
        'email': email,

    };
    //Almacenando los datos:
    localStorage.setItem(nombre, JSON.stringify(datos));
    //Borrando los datos
    document.getElementById("nombre").value = "";
    document.getElementById("movil").value = "";
    document.getElementById("email").value = "";
    //Actualizando la lista:
    actualizarDatos();
}

function recuperarDatos() {
    var nombre = document.getElementById("nombre").value;
    var datos = JSON.parse(localStorage.getItem(nombre));
    document.getElementById("movil").value = datos.movil;
    document.getElementById("email").value = datos.email;
}

function eliminarDatos() {
    var nombre = document.getElementById("nombre").value;
    localStorage.removeItem(nombre);
    actualizarDatos();
}

function eliminarTodo() {
    localStorage.clear();
    actualizarDatos();
}

function actualizarDatos(){
    var registro = "";
    if(localStorage.length === 0){
        registro += '<li>Vacio</li>';
    }else{
        for(var i=0; i <= localStorage.length -1; i++){
            var key = localStorage.key(i);
            var datos = localStorage.getItem(key);
            datos = JSON.parse(datos);
            registro += '<li>' + '<span class="nom">' + key + '</span>' + 
            '<span class="nom">' + datos.movil + '</span>' +
            '<span class="nom">' + datos.email + '</span>' +  
            '</li><br>';
        }
    }
    document.getElementById('contactos').innerHTML = registro;
}

