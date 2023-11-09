function manipulation(string, callback) {
    const manipulationString = string.toUpperCase();
    callback(manipulationString);
}
manipulation("I am ramya", (mani) => console.log(`The manipulated string is :${mani}`));
