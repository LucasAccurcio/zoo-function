const data = require('./data');

const { species, employees, prices, hours } = require('./data');

function getSpeciesByIds(...ids) {
  if (!ids) return [];
  return species.filter(({ id }) => ids.includes(id));
}

function getAnimalsOlderThan(animal, age) {
  const newArray = species.find((animais) => (animais.name === animal));
  return newArray.residents.every((idade) => idade.age > age);
}

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  return employees.find((emp) => emp.firstName === employeeName || emp.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  const newEmployee = { ...personalInfo, ...associatedWith };
  return newEmployee;
}

function isManager(id) {
  const employee = employees.find((value) => value.id === id);
  if (employee.firstName === 'Stephanie') return true;
  if (employee.firstName === 'Emery') return true;
  if (employee.firstName === 'Burl') return true;
  if (employee.firstName === 'Ola') return true;
  return false;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
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
  if (!especies) {
    const name = species.reduce((acc, value) => {
      acc[value.name] = value.residents.length;
      return acc;
    }, {});
    return name;
  }
  const animal = species.find((value) => value.name === especies);
  return animal.residents.length;
}

function calculateEntry(entrants) {
  if (!entrants) return 0;
  if (Object.keys(entrants).length === 0) return 0;
  const { Adult = 0, Senior = 0, Child = 0 } = entrants;
  return (prices.Adult * Adult) + (prices.Senior * Senior) + (prices.Child * Child);
}

const getAnimalsBySex = (sex, arrayTipoAnimal, sort) => {
  const arrayBySex = [];
  const newArray = arrayTipoAnimal.residents
    .filter((value) => {
      if (value.sex === sex) {
        arrayBySex.push(value.name);
      }
      return '';
    });
  if (!arrayBySex) {
    return newArray;
  }
  if (sort === true) return arrayBySex.sort();
  return arrayBySex;
};

const getAnimals = (type, sort, sex) => {
  const typeAnimal = species.find((value) => value.name === type);
  const nomesAnimais = typeAnimal.residents.map(({ name }) => name);
  if (sex === null) {
    if (sort === true) {
      return nomesAnimais.sort();
    }
    return nomesAnimais;
  }
  if (sex === 'female' || sex === 'male') {
    return getAnimalsBySex(sex, typeAnimal, sort);
  }
};

const getNameByType = (local, sort, sex) => {
  const specieByLocal = species.filter((value) => (value.location === local))
    .map((type) => type.name);
  const arrayObj = [];
  let obj = {};
  for (let i = 0; i < specieByLocal.length; i += 1) {
    obj = {
      [specieByLocal[i]]: getAnimals(specieByLocal[i], sort, sex),
    };
    arrayObj.push(obj);
  }
  return arrayObj;
};

const returnLocalAndType = (arrayLocation) => {
  const obj = {};
  arrayLocation.forEach((local) => {
    obj[local] = species.filter((value) => (value.location === local)).map((type) => type.name);
  });
  return obj;
};

function getAnimalMap(options) {
  const location = ['NE', 'NW', 'SE', 'SW'];
  const obj = {};
  if (!options) return returnLocalAndType(location);
  const { includeNames = false, sorted = false, sex = null } = options;
  if (includeNames === false) return returnLocalAndType(location);
  location.forEach((local) => {
    obj[local] = getNameByType(local, sorted, sex);
  });
  return obj;
}

function getSchedule(dayName) {
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
