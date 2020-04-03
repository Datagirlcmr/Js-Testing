export default function (numberArray) {
  function average() {
    return (numberArray.reduce((a, b) => a + b, 0)) / numberArray.length;
  }

  function min() {
    return Math.min(...numberArray);
  }
  function max() {
    return Math.max(...numberArray);
  }

  function length() {
    return numberArray.length;
  }

  return {
    average: average(),
    min: min(),
    max: max(),
    length: length(),
  };
}
