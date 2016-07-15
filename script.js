function translate(el, x, y){
    el.style.transform = 'translate(' + x + 'px,' + y + 'px)';
}

function random(max){
    return Math.round(Math.random() * max);
}

function sq(n){
    return n * n;
}

function distance(p1, p2){
    return Math.sqrt(sq(p1.x - p2.x) + sq(p1.y - p2.y));
}

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

function nearestCentroid(datum, centroids){
    return centroids.sort(function(a, b){
        return distance(b, datum) - distance(a, datum);
    })[0];
}

var data = randomCoords(10),
    centroids = randomCoords(2);

centroids[0].fill = 'blue';
centroids[1].fill = 'red';

window.addEventListener('load', function(){
    var circles = document.querySelectorAll('circle');
    var markers = document.querySelectorAll('path.cross');
    centroids.forEach(function(centroid, i){
        translate(markers[i], centroid.x, centroid.y);
        markers.fill = centroid.fill;
    });
    data.forEach(function(datum, i){
        translate(circles[i], datum.x, datum.y);
        var centroid = nearestCentroid(datum, centroids);
        circles[i].setAttribute('fill', centroid.fill);
    });
});
