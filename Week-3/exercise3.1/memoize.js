function add(a = 0, b = 0) {
    return a + b;
}


const memoize = (fn) => {
    const cache = {};
    return function (a, b) {
        if (((a + '+' + b) in cache)) {
            return (cache[a + '+' + b] + ' - no computation');
        }
        else {
            let result = fn(a, b);
            cache[a + '+' + b] = result;
            cache[b + '+' + a] = result;
            return result;
        }
    }
}

const memoizeAdd = memoize(add);

console.log(memoizeAdd(100, 100)); // => 200
console.log(memoizeAdd(100)); // => 100
console.log(memoizeAdd(100, 200)); // => 300
console.log(memoizeAdd(100, 100)); // => 200 - without computing
console.log(memoizeAdd(200, 100)); // => 300 - without computing