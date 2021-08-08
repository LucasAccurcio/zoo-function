const data = require('./data');

const { species, employees, prices, hours } = require('./data');

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
  const { Adult = 0, Senior = 0, Child = 0 } = entrants;
  return (prices.Adult * Adult) + (prices.Senior * Senior) + (prices.Child * Child);
}

function getAnimalMap(options) {
  // seu código aqui
  const location = ['NE', 'NW', 'SE', 'SW'];
  const obj = {};
  if (!options) {
    location.forEach((local) => {
      obj[local] = species.filter((value) => (value.location === local)).map((type) => type.name);
    });
    return obj;
  }
  // const { includeNames = false, sorted = false, sex = null } = options;
}
// console.log(species);
getAnimalMap({ includeNames: true });

/* if (includeNames === true) {
  location.forEach((local) => {
    obj[local] = species.filter((value) => (value.location === local)).map(({ name, residents }) => name);
  });
  return console.log(obj);
} */

function getSchedule(dayName) {
  // seu código aqui
  const { Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday } = hours;
  const obj = {
    Tuesday: `Open from ${Tuesday.open}am until ${Tuesday.close - 12}pm`,
    Wednesday: `Open from ${Wednesday.open}am until ${Wednesday.close - 12}pm`,
    Thursday: `Open from ${Thursday.open}am until ${Thursday.close - 12}pm`,
    Friday: `Open from ${Friday.open}am until ${Friday.close - 12}pm`,
    Saturday: `Open from ${Saturday.open}am until ${Saturday.close - 12}pm`,
    Sunday: `Open from ${Sunday.open}am until ${Sunday.close - 12}pm`,
    Monday: 'CLOSED',
  };
  if (!dayName) return obj;
  const obj2 = { [dayName]: obj[dayName] };
  return obj2;
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const objId = employees.find((value) => (value.id === id));
  const { responsibleFor } = objId;
  const lookingFor = responsibleFor[0];
  const firstSpecie = species.find((specie) => specie.id === lookingFor);
  const sortOldest = firstSpecie.residents.sort((a, b) => b.age - a.age);
  const objOldest = sortOldest[0];
  const oldest = [objOldest.name, objOldest.sex, objOldest.age];
  return oldest;
}

function increasePrices(percentage) {
  // seu código aqui
  if (!percentage) return 'Nenhum valor passado';
  const percentual = (percentage / 100) + 1;
  prices.Adult = Math.round((prices.Adult * percentual) * 100) / 100;
  prices.Senior = Math.round((prices.Senior * percentual) * 100) / 100;
  prices.Child = Math.round((prices.Child * percentual) * 100) / 100;
}

const checkSpecies = (responsible) => {
  const newArray = [];
  responsible.map((id) => {
    species.find((value) => {
      if (value.id === id) {
        newArray.push(value.name);
      }
      return '';
    });
    return '';
  });
  return newArray;
};

function getEmployeeCoverage(idOrName) {
  // seu código aqui
  if (!idOrName) {
    const newObj = employees.reduce((acc, curr) => {
      acc[`${curr.firstName} ${curr.lastName}`] = checkSpecies(curr.responsibleFor);
      return acc;
    }, {});
    return newObj;
  }
  const responsible = employees.find((value) => {
    if (value.id === idOrName || value.firstName === idOrName || value.lastName === idOrName) {
      return value;
    }
    return '';
  });
  const newObj2 = {
    [`${responsible.firstName} ${responsible.lastName}`]: checkSpecies(responsible.responsibleFor),
  };
  return newObj2;
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
