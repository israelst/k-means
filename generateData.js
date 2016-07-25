function random(max){ return Math.round(Math.random() * max); }

function randomCoord(){
    var x = random(100),
        y = random(100);
    return {x: x, y: y};
}

function randomCoords(qty){
    var coords = [];
    for(var i = 0; i < qty; i++){
        coords.push(randomCoord());
    }
    return coords;
}

var data = randomCoords(10),
    clusters = [
        {
            color: 'blue',
            centroid: randomCoord(),
            data: [],
        },
        {
            color: 'red',
            centroid: randomCoord(),
            data: [],
        },

    ];

