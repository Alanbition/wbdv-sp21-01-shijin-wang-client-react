let someObject= {
    anObjectProperty: {
        anotherObjectProp: {q:111, w:"222"},
        anotherArrayProp: [321, 432, 543]
    },
    aNumberArrayProp: [1, 2, 3],
    anObjectArrayProp: [
        {a:123, b: 234}, {a:321, b:432}
    ]
}

// console.log(someObject.anObjectProperty.anotherObjectProp.q)
// console.log(someObject.anObjectProperty["anotherObjectProp"].q)

function  addEs5(a,b){
    console.log(a, b)
    return a + b
}

// let ewq = addEs5(2, 3)
// console.log(ewq)

// function addEs6 = (a, b) => {
//     console.log(a, b)
//     return a + b
// }


//Quiz only works if single line!!!
// const addEs6 = (a, b) => a+b
//
// ewq = addEs6(2, 3)
// console.log(ewq)
//
// function squareEs5(b){
//     return b * b
// }
//
//
//
// const squareEs6 = (b) => b* b
//
// let ewq = squareEs6(3)
// console.log(ewq)


let all = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let even = all.filter(i => i % 2 === 0)
let odd = all.filter(i => i % 2 !== 0)

console.log(even)
console.log(odd)

all = [1, 2, 3, 4]
let square = all.map(i => i * i)
console.log("all = ", all)
console.log("square = ", square)

// let array = [1, 3, 4, 2, 5]
// array.find(x=>x > 3)
// console.log("array = ", array)

let list = [1, 2, 3]
let [a, b] = list
console.log(list, a, b)

let tmp = {a:123, b:234, c:456}
let {a,c} = tmp
console.log(a, c)