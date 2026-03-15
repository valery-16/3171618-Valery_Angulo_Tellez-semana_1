// ============================================
// PROYECTO SEMANAL: MODELADO DE ENTIDADES
// ============================================

console.log('🏛️ PROYECTO SEMANAL: MODELADO DE ENTIDADES\n');

// ============================================
// 1. Define las entidades principales de tu dominio
// ============================================

interface AnimalPatient {
  id: number
  name: string
  species: string
  age: number
  status: Status
  vaccines: Vaccine[]
  ownerId: number
}

interface Owner {
  id: number
  name: string
  phone: string
}

// ============================================
// 2. Usa type unions y literales
// ============================================

type Status = 'active' | 'treatment' | 'discharged'

type Vaccine = 'rabies' | 'parvovirus' | 'distemper'

// ============================================
// 3. Funciones
// ============================================

const patients: AnimalPatient[] = []

function createAnimalPatient(
  id: number,
  name: string,
  species: string,
  age: number,
  status: Status,
  vaccines: Vaccine[],
  ownerId: number
): AnimalPatient {

  const patient: AnimalPatient = {
    id,
    name,
    species,
    age,
    status,
    vaccines,
    ownerId
  }

  patients.push(patient)

  return patient
}

function listPatients(): AnimalPatient[] {
  return patients
}

function filterByStatus(status: Status): AnimalPatient[] {
  return patients.filter(p => p.status === status)
}

// ============================================
// 4. Pruebas
// ============================================

createAnimalPatient(1, 'Max', 'Dog', 5, 'active', ['rabies'], 101)
createAnimalPatient(2, 'Luna', 'Cat', 3, 'treatment', ['rabies', 'distemper'], 102)
createAnimalPatient(3, 'Rocky', 'Dog', 2, 'discharged', ['parvovirus'], 101)

console.log('Lista de pacientes:')
console.log(listPatients())

console.log('\nPacientes en tratamiento:')
console.log(filterByStatus('treatment'))

// ============================================
// 5. Comentarios
// ============================================

// QUÉ: Sistema simple para gestionar pacientes de una clínica veterinaria
// PARA: Modelar mascotas, su estado médico y vacunas usando TypeScript
// IMPACTO: Permite organizar datos de pacientes y filtrarlos por estado

console.log('\n🚦 Sistema ejecutado correctamente.');
