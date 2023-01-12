// Code your solution in this file!

const hqBlock = 42; // test tells us hq is on 42nd street
const feetToBlockConversion = 264; //block is 264 feet long

function distanceFromHqInBlocks(someValue){
    let blocks = 0;

    // if below 42
    if (someValue <=hqBlock){
        blocks = hqBlock-someValue;
        return blocks;
    }

    // if above 42
    if (hqBlock <= someValue){
        blocks = someValue-hqBlock;
        return blocks
    }
    return blocks;

}

function distanceFromHqInFeet(someValue){
    let blocks = distanceFromHqInBlocks(someValue) * feetToBlockConversion;
    return blocks;
}

function distanceTravelledInFeet(start, destination){
    let distance = 0;
    if (start<destination){
        distance = (destination - start) * feetToBlockConversion;
        return distance;
    }
    else if (destination<start){
        distance = (start-destination) * feetToBlockConversion;
        return distance;
    }
    return distance; 
}

function calculatesFarePrice(start, destination){
    let travel = distanceTravelledInFeet(start,destination);
    let fare = 0;
    const minimumDistance =400;
    const perFoot = 0.02;

    if (travel<=400){
        return fare;
    }

    else if (minimumDistance<travel && travel<2000){
        fare = (travel-minimumDistance)*perFoot;
        return fare;
    }

    else if (2000<travel && travel <=2500){
        fare = 25;
        return fare;
    }

    if(2500<travel)
    {
        return 'cannot travel that far';
    }




}