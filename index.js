// Write your solution here!
// 1️⃣ Initial cats array
const cats = ["Milo", "Otis", "Garfield"];

// 2️⃣ DESTRUCTIVE FUNCTIONS (modify original array)

function destructivelyAppendCat(name) {
  cats.push(name);
}

function destructivelyPrependCat(name) {
  cats.unshift(name);
}

function destructivelyRemoveLastCat() {
  cats.pop();
}

function destructivelyRemoveFirstCat() {
  cats.shift();
}

// 3️⃣ NON-DESTRUCTIVE FUNCTIONS (return new array)

function appendCat(name) {
  return [...cats, name];
}

function prependCat(name) {
  return [name, ...cats];
}

function removeLastCat() {
  return cats.slice(0, cats.length - 1);
}

function removeFirstCat() {
  return cats.slice(1);
}
