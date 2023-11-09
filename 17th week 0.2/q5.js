function greet(name){

    return new Promise((namaste)=>{
        const greeting =`Hallo,${name}`;
        namaste(greeting);
    })
}

greet("Ramya").then((message)=> console.log(message));