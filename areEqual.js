const areBothArrays = function (array1, array2) {
  return Array.isArray(array1) && Array.isArray(array2);
};

const isEqual = function (lhs, rhs) {
  if (!areBothArrays(lhs, rhs)) {
    return lhs === rhs;
  }
  const stack = [[lhs, rhs]];
  while (stack.length > 0) {
    const stackTop = stack.pop();
    const _lhs = stackTop[0];
    const _rhs = stackTop[1];
    if (_lhs.length !== _rhs.length) {
      return false;
    }
    for (let index = 0; index < _lhs.length; index++) {
      if (areBothArrays(_lhs[index], _rhs[index])) {
        stack.push([_lhs[index], _rhs[index]]);
      } else if (_lhs[index] !== _rhs[index]) {
        return false;
      }
    }
  }
  return true;
};

exports.isEqual = isEqual;

console.log(isEqual([1], [1]));
console.log(isEqual([], []));
console.log(isEqual([1, 2], [1, 2]));
console.log(isEqual([1, 2], [0, 2]));
console.log(isEqual([1, 2], [[1], 2]));
console.log(isEqual([1, 2], [[1], 2]));
console.log(isEqual([[[1], [2]], [[1], [2]]], [[[1], [2]], [[1], [2]]]));
