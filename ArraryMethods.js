const arr = [11,13,14,16,17];
console.log(arr)


const double = function(x){
   return x*2
}

const outputWithFunction = arr.map(double)
const output = arr.map((x) => x*3)


console.log(output)
console.log(outputWithFunction,"using Function")
