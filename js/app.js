var ieeeApp = angular.module('ieeeApp', ['duScroll', 'ngAnimate']);

ieeeApp.controller('HomeCtrl', function($scope, $http) {

	$scope.menuOpen = false;

	$scope.toggleMenu = function() {
		$scope.menuOpen = !$scope.menuOpen;
	};

	$scope.upcomingEvents = [];
	$scope.pastEvents = [];

	function parseEvents(response, arr) {
		for (var i = 0; i < response.data.items.length; i++) {
	    	// Link to facebook event should be first thing in Google calendar description
	    	var description = response.data.items[i].description;
	    	if (description) {
	    		var a = description.replace( /\n/g, " " ).split(" ");
	    		for (var j = 0; j < a.length; j++) {
	    			if (a[j].includes("facebook.com")) {
	    				var fblink = a[j];
	    				a.splice(j, 1); // Remove facebook link from description
	    				break;
	    			}
	    		}
		    	if (fblink) {
		    		response.data.items[i].fblink = fblink;
		    		response.data.items[i].description = a.join(' ');
		    		fblink = "";
		    	}
	    	}
	    	arr.push(response.data.items[i]);
	    	console.log("item:", response.data.items[i])
	    }
	}

	var today = new Date();
	var todayString = String(today.getFullYear()) + '-' + String(today.getMonth()+1) + '-' + String(today.getDate()) + 'T00:00:00-06:00';
	var url = 'https://www.googleapis.com/calendar/v3/calendars/ieee@u.northwestern.edu/events?key=AIzaSyDJ41XTLp-sCzITSfKSHkUS_PpCGhczOIU&singleEvents=true&orderBy=startTime&maxResults=3&timeMin=' + todayString;

	$http.get(url).then(function successCallback(response) {
	    parseEvents(response, $scope.upcomingEvents);
	 }, function errorCallback(response) {
	    console.log('Error');
	    console.log(response.data.error.errors);
	 });

	var timeMin = String(today.getFullYear()-1) + '-' + String(today.getMonth()+1) + '-' + String(today.getDate()) + 'T00:00:00-06:00';
	var url = 'https://www.googleapis.com/calendar/v3/calendars/ieee@u.northwestern.edu/events?key=AIzaSyDJ41XTLp-sCzITSfKSHkUS_PpCGhczOIU&singleEvents=true&orderBy=startTime&timeMax=' + todayString;

	$http.get(url).then(function successCallback(response) {
	    parseEvents(response, $scope.pastEvents);
	    $scope.pastEvents.reverse();
	    if ($scope.pastEvents.length > 2) {
		    $scope.pastEvents = [$scope.pastEvents[0], $scope.pastEvents[1]];
		}
	 }, function errorCallback(response) {
	    console.log('Error');
	    console.log(response.data.error.errors);
	 });	


	$scope.exec = [
		{
			name: 'Chris Chen',
			position: 'President',
			img: 'assets/headshots/chris.jpg'
		},

		{
			name: 'Kushal Gourikrishna',
			position: 'Vice President',
			img: 'assets/headshots/kush.jpg'
		},

		{
			name: 'William Su',
			position: 'Secretary',
			img: 'assets/headshots/william_su.jpg'
		},

		{
			name: 'Jared Fernandez',
			position: 'Technical Director',
			img: 'assets/headshots/jared.jpg'
		},

		{
			name: 'Larry Zhao',
			position: 'Industry and Outreach Director',
			img: 'assets/headshots/larry.jpg'
		},

		{
			name: 'Junhao Li',
			position: 'Treasurer',
			img: 'assets/headshots/jun.jpg'
		},

		{
			name: 'Kevin Wilde',
			position: 'Webmaster',
			img: 'assets/headshots/kevin.jpg'
		},

		{
			name: 'William Xiao',
			position: 'Legacy Adviser',
			img: 'assets/headshots/william_xiao.jpg'
		},

		{
			name: 'Curtis Wang',
			position: 'Graduate Adviser',
			img: 'assets/headshots/curtis.jpg'
		}
	];
});

