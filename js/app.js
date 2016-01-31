var ieeeApp = angular.module('ieeeApp', ['duScroll']);

ieeeApp.controller('HomeCtrl', function($scope) {
	$scope.test = 'This is a test.';

	$scope.menuOpen = false;

	$scope.toggleMenu = function() {
		$scope.menuOpen = !$scope.menuOpen;
	};

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