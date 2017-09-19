const app = "I don't do much."
const kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten (name) {
  kittens.push("Ralph")
  return kittens
}
function destructrivelyPrependKitten (name) {
  kittens.unshift("Ralph")
  return kittens
}
function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens
}
function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return kittens
}
function appendKitten(name) {

}
function prependKitten(name) {

}
function removeLastKitten() {

}
function removeFirstKitten() {

}
