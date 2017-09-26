var ieeeApp = angular.module('ieeeApp', ['duScroll', 'ngAnimate']);

ieeeApp.controller('HomeCtrl', ['$scope', '$http', function($scope, $http) {

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
			name: 'Conway Zhu',
			position: 'President',
			img: 'assets/headshots/Conway.JPG'
		},

		{
			name: 'William Su',
			position: 'External Vice President',
			img: 'assets/headshots/william_su.jpg'
		},

		{
			name: 'Jared Fernandez',
			position: 'Internal Vice President',
			img: 'assets/headshots/jared.jpg'
		},

		{
			name: 'Isaac Lee',
			position: 'Technical Program Director',
			img: 'assets/headshots/Isaac.JPG'
		},

		{
			name: 'Murphy Angelo',
			position: 'Hack Night Coordinator',
			img: 'assets/headshots/Murphy.JPG'
		},

		{
			name: 'Shankar Salwan',
			position: 'Treasurer',
			img: 'assets/headshots/Shankar.JPG'
		},

		{
			name: 'Sanfeng Wang',
			position: 'Webmaster',
			img: 'assets/headshots/Sanfeng.JPG'
		},

		{
			name: 'Will Ehrich',
			position: 'Social Director',
			img: 'assets/headshots/william_ehrich.JPG'
		},

		{
			name: 'Jessica Li',
			position: 'Publicity Chair',
			img: 'assets/headshots/Jessica.JPG'
		},

		{
			name: 'Chris Chen',
			position: 'Legacy Adviser',
			img: 'assets/headshots/chris.jpg'
		},

		{
			name: 'Curtis Wang',
			position: 'Graduate Adviser',
			img: 'assets/headshots/curtis.jpg'
		}

	];

	$scope.pm = [
		{
			name: 'Conway Zhu',
			position: 'Web Development',
			img: 'assets/headshots/Conway.JPG'
		},

		{
			name: 'Shankar Salwan',
			position: 'Web Development',
			img: 'assets/headshots/Shankar.JPG'
		},

		{
			name: 'Sanfeng Wang',
			position: 'Web Development',
			img: 'assets/headshots/Sanfeng.JPG'
		},

		{
			name: 'Kevin Lee',
			position: 'Web Development',
			img: 'assets/headshots/chris.jpg'
		},

		{
			name: 'William Su',
			position: 'Hardware',
			img: 'assets/headshots/william_su.jpg'
		},

		{
			name: 'Curtis Wang',
			position: 'Hardware',
			img: 'assets/headshots/curtis.jpg'
		},

		{
			name: 'Jessica Li',
			position: 'Hardware',
			img: 'assets/headshots/Jessica.JPG'
		},

		{
			name: 'Jared Fernandez',
			position: 'Machine Learning/NLP',
			img: 'assets/headshots/jared.jpg'
		},

		{
			name: 'Isaac Lee',
			position: 'Chatbot',
			img: 'assets/headshots/Isaac.JPG'
		},

		{
			name: 'Larry Zhao',
			position: 'Game Development',
			img: 'assets/headshots/Larry.JPG'
		},

	];
}]);

