const checkType = type => {
  return content => {
    return Object.prototype.toString.call(content) === `[object ${type}]`;
  };
};
const utils = {};
const types = ["Number", "String"];
types.forEach(type => {
  utils[`is${type}`] = checkType(type);
});
console.log(utils.isString("abc"));
console.log(utils.isNumber("abc"));
console.log(utils.isNumber(123));


