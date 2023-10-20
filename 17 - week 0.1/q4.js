


{

    console.log(x); //ReferenceError: Cannot access 'x' before initialization
    console.log(y); //undefined
    console.log(z); //ReferenceError: Cannot access 'z' before initialization
    let x = "com";
    var y = "tom"
    const z = 5;

    console.log(x); //'com'
    console.log(y); //'tom'
    console.log(z); // 5
}


