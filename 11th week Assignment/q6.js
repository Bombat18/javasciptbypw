function Form(name, email, age) {


    if (typeof name !== "string") {
        console.log("Name should be a String..");

    }

    if (typeof email !== "string") {
        console.log("Email should be a String..");

    }

    if (typeof age !== "number") {
        console.log("Age should be a Number..");

    }

}


let name = "John Doe";
let email = "johndoe@example.com";
let age = "25";
Form(name, email, age)
