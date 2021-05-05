// Code your solution in this file!

function distanceFromHqInBlocks (a) {
    if ( 42 >= a ) 
        return parseInt(42 - a)
    else (42 <= a)
        return parseInt(a - 42)
}

distanceFromHqInBlocks(43)
distanceFromHqInBlocks(50)
distanceFromHqInBlocks(34)

function distanceFromHqInFeet (b) {
    if ( 42 >= b ) 
        return parseInt((42 - b)*264)
    else (42 <= b)
        return parseInt((b - 42)*264)
}

distanceFromHqInFeet (50)
distanceFromHqInFeet (34)
distanceFromHqInFeet (43)

function distanceTravelledInFeet(c,d) {
    if ( c >= d)
        return parseInt((c-d)*264)
    else (d > c)
        return parseInt((d-c)*264)
}

distanceTravelledInFeet(43, 48)
distanceTravelledInFeet(50, 60)
distanceTravelledInFeet(34, 28)



let distance = distanceTravelledInFeet()
let min = 400
let cost = 0.02

function calculatesFarePrice (c,d){
    if ((distanceTravelledInFeet(c,d)) <= min){   
        return (parseInt(0));}
        else if ((distanceTravelledInFeet(c,d)) > 400 && (distanceTravelledInFeet(c,d)) <= 2000){
            return parseFloat(((distanceTravelledInFeet(c,d))-min)*cost);}
        else if ((distanceTravelledInFeet(c,d)) > 2000 && (distanceTravelledInFeet(c,d)) <= 2500){
            return parseInt(25);}
        else ((distanceTravelledInFeet(c,d)) > 2500)
            return `cannot travel that far`  
}

calculatesFarePrice(43, 44)
calculatesFarePrice(34, 32)
calculatesFarePrice(50, 58)
calculatesFarePrice(34, 24)