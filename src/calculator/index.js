export default {
  add(num1, num2) {
    return parseFloat((parseFloat(num1) + parseFloat(num2)).toFixed(2));
  },
  subtract(num1, num2) {
    return parseFloat((parseFloat(num1) - parseFloat(num2)).toFixed(2));
  },
  multiply(num1, num2) {
    return parseFloat((parseFloat(num1) * parseFloat(num2)).toFixed(2));
  },
  divide(num1, num2) {
    return parseFloat(((parseFloat(num1) / parseFloat(num2))).toFixed(2));
  },
};
