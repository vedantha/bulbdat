// Line definition, drawing and animation code below. All drawings and animations are svg based
// and use SnapSvg javascript library.
// -------------------------- BEGINNING OF LINE ONE -----------------------------
$(document).ready(function(){
var lineArea = Snap(1500,3000).attr({id : "line-1"}); //Defining svg draw area for #lineOne
var g = lineArea.gradient("L(561.885,1364.28,1060.48,1792.37)-#000-#FFF-#FFF"); //gradient definition for the line svg
var g2 = lineArea.gradient("L(1185.3,1898.82,562.61,2441.68)#FFF-#FFF-#000-#000"); 
//gradient definition for the line svg -^^

// draws a line from x1 y1 to x2 y2 , attr defines stroke attributes
var lineOneFirst = lineArea.path("M 561.885 1364.28").attr({stroke : g, strokeWidth : 1});
var lineOneMid = lineArea.path("M 1068 1798.82").attr({stroke : "#FFF", strokeWidth : 1});
var lineOneLast = lineArea.path("M 1185.3 1898.82 ").attr({stroke : g2, strokeWidth : 1});
/*
Next Up: Animation */
// To do:
// => On scroll event (scroll up and scroll down difference)
// => Animate drawing of lineOne
lineOneFirst.animate({"path" : "M 561.885 1364.28 L 1060.48 1792.37"}, 1500,mina.easeinout());
var delayMid = 1510, delayLast = 1770;
// delays for timed one after the other animation sequences
setTimeout(function(){ 
lineOneMid.animate({"path" : "M 1068 1798.82 L 1185.3 1899.52"},250);
},delayMid);

setTimeout(function(){
lineOneLast.animate({"path" : "M 1185.3 1898.82 L 562.61 2441.68"},1500);
},delayLast);
// ------------------------------END OF LINE ONE --------------------------------
// ------------------------------BEGINNING INTERMEDIATE LINE --------------------

var interLineArea = Snap(500,500).attr({id : "int-line"});
var interLine = interLineArea.path("M 100 200 L 370 87").attr({stroke:"#FFF"});
});