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

const addToGroup = function (element, groups) {
  let position = positionOf(element, groups);
  if (position === -1) {
    groups.push([]);
    position = groups.length - 1;
  }
  groups[position].push(element);
  return groups;
};

const groupOfIdentical = function (elements) {
  if (elements.length === 0) {
    return [];
  }
  const groups = groupOfIdentical(elements.slice(1));
  return addToGroup(elements[0], groups);
};

console.log(groupOfIdentical([1])); // [ [ 1 ] ]
console.log(groupOfIdentical([1, 2])); // [ [ 2 ], [ 1 ] ]
console.log(groupOfIdentical([1, 2, 3])); // [ [ 3 ], [ 2 ], [ 1 ] ]
console.log(groupOfIdentical([1, 2, 1])); // [ [ 1, 1 ], [ 2 ] ]
console.log(groupOfIdentical([1, 2, 1, 2, 3])); // [ [ 3 ], [ 2, 2 ], [ 1, 1 ] ]

console.log(groupOfIdentical([[1, 1], 1, [1, 1]])); // [ [ [ 1, 1 ], [ 1, 1 ] ], [ 1 ] ]
console.log(groupOfIdentical([1, [1, 1], 1, [1, 1]])); // [ [ [ 1, 1 ], [ 1, 1 ] ], [ 1, 1 ] ]
console.log(groupOfIdentical([1, [1, 1], 1, [1, 1], 1])); // [ [ 1, 1, 1 ], [ [ 1, 1 ], [ 1, 1 ] ] ]
console.log(groupOfIdentical([1, [1, 1], 1, [2, 1], 1])); // [ [ 1, 1, 1 ], [ [ 2, 1 ] ], [ [ 1, 1 ] ] ]
console.log(groupOfIdentical([1, [1], 1, [2, 1], 1])); // [ [ 1, 1, 1 ], [ [ 2, 1 ] ], [ [ 1 ] ] ]
console.log(groupOfIdentical([[[1], [2]], [[1], [2]]])); // [ [ [ [ 1 ], [ 2 ] ],[ [ 1 ], [ 2 ] ] ] ]