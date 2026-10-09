const name = "Variedad de Puffles"



let Puffles = [
  { id: 1, name: "Puffle 1", type: "Gato" },
  { id: 2, name: "Puffle G2", type: "Gato" },
  { id: 3, name: "Puffle 2", type: "Agua" },
  { id: 4, name: "Puffle 3", type: "Conejo" },
  { id: 5, name: "Puffle 4", type: "Arcoiris" },
  { id: 6, name: "Puffle 5", type: "Unicornio" },
];
 
// ======================================================
// EJERCICIO 1: forEach para agregar elementos
// ======================================================
console.log("--- Ejercicio 1: forEach ---");
 
const nuevoPuffle = { id: 7, name: "Puffle 6", type: "Dragon" };
let existe = false;
 
Puffles.forEach((puffle) => {
  if (puffle.name.toLowerCase() === nuevoPuffle.name.toLowerCase()) {
    existe = true;
  }
});
 
if (existe) {
  console.log("El Puffle ya se encuentra en la lista");
} else {
  Puffles.push(nuevoPuffle); // push() agrega el cuarto objeto (o más) al arreglo
  console.log("El Puffle se ha agregado a la lista");
}
console.log(Puffles);
 
// ======================================================
// EJERCICIO 2: subconjunto de elementos (filter, map, find)
// ======================================================
console.log("--- Ejercicio 2: filter, map y find ---");
 
// 2. Filtra por un criterio
const puffleGatos = Puffles.filter((p) => p.type === "Gato");
console.log("Solo gatos:", puffleGatos);
 
// 3. Transforma con map(): arreglo solo con los nombres
const nombres = Puffles.map((p) => p.name);
console.log("Nombres:", nombres);
 
// 4. Busca uno en específico con find()
const puffleG2 = Puffles.find((p) => p.name === "Puffle G2");
console.log("Puffle encontrado:", puffleG2);
 
// ======================================================
// EJERCICIO 3: CRUD
// ======================================================
console.log("--- Ejercicio 3: CRUD ---");
 
// CREATE
function addPuffle(id, name, type) {
  Puffles.push({ id: id, name: name, type: type });
  console.log("Se ha añadido un nuevo Puffle:", name);
}
 
// READ
function muestraPuffles() {
  Puffles.forEach((p) => console.log(`${p.id} - ${p.name} (${p.type})`));
}
 
// UPDATE
function updatePuffle(id, newName, newType) {
  const pos = Puffles.findIndex((p) => p.id === id);
  if (pos === -1) {
    console.log("No se encontró el Puffle con id", id);
    return;
  }
  Puffles[pos] = { id: id, name: newName, type: newType };
  console.log("Se ha actualizado el Puffle", id);
}
 
// DELETE
function eliminarPuffle(id) {
  Puffles = Puffles.filter((p) => p.id !== id); // filter no modifica el original, solo reasignas
  console.log("Se ha eliminado el Puffle", id);
}
 
addPuffle(8, "Pufflebee", "Unicornio");
addPuffle(9, "Pufflebee2", "Unicornio");
muestraPuffles();
 
updatePuffle(2, "New name", "new type");
eliminarPuffle(3);
muestraPuffles();
