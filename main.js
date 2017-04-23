"use strict";

var app = angular.module("app", []);

app.controller("ctrl", [ "$scope", "nextPage", "prevPage", 
						function ($scope, nextPage, prevPage) {
	$scope.name = "Entertainment Ready";
	$scope.homePageOptions = [ 
		{name: "Upcoming Events", id: "upcoming"}, 
		{name: "Previous Events", id: "previous"}, 
		{name: "Memberships", id: "membership"}, 
		{name: "Contact Us", id: "contact"}
		];
	$scope.nextPage = ($event) => {
		nextPage.slide($event);
	};
	$scope.prevPage = ($event) => {
		console.log("prev");
		prevPage.slide($event);
	};
}]);

app.service("nextPage", function (){
	this.slide = ($event) => {
		//cache the id of the page -> used to navigate to appropriate page
		const id = $event.target.id;
		const color = $("#" + id).css("backgroundColor");

		const slidePage = () => {
			$("#container").animate({
				right: "110vw"
			}, {
				duration: 500
			});

			$("#dynamicPageOne").css("backgroundColor", color).fadeIn();
		}

		if(id == "titleBar"){
			slidePage();
		} else if(id == "upcoming"){
			//slidePage();
		} else if(id == "previous"){
			//slidePage();
		} else if(id == "membership"){
			//slidePage();
		} else if(id == "contact"){
			//slidePage();
		}
	}
});

app.service("prevPage", function ($timeout){
	this.slide = ($event) => {
		//cache the id of the page -> used to navigate to appropriate page
		//const id = $event.target.id;
		//const color = $("#" + id).css("backgroundColor");
		// console.log("prev");
		const slidePage = () => {
			//$("#dynamicPageOne").css("backgroundColor", "");
			$("#container").animate({
				right: "0vw"
			}, {
				duration: 500
			});

			$("#dynamicPageOne").fadeOut(800);
			
		}

		slidePage();

		// if(id == "titleBar"){
		// 	slidePage();
		// } else if(id == "upcoming"){
		// 	slidePage();
		// } else if(id == "previous"){
		// 	slidePage();
		// } else if(id == "membership"){
		// 	slidePage();
		// } else if(id == "contact"){
		// 	slidePage();
		// }
	}
});

app.directive("homepage", function () {
	return {
		template: "	<div id=\"container\">"+
						"<div id=\"titleBar\" class=\"nameBar\" ng-click=\"nextPage($event)\">"+
							"{{name}}"+
						"</div>"+
						"<div ng-repeat=\"x in homePageOptions\" ng-click=\"nextPage($event)\" id=\"{{x.id}}\" class=\"mainMenuOption\">"+
							"<div> {{x.name}} </div>"+
						"</div>"+
					"</div>"
	}
});

app.directive("moreInfo", function () {
	return {
		template: "more info"
	}
});