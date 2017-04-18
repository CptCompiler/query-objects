const contains = (val1, val2) => {
  if (!Array.isArray(val2)) {
    throw new Error("`val2` must be an array");
  }
  return val2.indexOf(val1) > -1;
};

const notcontains = (val1, val2) => {
  return !contains(val1, val2);
};

const equals = (val1, val2) => val1 === val2;
const ne = (val1, val2) => val1 !== val2;
const gt = (val1, val2) => val1 > val2;
const gte = (val1, val2) => val1 >= val2;
const lt = (val1, val2) => val1 < val2;
const lte = (val1, val2) => val1 <= val2;

module.exports = {
  contains,
  notcontains,
  equals,
  ne,
  gt,
  gte,
  lt,
  lte
};
