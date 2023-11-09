// function operation(array, callback) {
//    const doublenumber = array.map((num) => callback(num))
//    return doublenumber;
// }

// const myarray = [1, 2, 3, 4, 5, 6, 7, 8];
// function DounleArray(num) {
//    return num * 2;
// }

// const tom = operation(myarray, DounleArray);

// console.log(tom);


function Operation(array, Callback){
   const DoubleOfCallback = array.map((num)=>Callback(num));
   return DoubleOfCallback;
}
 const arr=[1,3,4,5,6,78,0];
 function DoubleOperation(cum){
   return cum*2;
 }

 const Double = Operation(arr,DoubleOperation);
 console.log(Double);