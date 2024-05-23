const input = document.getElementById('ingresar_tarea');
const boton = document.querySelector('button');
const Listadetareas = document.getElementById('lista_de_tareas');

function agregarTarea(){
  if(input.value){
    //Crear tarea
    let tareaNueva = document.createElement('div');
    tareaNueva.classList.add('tarea');
    
    //Texto ingresado por el usuario
    let texto = document.createElement('p');
    texto.innerText = input.value;
    tareaNueva.appendChild(texto);

    //Crear y agregar contenedor de iconos
    let iconos = document.createElement('div');
    iconos.classList.add('iconos');
    tareaNueva.appendChild(iconos)

    //Iconos
    let completar = document.createElement('i')
    completar.classList.add('bi','bi-check-circle-fill','icono_completar');
    completar.addEventListener('click', completarTarea);
    
    let eliminar = document.createElement('i')
    eliminar.classList.add('bi','bi-trash-fill', 'icono_eliminar');
    eliminar.addEventListener('click', eliminarTarea);

    iconos.append(completar, eliminar);//Agregamos los elementos al div con clase "iconos"

    //Agregar tarea a la lista
    Listadetareas.appendChild(tareaNueva);
  } else{
    alert('Porfavor ingrese una Tarea');  
    }
}

function completarTarea(e){
  let tarea = e.target.parentNode.parentNode;  
  tarea.classList.toggle('completada');
}

function eliminarTarea(e){
  let tarea = e.target.parentNode.parentNode;
  tarea.remove();
}

boton.addEventListener('click', agregarTarea);

input.addEventListener('keydown', (e) => {
  if(e.key === 'Enter'){
    agregarTarea();
  }
});
