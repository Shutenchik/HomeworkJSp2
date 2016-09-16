module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
    js: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['js/dist/*.js'],
        dest: 'js/dist/script.js'
      }
    },
    css: {
    
        src: ['sass/screen.scss'],
        dest: 'sass/screen.scss'
        
      }
    },
    uglify: {
      dist: {
        src: ['js/dist/script.js'],
        dest: 'js/src/script.min.js'
      }
    },
    sass: {
      dist: {
        files: [{
         expand: true,
         cwd: 'sass',   // папка в которой мы сейчас находимся
         src: ['screen.scss'],
         dest: 'stylesheets', // папка в которой мы будем компилировать
         ext: 'screen.css'         // файл в котором будет всё скомпилировано
       }]
     }
   },
  watch: {
    sass: {
      // We watch and compile sass files as normal but don't live reload here
      files: ['sass/*.scss', 'js/dist/*.js'],
      tasks: ['sass', 'uglify']
    }
  }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['uglify', 'sass', 'concat']);

};
// Now that you've see