const app = "I don't do much."
const kittens = ["Milo","Otis","Garfield"]

function destructivelyAppendKitten(name) {
  return kittens.push("Ralph");
}
function destructivelyPrependKitten(name) {
  return kittens.unshift("Bob");
}
function destructivelyRemoveLastKitten() {
  return kittens.pop()
}
function destructivelyRemoveFirstKitten() {
  return kittens.shift()
}
function appendKitten(name) {
  newKittens = [...kittens, name]
  return newKittens
}
function prependKitten(name) {
  newKittens = [name, ...kittens]
  return newKittens
}
function removeLastKitten() {
  newKittens = kittens.slice(1)
  return newKittens
}
function removeFirstKitten() {
  newKittens = kittens.slice(0, kittens.length - 1)
  return newKittens
}
