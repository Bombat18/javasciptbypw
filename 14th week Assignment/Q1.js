const users = [
    "ramya" , "raja", "Mithun","krishna","Suman"
];

function presentUser(user)
{
    if(users.includes(user)){
        console.log(`Yes,${user} is valid user.`);
        return true;
    }
    else
    {
        console.log(`No, ${user} is not a valid user.`);
        return true;
    }
}

presentUser("Mithun");
presentUser("Someone");