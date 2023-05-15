function analyzeArray(array) {
  let length = array.length;
  let arrayTotal = array.reduce((prev, next) => prev + next, 0);
  let average = arrayTotal / length;
  let min = Math.min(...array);
  let max = Math.max(...array);

  return {
    average,
    min,
    max,
    length,
  };
}

export default analyzeArray;
