// Vector
function Vector(x,y){
    this.x = x || 0;
    this.y = y || 0;
}

Vector.add = function(a,b){
    return new Vector(a.x + b.x, a.y + b.y);
};

Vector.sub = function(a,b){
    return new Vector(a.x - b.x, a.y + b.y);
};

