module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        files: {
          'css/style.css' : 'sass/style.scss'
        }
      }
    },
    watch: {
      css: {
        files: 'sass/**/*.scss',
        tasks: ['sass']
      }
    },
    browserSync: {
      dev: {
        bsFiles: {
          src: ['css/*.css', '**/*.php']
        },
        options: {
          watchTask: true,
          proxy: 'localhost:8888'
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.registerTask('default',['browserSync', 'watch']);
};
