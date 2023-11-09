const person = {
    firstname: "Ramyaranjan",
    lastname: "sethi",
    age: 80,
}
function ageInDay(Pobject, callback) {
    const fullname = `${Pobject.firstname} ${Pobject.lastname}`;
    const ageInDay = Pobject.age * 365;
    callback(fullname, ageInDay);
}

ageInDay(person, (fullname, ageInDay) => console.log(`The person's full name is ${fullname} and their age in days is ${ageInDay}`));