const areArraysEqual = function (array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let index = 0; index < array1.length; index++) {
    if (array1[index] !== array2[index]) {
      return false;
    }
  }
  return true;
};

const isArray = function (content) {
  if (content === content + 0) {
    return false;
  }
  if (content === content + '') {
    return false;
  }
  if (content.length >= 0) {
    return true;
  }
  return false;
  // return content[0] !== undefined;
};

const isEqual = function (content1, content2) {
  if (content1 === content2) {
    return true;
  }
  if (isArray(content1) && isArray(content2)) {
    return areArraysEqual(content1, content2);
  }
  return false;
};

const positionOf = function (element, groups) {
  for (let index = 0; index < groups.length; index++) {
    if (isEqual(element, groups[index][0])) {
      return index;
    }
  }
  groups.push([]);
  return groups.length - 1;
};

const identicalGroupOf = function (elements) {
  if (elements.length === 0) {
    return [];
  }
  const groups = identicalGroupOf(elements.slice(1));
  const position = positionOf(elements[0], groups);
  groups[position].push(elements[0]);
  return groups;
};

console.log(identicalGroupOf([1]));
console.log(identicalGroupOf([1, 2]));
console.log(identicalGroupOf([1, 2, 3]));
console.log(identicalGroupOf([1, 2, 1]));
console.log(identicalGroupOf([1, 2, 1, 2, 3]));

console.log(identicalGroupOf([[1, 1], 1, [1, 1]]));
console.log(identicalGroupOf([1, [1, 1], 1, [1, 1]]));
console.log(identicalGroupOf([1, [1, 1], 1, [1, 1], 1]));
console.log(identicalGroupOf([1, [1, 1], 1, [2, 1], 1]));
console.log(identicalGroupOf([1, [1], 1, [2, 1], 1]));
