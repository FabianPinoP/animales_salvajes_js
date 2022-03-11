import Animals from "./animales.js";
// se crean las clases hijas con su propio metodo
class Lion extends Animals {
  constructor(name, age, img, comments, sound) {
    super(name, age, img, comments, sound);
  }
  Roar = (audio) => {
    document.getElementById("btn").addEventListener("click", () => {
      let etiquetaAudio = document.createElement("audio");
      etiquetaAudio.setAttribute("src", `/assets/sounds/${audio}`);
      etiquetaAudio.play();
    });
  };
}

class Wolf extends Animals {
  constructor(name, age, img, comments, sound) {
    super(name, age, img, comments, sound);
  }
  Howl = (audio) => {
    document.getElementById("btn").addEventListener("click", () => {
      let etiquetaAudio = document.createElement("audio");
      etiquetaAudio.setAttribute("src", `/assets/sounds/${audio}`);
      etiquetaAudio.play();
    });
  };
}

class Bear extends Animals {
  constructor(name, age, img, comments, sound) {
    super(name, age, img, comments, sound);
  }
  Snarl = (audio) => {
    document.getElementById("btn").addEventListener("click", () => {
      let etiquetaAudio = document.createElement("audio");
      etiquetaAudio.setAttribute("src", `/assets/sounds/${audio}`);
      etiquetaAudio.play();
    });
  };
}

class Snake extends Animals {
  constructor(name, age, img, comments, sound) {
    super(name, age, img, comments, sound);
  }
  Hiss = (audio) => {
    document.getElementById("btn").addEventListener("click", () => {
      let etiquetaAudio = document.createElement("audio");
      etiquetaAudio.setAttribute("src", `/assets/sounds/${audio}`);
      etiquetaAudio.play();
    });
  };
}

class Eagle extends Animals {
  constructor(name, age, img, comments, sound) {
    super(name, age, img, comments, sound);
  }
  Scream = (audio) => {
    document.getElementById("btn").addEventListener("click", () => {
      let etiquetaAudio = document.createElement("audio");
      etiquetaAudio.setAttribute("src", `/assets/sounds/${audio}`);
      etiquetaAudio.play();
    });
  };
}

export { Lion, Wolf, Bear, Snake, Eagle };
