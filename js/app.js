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
			img: 'assets/headshots/Yeezy.jpg'
		},

		{
			name: 'Adam He',
			position: 'Co-President',
			img: 'assets/headshots/Yeezy.jpg'
		},

		{
			name: 'Curtis Wang',
			position: 'Wise Old Man',
			img: 'assets/headshots/Yeezy.jpg'
		},

		{
			name: 'Kevin Chen',
			img: 'assets/headshots/Yeezy.jpg'
		},

		{
			name: 'Kapil Garg',
			img: 'assets/headshots/Yeezy.jpg'
		},

		{
			name: 'Bryanna Yeh',
			img: 'assets/headshots/Yeezy.jpg'
		},

		{
			name: 'Chris Chen',
			img: 'assets/headshots/Chris.jpg'
		},

		{
			name: 'Kevin Wilde',
			img: 'assets/headshots/Kevin.jpg'
		},

		{
			name: 'Holliday Schuler',
			img: 'assets/headshots/Yeezy.jpg'
		},

		{
			name: 'Ricardo Rivas',
			img: 'assets/headshots/Yeezy.jpg'
		},

		{
			name: 'Larry Zhao',
			img: 'assets/headshots/Yeezy.jpg'
		}
	];
});