const data = require('./data');

const { species, employees, prices } = require('./data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  if (!ids) return [];
  return species.filter(({ id }) => ids.includes(id));
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const newArray = species.find((animais) => (animais.name === animal));
  return newArray.residents.every((idade) => idade.age > age);
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) return {};
  return employees.find((emp) => emp.firstName === employeeName || emp.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  const newEmployee = { ...personalInfo, ...associatedWith };
  return newEmployee;
}

function isManager(id) {
  // seu código aqui
  const employee = employees.find((value) => value.id === id);
  if (employee.firstName === 'Stephanie') return true;
  if (employee.firstName === 'Emery') return true;
  if (employee.firstName === 'Burl') return true;
  if (employee.firstName === 'Ola') return true;
  return false;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  employees.push(newEmployee);
}

function countAnimals(especies) {
  // seu código aqui
  if (!especies) {
    const name = species.reduce((acc, value) => {
      acc[value.name] = value.residents.length;
      return acc;
    }, {});
    return name;
    // return species.reduce((acc, element) => acc + element.residents.length, 0);
  }
  const animal = species.find((value) => value.name === especies);
  return animal.residents.length;
}

function calculateEntry(entrants) {
  // seu código aqui
  if (!entrants) return 0;
  if (Object.keys(entrants).length === 0) return 0;
  const tipos = Object.keys(entrants).length;
  const chaves = Object.keys(entrants);
  const qtdes = Object.values(entrants);
  const adultPrice = Object.values(prices)[0];
  const seniorPrice = Object.values(prices)[1];
  const childPrice = Object.values(prices)[2];
  let sum = 0;
  for (let index = 0; index < tipos; index += 1) {
    if (chaves[index] === 'Adult') sum += qtdes[index] * adultPrice;
    if (chaves[index] === 'Senior') sum += qtdes[index] * seniorPrice;
    if (chaves[index] === 'Child') sum += qtdes[index] * childPrice;
  }
  return sum;
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
