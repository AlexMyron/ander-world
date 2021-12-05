// --- First Task ---
function makeObjectDeepCopy(obj) {
  if (Array.isArray(obj)) {
    return obj.map(el => (el = makeObjectDeepCopy(el)));
  } else if (typeof obj === 'object') {
    let clone = {};

    for (const key in obj) {
      clone[key] = makeObjectDeepCopy(obj[key]);
    }
    return clone;
  } else {
    return obj;
  }
}

// --- Second Task ---
const isInvalidArgs = array => array.some(number => typeof number !== 'number' || isNaN(number));

function selectFromInterval(array, num1, num2) {
  let from = null;
  let to = null;

  if (!Array.isArray(array) || isInvalidArgs(array) || isInvalidArgs([num1, num2]))
    throw new Error('Function arguments are not valid');

  if (num1 < num2) {
    from = num1;
    to = num2;
  }
  if (num2 < num1) {
    from = num2;
    to = num1;
  }
  return array.filter(number => number >= from && number <= to);
}

// --- Third Task ---
const myIterable = { from: 1, to: 5 };
myIterable[Symbol.iterator] = function* () {
  const to = myIterable.to;
  const from = myIterable.from;
  if (to < from) throw new Error('Error');
  for (let i = from; i <= to; i += 1) {
    yield i;
  }
};
