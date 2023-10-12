
function revrese(input) {

    let revstr = "";
    for (let i = input.length - 1; i >= 0; i--) {
        revstr += input[i];
    }
    return revstr;
}
const input = "ramya ranjan";
function delay(input){
    setTimeout(function(){
        console.log(revrese(input));
    },2000)
}

delay(input);