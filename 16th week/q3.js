const inventry = {
    item1: 20, item2: 40, item3: 50
}
const exchange=80;

const algoOfusd = Object.keys(inventry).map(item =>{
    return{
        [item]: inventry[item]*exchange
    }
})

console.log(Object.assign({},...algoOfusd));