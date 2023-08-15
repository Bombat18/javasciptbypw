function calculateTotalCardValue(){
    let totalValue =0;
    for(let i=0; i<arguments.length;i++)
{
    totalValue = totalValue+ arguments[i];
}
console.log(`The Total cart value is ${totalValue}`);
return totalValue;
}

calculateTotalCardValue(125,20,30);