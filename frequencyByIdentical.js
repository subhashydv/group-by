const isArray = function (content) {
  return Array.isArray(content);
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

const areArraysEqual = function (array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let index = 0; index < array1.length; index++) {
    if (!isEqual(array1[index], array2[index])) {
      return false;
    }
  }
  return true;
};

const positionOf = function (element, groups) {
  for (let index = 0; index < groups.length; index++) {
    if (isEqual(element, groups[index][0])) {
      return index;
    }
  }
  return -1;
};

const addFrequency = function (element, groups) {
  let position = positionOf(element, groups);
  if (position === -1) {
    groups.push([element, 0]);
    position = groups.length - 1;
  }
  groups[position][1]++;
  return groups;
};

const frequencyOfIdentical = function (elements) {
  // if (elements.length === 0) {
  //   return [];
  // }
  // const groups = frequencyOfIdentical(elements.slice(1));
  // return addFrequency(elements[0], groups);

  const groupedElements = [];
  for (let index = 0; index < elements.length; index++) {
    let position = positionOf(elements[index], groupedElements);
    if (position === -1) {
      groupedElements.push([elements[index], 0]);
      position = groupedElements.length - 1;
    }
    groupedElements[position][1]++;
  }
  return groupedElements;
};


console.log(frequencyOfIdentical([1]));
console.log(frequencyOfIdentical([1, 2]));
console.log(frequencyOfIdentical([1, 2, 3]));
console.log(frequencyOfIdentical([1, 2, 1]));
console.log(frequencyOfIdentical([1, 2, 1, 2, 3]));
console.log(frequencyOfIdentical([[[1], [2]], [[1], [2]]])); 
