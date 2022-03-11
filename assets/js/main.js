import Consulting from "./consulta.js";
import Box from "./box.js";
import { Lion, Wolf, Bear, Snake, Eagle } from "./especies.js";
import ImagePreview from "./imagenes.js";
// se captura informacion desde el formulario con evento click
const form = document
  .getElementById("btnRegister")
  .addEventListener("click", async () => {
    const animalName = document.getElementById("animalName").value;
    const age = document.getElementById("age").value;
    const comments = document.getElementById("comments").value;
    const { animales } = await Consulting.getData();
    const img = await animales.find((i) => i.name == animalName).imagen;
    const sound = animales.find((s) => s.name == animalName).sonido;
    //se valida formulario y se crean instancias de las clases y se pasan parametros
    // de las instancias al la funcion box y se llama a la funcion que reproduce el audio de cada animal
    const formValidate = (() => {
      if (age == "" || comments == "") {
        alert("por favor rellene el formulario completo");
      } else if (animalName == "Leon") {
        const lion = new Lion(animalName, age, img, comments, sound);
        Box(lion.getImg(), lion.getName(), lion.getAge(), lion.getComments());
        lion.Roar(lion.getSound());
      } else if (animalName == "Lobo") {
        const wolf = new Wolf(animalName, age, img, comments, sound);
        Box(wolf.getImg(), wolf.getName(), wolf.getAge(), wolf.getComments());
        wolf.Howl(wolf.getSound());
      } else if (animalName == "Oso") {
        const bear = new Bear(animalName, age, img, comments, sound);
        Box(bear.getImg(), bear.getName(), bear.getAge(), bear.getComments());
        bear.Snarl(bear.getSound());
      } else if (animalName == "Serpiente") {
        const snake = new Snake(animalName, age, img, comments, sound);
        Box(
          snake.getImg(),
          snake.getName(),
          snake.getAge(),
          snake.getComments()
        );
        snake.Hiss(snake.getSound());
      } else if (animalName == "Aguila") {
        const eagle = new Eagle(animalName, age, img, comments, sound);
        Box(
          eagle.getImg(),
          eagle.getName(),
          eagle.getAge(),
          eagle.getComments()
        );
        eagle.Scream(eagle.getSound());
      }
    })();
  });
form;
