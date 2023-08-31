const collage ={
    name:"nit",
    place:"odisha",
    students:200
}
function check(propertyName){
    if(propertyName in collage){
        console.log(`This object is property "${propertyName}"`);

    }
    else{
        console.log(`Tis object does not have the property "${propertyName}"`)
    }
}

check ("name")

// output

// This object is property "name"