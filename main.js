// Line definition, drawing and animation code below. All drawings and animations are svg based
// and use SnapSvg javascript library.
// -------------------------- BEGINNING OF LINE ONE -----------------------------
$(document).ready(function(){
var lineArea = Snap(1500,3000).attr({id : "line-1"}); //Defining svg draw area for #lineOne
var g = lineArea.gradient("L(280.9425,682.14,530.24,896.185)#000-#FFF-#FFF"); //gradient definition for the line svg
var g2 = lineArea.gradient("L(592.65,949.41,281.305,1220.84)#FFF-#FFF-#000"); 
//gradient definition for the line svg -^^

// draws a line from x1 y1 to x2 y2 , attr defines stroke attributes
var lineOneFirst = lineArea.path("M 280.9425 682.14").attr({stroke : g, strokeWidth : "2"});
var lineOneMid = lineArea.path("M 534 899.41").attr({stroke : "#FFF", strokeWidth : 2});
var lineOneLast = lineArea.path("M 592.65 949.41").attr({stroke : g2, strokeWidth : 2});
/*
Next Up: Animation */
// To do:
// => On scroll event (scroll up and scroll down difference)
// => Animate drawing of lineOne
lineOneFirst.animate({"path" : "M 280.9425 682.14 L 530.24 896.185"}, 1500,mina.easeinout());
var delayMid = 1510, delayLast = 1770;
// delays for timed one after the other animation sequences
setTimeout(function(){ 
lineOneMid.animate({"path" : "M 534 899.41 L 592.65 949.76"},250);
},delayMid);

setTimeout(function(){
lineOneLast.animate({"path" : "M 592.65 949.41 L 281.305 1220.84"},1500);
},delayLast);
// ------------------------------END OF LINE ONE --------------------------------
});