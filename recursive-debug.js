/***********************************************************************
We've done most of the work for you below, but something's not quite
right. Refactor the problem below to avoid a stack overflow and save
the day!

When fixed, this function should behave similarly to JavaScript's '.map()'
function.

Examples:

doForAll([], (x) => x * 2); // => []
doForAll([1, 2, 3], (x) => x + 1); // => [2, 3, 4]
doForAll(["a", "b", "c"]), (x) => x.toUpperCase()); // => ["A", "B", "C"]
***********************************************************************/

function doForAll(arr, action, done = []) {
  if (!arr.length) return done;
  done.push(action(arr[0]));
  return doForAll(arr.slice(1), action, done);
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
module.exports = doForAll;
