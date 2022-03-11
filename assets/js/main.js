import Consulta from "./consulta.js";
import Box from "./box.js";
import { Leon, Lobo, Oso, Serpiente, Aguila } from "./especies.js";
import PrevisualizarImagen from "./imagenes.js";
// se captura informacion desde el formulario con evento click
const formulario = document
  .getElementById("btnRegistrar")
  .addEventListener("click", async () => {
    const nombreAnimal = document.getElementById("nombreAnimal").value;
    const edad = document.getElementById("edad").value;
    const comentarios = document.getElementById("comentarios").value;
    const { animales } = await Consulta.getData();
    const img = await animales.find((i) => i.name == nombreAnimal).imagen;
    const sonido = animales.find((s) => s.name == nombreAnimal).sonido;
    //se valida formulario y se crean instancias de las clases y se pasan parametros
    // de las instancias al la funcion box y se llama a la funcion que reproduce el audio de cada animal 
    const validarFormulario = (() => {
      if (edad == "" || comentarios == "") {
        alert("por favor rellene el formulario completo");
      } else if (nombreAnimal == "Leon") {
        const leon = new Leon(nombreAnimal, edad, img, comentarios, sonido);
        Box(
          leon.getImg(),
          leon.getNombre(),
          leon.getEdad(),
          leon.getComentarios()
        );
        leon.Rugir(leon.getSonido());
      } else if (nombreAnimal == "Lobo") {
        const lobo = new Lobo(nombreAnimal, edad, img, comentarios, sonido);
        Box(
          lobo.getImg(),
          lobo.getNombre(),
          lobo.getEdad(),
          lobo.getComentarios()
        );
        lobo.Aullar(lobo.getSonido());
      } else if (nombreAnimal == "Oso") {
        const oso = new Oso(nombreAnimal, edad, img, comentarios, sonido);
        Box(oso.getImg(), oso.getNombre(), oso.getEdad(), oso.getComentarios());
        oso.Gruñir(oso.getSonido());
      } else if (nombreAnimal == "Serpiente") {
        const serpiente = new Serpiente(
          nombreAnimal,
          edad,
          img,
          comentarios,
          sonido
        );
        Box(
          serpiente.getImg(),
          serpiente.getNombre(),
          serpiente.getEdad(),
          serpiente.getComentarios()
        );
        serpiente.Sisear(serpiente.getSonido());
      } else if (nombreAnimal == "Aguila") {
        const aguila = new Aguila(nombreAnimal, edad, img, comentarios, sonido);
        Box(
          aguila.getImg(),
          aguila.getNombre(),
          aguila.getEdad(),
          aguila.getComentarios()
        );
        aguila.Chillar(aguila.getSonido());
      }
    })();
  });
formulario;
