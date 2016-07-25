function assert(a, b){
    if(a == b){
        console.log('Success');
    }else{
        console.error(a, 'is different than', b);
    }
}

assert(distance({x: 1, y: 0}, {x: 1, y: 0}), 0);
assert(distance({x: 0, y: 1}, {x: 1, y: 0}), Math.sqrt(2));
assert(distance({x: 0, y: 3}, {x: 4, y: 0}), 5);
assert(distance({x: 3, y: 0}, {x: 0, y: 4}), 5);
