import Animales from "./animales.js";
// se crean las clases hijas con su propio metodo
class Leon extends Animales {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }
  Rugir = (audio) => {
    console.log(audio);
    console.log("hola");
    document.getElementById("btn").addEventListener("click", () => {
      let etiquetaAudio = document.createElement("audio");
      etiquetaAudio.setAttribute("src", `/assets/sounds/${audio}`);
      etiquetaAudio.play();
    });
  };
}

class Lobo extends Animales {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }
  Aullar = (audio) => {
    console.log(audio);
    console.log("hola");
    document.getElementById("btn").addEventListener("click", () => {
      let etiquetaAudio = document.createElement("audio");
      etiquetaAudio.setAttribute("src", `/assets/sounds/${audio}`);
      etiquetaAudio.play();
    });
  };
}

class Oso extends Animales {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }
  Gruñir = (audio) => {
    console.log(audio);
    console.log("hola");
    document.getElementById("btn").addEventListener("click", () => {
      let etiquetaAudio = document.createElement("audio");
      etiquetaAudio.setAttribute("src", `/assets/sounds/${audio}`);
      etiquetaAudio.play();
    });
  };
}

class Serpiente extends Animales {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }
  Sisear = (audio) => {
    console.log(audio);
    console.log("hola");
    document.getElementById("btn").addEventListener("click", () => {
      let etiquetaAudio = document.createElement("audio");
      etiquetaAudio.setAttribute("src", `/assets/sounds/${audio}`);
      etiquetaAudio.play();
    });
  };
}

class Aguila extends Animales {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }
  Chillar = (audio) => {
    console.log(audio);
    console.log("hola");
    document.getElementById("btn").addEventListener("click", () => {
      let etiquetaAudio = document.createElement("audio");
      etiquetaAudio.setAttribute("src", `/assets/sounds/${audio}`);
      etiquetaAudio.play();
    });
  };
}

export { Leon, Lobo, Oso, Serpiente, Aguila };
