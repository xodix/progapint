const x = 10;
const y = 17;
const z = 23;

const arr = [x,y,z];
console.log(arr.sort((a,b) => a-b).join(" < "));