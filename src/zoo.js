/*eslint max-len: ["error", { "ignorePattern": "^\\s*var\\s.+=\\s*require\\s*\\(" }]*/

const data = require('./data');

const { species } = data;

function getSpeciesByIds(ids) {
  // seu código aqui
  if (ids === undefined) return [];
  return species.filter((value) => (value.id === ids));
}
//console.log(getSpeciesByIds('bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5'));
function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const newArray = species.filter((value) => (value.name === animal)).map((value) => value.residents);
  return newArray[0].every((idade) => idade.age > age);
}

function getEmployeeByName(employeeName) {
  // seu código aqui
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
}

function isManager(id) {
  // seu código aqui
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
}

function countAnimals(species) {
  // seu código aqui
}

function calculateEntry(entrants) {
  // seu código aqui
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  // seu código aqui
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
}

function increasePrices(percentage) {
  // seu código aqui
}

function getEmployeeCoverage(idOrName) {
  // seu código aqui
}

module.exports = {
  calculateEntry,
  getSchedule,
  countAnimals,
  getAnimalMap,
  getSpeciesByIds,
  getEmployeeByName,
  getEmployeeCoverage,
  addEmployee,
  isManager,
  getAnimalsOlderThan,
  getOldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
