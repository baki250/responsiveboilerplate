/*!
 * @ Package for Responsive Boilerplate Micro Framework @!!!!!
 */

module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> v<%= pkg.version %>, <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'js/custom.js',
        dest: 'js/custom.min.js'
      }
    },
    jshint: {
      options: {
        browser: true,
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      },
      all: {
        files: {
          src: ['gruntfile.js', 'js/custom.js']
        }
      }
    },
    concat: {
      options: {
      },
      dist: {
        src: [
          'src/rb-menu.min.js',
          'src/rb-tab.min.js',
          'src/rb-accodion.min.js',
          'src/rb-modal.min.js'
        ],
        dest: 'js/rb-ui.js'
      }
    },
    less: {
      development: {
        options: {
          paths: ['less'],
          yuicompress: false
        },
        files: {
          'css/responsiveboilerplate.css':'less/responsiveboilerplate.less'
        }
      }
    },
    cssmin: {
      options: {
        banner: '/*! <%= pkg.name %> v<%= pkg.version %>, <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      compress: {
        files: {
          'css/responsiveboilerplate.min.css': ['css/responsiveboilerplate.css']
        }
      }
    },
    watch: {
      scripts: {
        files: ['Gruntfile.js', 'js/**/*.js', 'libs/**/*.js', 'css/**/*.css'],
        tasks: ['jshint','concat','uglify'],
        options: {
          debounceDelay: 250
        }
      },
      less: {
        files: 'less/**/*.less',
        tasks: ['less','cssmin'],
        options: {
          debounceDelay: 250
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['jshint','concat','uglify','less','cssmin','watch']);

};
