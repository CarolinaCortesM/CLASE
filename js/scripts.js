//eventos javascript

const datos ={
    nombre:'',
    celular:'',
    correo:'',
    mensaje:'',
}
// eventos de los imput
//metodo querySelector, devuelve el primer elemento del docuemnt que coincida con el selector
let nombre = document.querySelector('#nombre');
let celular = document.querySelector('#celular');
let correo = document.querySelector('#correo');
let mensaje = document.querySelector('#mensaje');
// 
//metodo addEventListener, escucha el evento y ejeuta una funcion
// nombre.addEventListener('input', funcionPrueba);

// function funcionPrueba(){
//     alert('Hola');
// }
nombre.addEventListener('input', leerTexto);
celular.addEventListener('input', leerTexto);
correo.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

function leerTexto(e){
    // console.log(e);
    datos[e.target.id]= e.target.value;
    // alert('nada')
    console.log(datos);
    
}
const formulario = document.querySelector('.formulario');
/*console.log(formulario)*/
formulario.addEventListener('submit',function(e){
    e.preventDefault();
    const { nombre, celular, correo, mensaje} = datos;
    // console.log('nombre');
    // console.log('celular');
    // console.log('correo');
    // console.log('mensaje');
    if(nombre === '' || celular ==='' || correo ==='' || mensaje ===''){
        // console.log('Todos los campos son obligarotios');
        // alert (nothing);
        mostrarError("Todos los campos son obligatorios");
        return;//parar la ejecucion del programa
    }
        // console.log('Procesando formulario');
    // alert('ññññññ');
        mostrarMensaje('Procesando formulario');
});

function mostrarError(mensaje){
    // console.log(mensaje);
    //crea un nuevo elemnto en html
    let error = document.createElement('p');
    error.textContent = mensaje;
    error.classList.add('error');//aca se le adiciona una clase
    formulario.appendChild(error); //da la respuesta en parte de abajo del formulario

    setTimeout(() => {
        error.remove();
    },5000);


    // console.log(error);
}

function mostrarMensaje(mensaje){
    // console.log(mensaje);
    //crea un nuevo elemnto en html
    let alerta = document.createElement('p');
    alerta.textContent = mensaje;
    alerta.classList.add('correcto');//aca se le adiciona una clase
    formulario.appendChild(alerta); //da la respuesta en parte de abajo del formulario

    setTimeout(() => {
        alerta.remove();
    },3000);
    // console.log(error);
}

