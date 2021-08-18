var a = callback => callback()
console.log(typeof a)
a(() => console.log(123))