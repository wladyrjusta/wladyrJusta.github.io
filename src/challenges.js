// Desafio 1
function compareTrue(animal1, animal2) {
  if (animal1 && animal2 === true) {
    return true;
  } return false;
}
// Desafio 2
function calcArea(base, heigth) {
  return (base * heigth) / 2;
}
// Desafio 3
function splitSentence(frase) {
  return frase.split(' ');
}
// Desafio 4
function concatName(arrayStrings) {
  return `${arrayStrings[arrayStrings.length - 1]}, ${arrayStrings[0]}`;
}
// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}
// Desafio 6
function highestCount(arrayNums) {
  let indexX = 0;
  let maiorNum = Math.max.apply(null, arrayNums);
  for (let index of arrayNums) {
    if (index === maiorNum) {
      indexX += 1;
    }
  }
  return indexX;
}
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let catMouseResult;
  if (Math.abs(mouse - cat1) > Math.abs(mouse - cat2)) {
    catMouseResult = 'cat2';
  } else if (Math.abs(mouse - cat1) === Math.abs(mouse - cat2)) {
    catMouseResult = 'os gatos trombam e o rato foge';
  } else if (Math.abs(mouse - cat1) < Math.abs(mouse - cat2)) {
    catMouseResult = 'cat1';
  }
  return catMouseResult;
}
// Desafio 8
function fizzBuzz(arrayNumString) {
  let strings = [];
  for (let index of arrayNumString) {
    if (index % 3 === 0 && index % 5 === 0) {
      strings.push('fizzBuzz');
    } else if (index % 5 === 0) {
      strings.push('buzz');
    } else if (index % 3 === 0) {
      strings.push('fizz');
    } else {
      strings.push('bug!');
    }
  }
  return strings;
}
// Desafio 9
function encode(arrayEncode) {
  arrayEncode = arrayEncode.replace(/a/g, 1);
  arrayEncode = arrayEncode.replace(/e/g, 2);
  arrayEncode = arrayEncode.replace(/i/g, 3);
  arrayEncode = arrayEncode.replace(/o/g, 4);
  arrayEncode = arrayEncode.replace(/u/g, 5);
  return arrayEncode;
}

function decode(arrayDecode) {
  arrayDecode = arrayDecode.replace(/1/g, 'a');
  arrayDecode = arrayDecode.replace(/2/g, 'e');
  arrayDecode = arrayDecode.replace(/3/g, 'i');
  arrayDecode = arrayDecode.replace(/4/g, 'o');
  arrayDecode = arrayDecode.replace(/5/g, 'u');
  return arrayDecode;
}
// Desafio 10
function techList(arrayTechnologies, name) {
  if (arrayTechnologies.length === 0) {
    return 'Vazio!';
  }
  let arrayTech = arrayTechnologies.sort();
  let arrayOfObject = [];
  for (let index = 0; index < arrayTechnologies.length; index += 1) {
    let objectTechs = {
      name: name,
      tech: arrayTech[index],
    };
    arrayOfObject.push(objectTechs);
  }
  return arrayOfObject;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
