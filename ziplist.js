const testOne = ['a', 'b', 'c'];
const testTwo = [1, 2, 3];

function zipList(first, second) {
  const ret = [];
  for (let i = 0; i < first.length; i++) {
    ret.push(first[i], second[i]);
  }
  return ret;
}

console.log(zipList(testOne, testTwo));

function zipListTheSimpleWay(first, second) {
  let ret = [];
  ret = _.flatten(_.zip(first, second));
  return ret;
}

console.log(zipListTheSimpleWay(testOne, testTwo));
