
const myMap = new Map();

myMap.set('name', 'Ramya');
myMap.set('age', '21');
myMap.set('Gmail', 'ramyaranjan78@gmail.com');

console.log(myMap)

myMap.set('name', 'kajal');
myMap.set('age', '20');
myMap.set('Gmail', 'kajal89@gmail.com');


console.log(myMap);


myMap.delete('name');


console.log(myMap);

//  output

// Map(3) {
//     'name' => 'Ramya',
//     'age' => '21',
//     'Gmail' => 'ramyaranjan78@gmail.com'
//   }
//   Map(3) {
//     'name' => 'kajal',
//     'age' => '20',
//     'Gmail' => 'kajal89@gmail.com'
//   }
//   Map(2) { 'age' => '20', 'Gmail' => 'kajal89@gmail.com' }