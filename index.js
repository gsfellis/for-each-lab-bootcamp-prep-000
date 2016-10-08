function iterativeLog(array) {
  array.forEach(logElements)
}

function logElements(element, index, array) {
  console.log(`${index}: ${element}`);
}

function iterate(callback) {
  var array = [{"pizza": 23}]
  array.forEach(callback)
  return array
}

function doToArray(array, callback) {
  array.forEach(callback)
}
