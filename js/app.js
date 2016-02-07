var ieeeApp = angular.module('ieeeApp', ['duScroll', 'ngAnimate']);

ieeeApp.controller('HomeCtrl', function($scope, $http) {

	$scope.menuOpen = false;

	$scope.toggleMenu = function() {
		$scope.menuOpen = !$scope.menuOpen;
	};

	$scope.events = [];

	var today = new Date();
	var timeMin = String(today.getFullYear() - 1) + '-' + String(today.getMonth()+1) + '-' + String(today.getDate()) + 'T00:00:00-06:00';
	var url = 'https://www.googleapis.com/calendar/v3/calendars/ieee@u.northwestern.edu/events?key=AIzaSyDJ41XTLp-sCzITSfKSHkUS_PpCGhczOIU&singleEvents=true&orderBy=startTime&timeMin=' + timeMin;
	$http.get(url).then(function successCallback(response) {
	    for (var i = 0; i < response.data.items.length; i++) {

	    	// Link to facebook event should be first thing in Google calendar description
	    	var description = response.data.items[i].description;
	    	if (description) {
	    		var a = description.split();
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
	    	$scope.events.push(response.data.items[i]);
	    }
	  }, function errorCallback(response) {
	    console.log('Error');
	    console.log(response.data.error.errors);
	  });

	$scope.exec = [
		{
			name: 'William Xiao',
			position: 'Supreme Overlord',
			img: 'assets/headshots/William.jpg'
		},

		{
			name: 'Kushal Gourikrishna',
			position: 'Co-President',
			img: 'assets/headshots/Kush.jpg'
		},

		{
			name: 'Adam He',
			position: 'Co-President',
			img: 'assets/headshots/Adam.jpg'
		},

		{
			name: 'Curtis Wang',
			position: 'Wise Old Man',
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
			name: 'Bryanna Yeh',
			img: 'assets/headshots/Bryanna.jpg'
		},

		{
			name: 'Chris Chen',
			img: 'assets/headshots/Chris.jpg'
		},

		{
			name: 'Kevin Wilde',
			img: 'assets/headshots/Kevin_Wilde.jpg'
		},

		{
			name: 'Holliday Schuler',
			img: 'assets/headshots/Holliday.jpg'
		},

		{
			name: 'Ricardo Rivas',
			img: 'assets/headshots/Ricardo.jpg'
		},

		{
			name: 'Larry Zhao',
			img: 'assets/headshots/Yeezy.jpg'
		}
	];
});

