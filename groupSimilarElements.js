const positionOf = function (element, groups) {
  for (let index = 0; index < groups.length; index++) {
    const position = groups[index].indexOf(element);
    if (position !== -1) {
      return index;
    }
  }
  return -1;
};

const identicalGroupOf = function (elements) {
  const groups = [];
  for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    let position = positionOf(element, groups);
    if (position === -1) {
      groups.push([]);
      position = groups.length - 1;
    }
    groups[position].push(element);
  }
  return groups;
};

console.log(identicalGroupOf([1]));
console.log(identicalGroupOf([1, 2]));
console.log(identicalGroupOf([1, 2, 3]));
console.log(identicalGroupOf([1, 2, 1]));
console.log(identicalGroupOf([1, 2, 1, 2, 3]));
console.log(identicalGroupOf(['a', 'b', 'a']));
