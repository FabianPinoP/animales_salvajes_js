import Consulta from "./consulta.js";
// se realiza una funcion para mostar la vista previa segun su nombre (preview)
const previsualizarImagen = document
  .getElementById("nombreAnimal")
  .addEventListener("change", async () => {
    const { animales } = await Consulta.getData();
    const nombreAnimal = document.getElementById("nombreAnimal").value;
    const buscadorImagen = await animales.find((i) => i.name == nombreAnimal)
      .imagen;
    const preview = document.getElementById("preview");
    preview.style.backgroundImage = `url(assets/imgs/${buscadorImagen})`;
  });

export default previsualizarImagen;
