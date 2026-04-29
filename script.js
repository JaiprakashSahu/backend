// forEach
var arr = [1,2,3,4];
arr.forEach(function(val){
    console.log(val + " Hello");


})

// Map

var arr = [1,2,3,4];
var newarr = arr.map(function(val){
    return val + 9;
})
console.log(newarr);

// Filter

var arr=[1,2,3,4];
var ans = arr.filter(function(val){
    if(val >3 ) {return true;}
    else return false;
})
console.log(ans);