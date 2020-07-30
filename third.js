//this function cuts every third letter from the user's input and returns a new string made from the removed third letters
const everyThird = (input) => {
  let string = input.toString();
  if (string.length <= 3) {
    return "Error! Input must be longer than 3 characters."
  }
  let result = '';
  let i = 0;
  string.replace(/\s/g, "").split('').forEach(charAt3 => {
    i++;
    if (i % 3 === 0) {
      result += charAt3
    }
  })
  return result
}

module.exports = {everyThird}
