function translate(el, x, y){
    el.style.transform = 'translate(' + x + 'px,' + y + 'px)';
}

function sq(n){
    return n * n;
}

function distance(p1, p2){
    return Math.sqrt(sq(p1.x - p2.x) + sq(p1.y - p2.y));
}

function nearestCentroid(datum, centroids){
    return centroids.sort(function(a, b){
        return distance(b.centroid, datum) - distance(a.centroid, datum);
    })[0];
}

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
