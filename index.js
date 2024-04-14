// let randomName;
const names = [
  "Toniah",
  "Jake",
  "Brianna",
  "Ceasha",
  "Talesha",
  "Isaiah",
  "Keyata",
  "Shatara",
  "Reynold",
  "Jeremy",
  "Charles",
  "Philip",
  "Ashley",
  "Sam",
];

const getRandomName = arrNames => {
  const randomName = Math.floor(Math.random() * arrNames.length);
  const name = arrNames.splice(randomName, 1)[0];
  console.log(name);
  const h1 = document.querySelector("h1");
  h1.textContent = name;

  if (names.length === 0) {
    h1.textContent = "All out of names!";
  }
};

console.log(names.length);
