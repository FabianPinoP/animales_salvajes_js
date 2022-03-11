// se crea la funcion box recibe parametros desde la instancia 
// e inserta los datos en una tarjeta la cual se muestra una vez hecho el click en el formulario


const box = (img, name, edad, comentario) => {
  document.getElementById("boxAnimales").insertAdjacentHTML(
    "afterbegin",
    `<div class="card bg-warning" style="width: 18rem;">
  <img id="btn-modal" type="button" data-toggle="modal" data-target="#exampleModal" src="assets/imgs/${img}" class="card-img-top" alt="">
  <div class="card-body">
    <h5 class="card-title">${name}</h5>
    
    <button id="btn" src="..." class= "btn bg-warning">
    <img src="assets/imgs/audio.svg" class="bg-warning w-25">
    </button>
  </div>
</div>
`
  );
// se agrega un escucha de tipo click para que al pinchar en la foto
// se despliegue un modal con la informacion del animal ingresado
  document.getElementById("btn-modal").addEventListener("click", () => {
    const mostrarModal = (document.getElementById(
      "mostrarModal"
    ).innerHTML = `<img class="w-100 d-flex-justify-content-center" src="assets/imgs/${img}"> <h2 class="text-white text-center"> ${name}</h2>
    <ul class="text-white text-center">  Edad: ${edad}</ul>
    <ul class="text-white text-center"> Comentarios: ${comentario}</ul>
    `);
  });
};

export default box;
