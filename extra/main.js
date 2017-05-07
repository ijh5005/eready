// "use strict";

//$(".turn").addClass("turnit");

$(".liner").click( function () {
	console.log("clicked");
});

// setTimeout(function () {
// 	$(".turn").removeClass("turnit");
// }, 10);
var angle = -24;
setTimeout(() => {
	$(".turn").css("transform", "perspective( 600px ) rotateX(-27deg) rotateY(" + -24 + "deg )");

}, 10);

setInterval( () => {
	angle -= 180;
	//$(".turn").toggleClass("turnit");
	$(".turn").css("transform", "perspective( 600px ) rotateX(-27deg) rotateY(" + angle + "deg )")
}, 10000);