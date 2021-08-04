const data = require('./data');

const { species, employees } = data;

function getSpeciesByIds(ids) {
  // seu código aqui
  if (ids === undefined) return [];
  return species.find((value) => (value.id === ids));
}
// console.log(getSpeciesByIds('bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5'));
function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const newArray = species.find((animais) => (animais.name === animal));
  return newArray.residents.every((idade) => idade.age > age);
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (employeeName === undefined) return {};
  const newArray = employees.find((empl) => {
    if (empl.firstName === employeeName || empl.lastName === employeeName) return empl;
  });
  return newArray;
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

function countAnimals(especies) {
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
