//variables
const carrito = document.getElementById('carrito');
const cursos = document.getElementById('lista-cursos');
const listaCursos = document.querySelector('#lista-carrito tbody');

//LISTENERS
cargarEventListeners();

function cargarEventListeners(){
    //Dipsara cuando se presiona "Agregar Carrito"
    cursos.addEventListener('click', comprarCurso);
}

//FUNCIONES

//Funcion que añade el curso al carrito
function comprarCurso(e){
    e.preventDefault();
    //Delegation para agregar-carrito
   if(e.target.classList.contains('agregar-carrito')){
        const curso = e.target.parentElement.parentElement;
        //Enviamos el curso seleccionado para tomar sus datos
        leerDatosCurso(curso);
   }
}


//Lee los datos del curso

function leerDatosCurso(curso){
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id')
    }


    insertarCarrito(infoCurso);
}

//Muestra el curso seleccionado en el carrito

function insertarCarrito(curso){
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>  
            <img src="${curso.imagen}" width="100">
        </td>
        <td> ${curso.titulo} </td>
        <td> ${curso.precio} </td>
        <td>  
            <a href="#" class="borrar-curso" data-id="${curso.id}"> X </a>
        </td>
    `;
    listaCursos.append(row);
}