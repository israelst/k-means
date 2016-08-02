function translate(el, x, y){
    el.style.transform = 'translate(' + x + 'px,' + y + 'px)';
}

function sq(n){ return n * n; }

function distance(p1, p2){
    return Math.sqrt(sq(p1.x - p2.x) + sq(p1.y - p2.y));
}

function nearestCluster(datum, centroids){
    return centroids.sort(function(a, b){
        return distance(b.centroid, datum) - distance(a.centroid, datum);
    })[0];
}

window.addEventListener('load', function(){
    var circles = document.querySelectorAll('circle');
    var markers = document.querySelectorAll('path.cross');

    function placeCircle(datum, i){
        translate(circles[i], datum.x, datum.y);
    }

    function placeMarker(cluster, i){
        var centroid = cluster.centroid;
        translate(markers[i], centroid.x, centroid.y);
        markers.fill = cluster.color;
    }

    function setCluster(datum, i){
        var cluster = nearestCluster(datum, clusters);
        cluster.data.push(datum);
        circles[i].setAttribute('fill', cluster.color);
    }

    function updateCentroids(centroid){
        //TODO
    }

    function reset(){
        data = randomCoords(10);
        data.forEach(placeCircle);
        clusters.forEach(placeMarker);
    }

    document.querySelector('#reset').addEventListener('click', reset);
    document.querySelector('#start').addEventListener('click', function(){
        data.forEach(setCluster);
        clusters.forEach(updateCentroids);
        clusters.forEach(placeMarker);
    });
});
