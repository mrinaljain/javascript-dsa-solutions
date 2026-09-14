let radius = 3;

let diameter = radius*2;
let center = diameter / 2;

let centerX = center;
let centerY = center;

for(let i = 0 ; i<= diameter; i++){
    let row = "";
    for(let j = 0; j <= diameter ; j++ ){

        let dis = distanceFromCenter(i, j);
        if(dis > radius - 0.5 && dis < radius + 0.5){
            row += "*";
        }else{
            row += " ";
        }

    }

    console.log(row);
    
}


// distance from center

function  distanceFromCenter(x, y){
        let horizontalDistance = x - centerX;
        let verticalDistance = y - centerY;
        let distance = Math.sqrt(Math.pow(horizontalDistance, 2) + Math.pow(verticalDistance, 2));
    return distance;
}



// intution
/// Find the distance of each cordinate from center => if the distance is radius then print star els print space
/// Exception: since this is not perfect line we will keep margin of  +- 0.5 while comparing distace from radius.