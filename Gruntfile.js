module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		concat: {
			dist: {
				src: [
					// 'bower_components/**/*.min.js',
					'bower_components/angular/angular.min.js',
					'bower_components/angular-animate/angular-animate.min.js',
					'bower_components/angular-aria/angular-aria.min.js',
					'bower_components/angular-scroll/angular-scroll.min.js',
					'bower_components/jquery/dist/jquery.min.js',
					'bower_components/bootstrap/dist/bootstrap.min.js',
					'js/app.js'
				],
				dest: 'dist/<%= pkg.name %>.js'
			}
		},

		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
			},

			dist: {
				files: {
					'dist/scripts.js': ['<%= concat.dist.dest %>']
				}
			}
		},

		jshint: {
			files: ['Gruntfile.js', 'app.js']
		},

		watch: {
			files: ['<%= jshint.files %>'],
			tasks: ['jshint']
		},

		cssmin: {
			target: {
				files: {
					'dist/styles.css': ['bower_components/bootstrap/dist/css/bootstrap.min.css', 'custom.css']
				}
			}
		},

		imagemin: {
			dynamic: {
				files: [{
					expand: true,
					cwd: 'assets/',
					src: ['**/*.{png,jpg}'],
					dest: 'dist/assets/'
				}]
			}
		},

		copy: {
			main: {
				files: [
					{expand: true, src: 'js/hamburger.js', dest: 'dist/'},
					{expand: true, src: 'favicon.ico', dest: 'dist/'},
					{expand: true, src: 'index.html', dest: 'dist/'},
					{expand: true, src: 'assets/**', dest: 'dist/'}
				]
			}
		},

		processhtml: {
			dist: {
				files: {
					'dist/index.html': ['index.html']
				}
			}
		},

		clean: ['dist/<%= pkg.name %>.js']
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-processhtml');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-imagemin');

	grunt.registerTask('test', ['jshint']);
	grunt.registerTask('default', ['jshint', 'cssmin', 'concat', 'uglify', 'imagemin', 'copy', 'processhtml', 'clean']);
};