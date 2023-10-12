function timeTake(delayInsecond){
    
const countinterval= setInterval(()=>{
    if(delayInsecond>0){
        console.log(`Time remaining: ${delayInsecond}second...`);
        delayInsecond--;
    }
    else{
        function getmath() {
            clearInterval(countinterval)
            return Math.floor(Math.random() * 100);
            
        }
        console.log(`Random number generated:${getmath()}`);
    }
},1000)

}


timeTake(3);