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

app.service("nextPage", function (database){
	this.slide = ($event) => {
		//cache the id of the page -> used to navigate to appropriate page
		const id = $event.target.id;
		const color = $("#" + id).css("backgroundColor");

		const slidePage = (text) => {
			$("#container").animate({
				right: "110vw"
			}, {
				duration: 500
			});

			$("#dynamicPageOne").css("backgroundColor", color).fadeIn();
			$("#dynamicPageOne #content").html(text);
			$("#dynamicPageOne #content").fadeIn(1000);
		};

		if(id == "titleBar"){
			let text = database.homepageText;
			slidePage(text);
		} else if(id == "upcoming"){
			let text = "";
			slidePage(text);
		} else if(id == "previous"){
			let text = "";
			slidePage(text);
		} else if(id == "membership"){
			let text = "";
			slidePage(text);
		} else if(id == "contact"){
			let text = "";
			slidePage(text);
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

app.service("database", function () {
	this.homepageText = "<span>Entertainment Ready offers fun, friendly and safe events to Philadelphia singles.</span><br><span>What makes us different is that we are not your typical dating service. We focus on dating education rather than playing match maker.</span><br><span>We also cater to singles in different stages of dating readiness, so if you are newly single and just want to be around other singles or have been single for awhile and you are looking for that special one, there is an event for you.</span>"
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