
const estudiantes = [
  { id: 1, nombre: "Ana", edad: 20 },
  { id: 2, nombre: "Juan", edad: 22 },
  { id: 3, nombre: "María", edad: 21 },
];


function buscarEstudiantePorId(id) {
  return new Promise((resolve, reject) => {
    const estudiante = estudiantes.find((e) => e.id === id);

    if (estudiante) {
      resolve(estudiante);
    } else {
      reject(new Error(`No existe un estudiante con el ID ${id}.`));
    }
  });
}


function mostrarBusqueda(id) {
  console.log(`Búsqueda del estudiante con ID ${id}`);

  return buscarEstudiantePorId(id)
    .then((estudiante) => {
      console.log(`Nombre: ${estudiante.nombre}, Edad: ${estudiante.edad}\n`);
    })
    .catch((error) => {
      console.log(`Error: ${error.message}\n`);
    });
}


mostrarBusqueda(2)
  .then(() => mostrarBusqueda(1))
  .then(() => mostrarBusqueda(10));