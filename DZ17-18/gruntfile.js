module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
    js: {
        options: {
        separator: ';'
      },
        src: ['src/*.js'],
        dest: 'dist/js/script1.min.js',
    },
    css: {
      options: {
        separator: ';'
      },
         src: ['css/src/*.css'],
         dest: 'dist/css/style.min.js'
      }
    },
    uglify: {
    js: { 
          src: ['dist/js/script1.min.js'],
          dest: 'dist/js/script1.min.js'
      }
    },
    cssmin: {
        css: {
          src: ['dist/css/style.min.js'],
          dest: 'dist/css/style.min.js'
      }
   }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

 grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);
};


