x=5;
console.log("x="+x);
var x; //this line will be loaded and replace before line 1
       //before execution of the script (this is call "hoisting" ,"levage en francais" )


console.log("y="+y); //undefined !!! (hoisting of declaration, no hoisting og initialization !!!)
var y=4;

//===============

var a=2;
var b=3;
console.log("a+b="+add(a,b)); //call before declaration is possible because of hoisting of fuction

function add(x,y){
    return x+y;
}

/*
console.log("a+b="+add2(a,b)); //add2 is not a function
//not working , hoisting of declaration, no hoisting og initialization

var add2 = function (x,y){
    return x+y;
}
*/