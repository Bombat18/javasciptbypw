function areaOfCircle(redious) {
    const pi = Math.PI
    let area = pi * redious * redious;
    let arearound=area.toFixed(3)
    console.log(`Circle area is ${arearound}` );
}

const circleArea = areaOfCircle(5)

// output
// Circle area is 78.540