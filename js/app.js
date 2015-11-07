var ieeeApp = angular.module('ieeeApp', ['angular-scroll-animate']);

ieeeApp.controller('HomeCtrl', function($scope) {
	$scope.test = 'This is a test.';

	$scope.menuOpen = false;

	$scope.toggleMenu = function() {
		$scope.menuOpen = !$scope.menuOpen;
	};

	//Animation
	$scope.animateElementIn = function($el) {
		$el.removeClass('hidden');
  		$el.addClass('animated fadeIn'); // this example leverages animate.css classes 
	};

	$scope.exec = [
		{
			name: 'William Xiao',
			position: 'Supreme Overlord',
			img: 'assets/William.jpg'
		},

		{
			name: 'Kushal Gourikrishna',
			position: 'Co-President',
			img: 'assets/Yeezy.jpg'
		},

		{
			name: 'Adam He',
			position: 'Co-President',
			img: 'assets/Yeezy.jpg'
		},

		{
			name: 'Curtis Wang',
			position: 'Wise Old Man',
			img: 'assets/Chris.jpg'
		},

		{
			name: 'Kevin Chen',
			img: 'assets/Yeezy.jpg'
		},

		{
			name: 'Kapil Garg',
			img: 'assets/Yeezy.jpg'
		},

		{
			name: 'Bryanna Yeh',
			img: 'assets/Yeezy.jpg'
		},

		{
			name: 'Chris Chen',
			img: 'assets/Chris.jpg'
		},

		{
			name: 'Kevin Wilde',
			img: 'assets/Kevin.jpg'
		},

		{
			name: 'Holliday Schuler',
			img: 'assets/Yeezy.jpg'
		},

		{
			name: 'Ricardo Rivas',
			img: 'assets/Yeezy.jpg'
		},

		{
			name: 'Larry Zhao',
			img: 'assets/Yeezy.jpg'
		}
	];
});