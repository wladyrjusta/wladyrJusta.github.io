// Desafio 11
const mostRepeated = (numbers) => {
  let countRepeated = 0;
  let countNumber = 0;
  for (let index in numbers) {
    let verifyNumber = numbers[index];
    for (let index2 in numbers) {
      if (verifyNumber === numbers[index2]) {
        countNumber += 1;
      }
    }
    if (countNumber > countRepeated) {
      countRepeated = countNumber;
    }
    countNumber = 0;
  }
  return countRepeated;
};
function generatePhoneNumber(phoneId) {
  mostRepeated(phoneId);
  let telefonNumber = `(${phoneId[0]}${phoneId[1]}) ${phoneId[2]}${phoneId[3]}${phoneId[4]}${phoneId[5]}${phoneId[6]}-${phoneId[7]}${phoneId[8]}${phoneId[9]}${phoneId[10]}`;
  if (phoneId.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let index = 0; index < phoneId.length; index += 1) {
    if (phoneId[index] < 0 || phoneId[index] > 9 || mostRepeated(phoneId) > 2) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  return telefonNumber;
}
// Desafio 12
function triangleCheck(lineA, lineB, LineC) {
  let result;
  if (lineA > (lineB + LineC) || lineB > (lineA + LineC) || LineC > (lineA + lineB)) {
    result = false;
  } else if (lineA < Math.abs(lineB - LineC) || lineB < Math.abs(lineA - LineC) || LineC < Math.abs(lineA - LineC)) {
    result = false;
  } else {
    result = true;
  }
  return result;
}
// Desafio 13
function hydrate(string) {
  let nums = string.match(/\d+/g).map(Number);
  let somas = nums.reduce((total, currentElement) => total + currentElement);
  let message;
  if (somas === 1) {
    message = `${somas} copo de água`;
  } else if (somas > 1) {
    message = `${somas} copos de água`;
  }
  return message;
}
module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
