// proyecto semanal: modelado de entidades
// dominio: veterinaria
console.log("proyecto semanal: veterinaria\n");

// funciones tipadas

// qué: función que crea un nuevo paciente animal
// para: registrar mascotas en el sistema veterinario
// impacto: asegura que el objeto creado cumpla con la interface animalPatient
function createAnimalPatient(id, name, species, age, owner, status, vaccine) {
    return {
        id: id,
        name: name,
        species: species,
        age: age,
        owner: owner,
        status: status,
        vaccine: vaccine
    };
}

// qué: función que lista todos los pacientes
// para: mostrar todos los animales registrados
// impacto: retorna un array tipado de pacientes
function listPatients(patients) {
    return patients;
}

// qué: función que filtra pacientes por estado
// para: encontrar animales activos o en tratamiento
// impacto: facilita gestionar pacientes según su condición
function filterByStatus(patients, status) {
    return patients.filter(function (patient) { 
        return patient.status === status; 
    });
}

// datos de ejemplo para probar funciones

// crear dueños
var owner1 = {
    id: 1,
    name: 'Xiomara Tellez',
    phone: '3223466912'
};

var owner2 = {
    id: 2,
    name: 'Valery Angulo',
    phone: '3219250392'
};

// crear pacientes animales
var dog = createAnimalPatient(1, 'Tommy', 'Perro', 5, owner1, 'active', 'rabia');
var cat = createAnimalPatient(2, 'Luna', 'Gato', 3, owner2, 'treatment', 'parvovirus');
var rabbit = createAnimalPatient(3, 'Copito', 'Conejo', 2, owner1, 'discharged', 'moquillo');

// guardar pacientes
var patients = [dog, cat, rabbit];

// pruebas
console.log('lista de pacientes:');
console.log(listPatients(patients));

console.log('\n pacientes activos:');
console.log(filterByStatus(patients, 'active'));