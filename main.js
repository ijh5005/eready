"use strict";

var app = angular.module("app", []);

app.controller("ctrl", [ "$scope", function ($scope) {
	$scope.name = "Entertainment Ready";
	$scope.homePageOptions = [ 
		{name: "Upcoming Events", id: "upcoming"}, 
		{name: "Previous Events", id: "previous"}, 
		{name: "Memberships", id: "membership"}, 
		{name: "Contact Us", id: "contact"}
		];
	console.log($scope.homePageOptions);
}]);