// Se realiza la consulta a"animales.json con metodos async y await"
const consulting = (() => {
  const url = "http://localhost:5502/animales.json";
  const getData = async () => {
    const resp = await fetch(url);
    const data = await resp.json();
    return data;
  };
  {
    return { getData };
  }
})();

export default consulting;
