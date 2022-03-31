const findSimilarElement = function (groups, element) {
  for (let index = 0; index < groups.length; index++) {
    const position = groups[index].indexOf(element);
    if (position !== -1) {
      return index;
    }
  }
  return -1;
};

const identicalGroupOf = function (elements) {
  const groupedElements = [];
  for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    const position = findSimilarElement(groupedElements, element);
    if (position === -1) {
      groupedElements.push([element]);
    } else {
      groupedElements[position].push(element);
    }
  }
  return groupedElements;
};

console.log(identicalGroupOf([1]));
console.log(identicalGroupOf([1, 2]));
console.log(identicalGroupOf([1, 2, 3]));
console.log(identicalGroupOf([1, 2, 1]));
console.log(identicalGroupOf([1, 2, 1, 2, 3]));
