import Consulting from "./consulta.js";
// se realiza una funcion para mostar la vista previa segun su nombre (preview)
const imagePreview = document
  .getElementById("animalName")
  .addEventListener("change", async () => {
    const { animales } = await Consulting.getData();
    const animalName = document.getElementById("animalName").value;
    const findImage = await animales.find((i) => i.name == animalName).imagen;
    const preview = document.getElementById("preview");
    preview.style.backgroundImage = `url(assets/imgs/${findImage})`;
  });

export default imagePreview;
