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
			name: 'William Xiao',
			position: 'President',
			img: 'assets/headshots/William.jpg'
		},

		{
			name: 'Holliday Schuler',
			position: 'Treasurer',
			img: 'assets/headshots/Holliday.jpg'
		},

		{
			name: 'Kushal Gourikrishna',
			position: 'Secretary',
			img: 'assets/headshots/Kush.jpg'
		},

		{
			name: 'Curtis Wang',
			position: 'Resident Elder',
			img: 'assets/headshots/Curtis.jpg'
		},

		{
			name: 'Kevin Chen',
			img: 'assets/headshots/Kevin_Chen.jpg'
		},

		{
			name: 'Kapil Garg',
			img: 'assets/headshots/Kapil.jpg'
		},

		{
			name: 'Ricardo Rivas',
			img: 'assets/headshots/Ricardo.jpg'
		},

		{
			name: 'Bryanna Yeh',
			img: 'assets/headshots/Bryanna.jpg'
		},

		{
			name: 'Chris Chen',
			img: 'assets/headshots/Chris.jpg'
		},

		{
			name: 'Adam He',
			img: 'assets/headshots/Adam.jpg'
		},

		{
			name: 'Kevin Wilde',
			img: 'assets/headshots/Kevin_Wilde.jpg'
		},

		{
			name: 'Larry Zhao',
			img: 'assets/headshots/Larry.jpg'
		}
	];
});

