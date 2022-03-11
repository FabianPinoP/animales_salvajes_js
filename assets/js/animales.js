// Se crea la clase constructora Padre con sus setter y getter
class Animals {
  constructor(name, age, img, comments, sound) {
    let Name = name;
    let Age = age;
    let Img = img;
    let Comments = comments;
    let Sound = sound;

    this.getName = () => Name;
    this.getAge = () => Age;
    this.getImg = () => Img;
    this.getComments = () => Comments;
    this.getSound = () => Sound;

    this.setComments = (comments) => (Comments = comments);
    this.setSound = (sound) => (Sound = sound);
  }
  get Name() {
    return this.getName();
  }
  get Age() {
    return this.getAge();
  }
  get Img() {
    return this.getImg();
  }
  get Comments() {
    return this.getComments();
  }
  get Sound() {
    return this.getSound();
  }
  set Comments(comments) {
    return this.getComments(comments);
  }
  set Sound(sound) {
    return this.getSound(sound);
  }
}

export default Animals;
