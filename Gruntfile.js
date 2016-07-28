module.exports = function (grunt) {
    var sassFiles = { './dist/css/style.css': './app/scss/main.scss' };

   grunt.initConfig({
      browserify: {
         dist: {
            options: {
               transform: [
                   ['babelify', { presets: ['es2015', 'react'] }]
               ]
            },
            files: {
               './dist/js/app.js': ['./app/app.js']
            }
         }
      },
      sass: {
        dist: {
            options: {
                sourcemap: 'none',
                style: 'compressed'
            },
            files: sassFiles
        },
        dev: {
            options: {
                sourcemap: 'auto',
                style: 'expanded'
            },
            files: sassFiles
        }
      },
      copy: {
        dist: {
            files: [
                {expand: true, cwd: 'app', src: ['index.html'], dest: 'dist/'}
            ]
        }
      },
      imagemin: {
          dist: {
              files: [{
                  expand: true,
                  cwd: 'app/img/',
                  src: ['**/*.{png,jpg,svg}'],
                  dest: 'dist/img/'
              }]
          }
      },
      watch: {
        scripts: {
            files: ['app/**/*.js', 'app/**/*.json'],
            tasks: ['browserify']
        },
        styles: {
            files: ['app/scss/**/*.scss'],
            tasks: ['sass']
        }
      }
   });

   grunt.loadNpmTasks('grunt-browserify');
   grunt.loadNpmTasks('grunt-contrib-sass');
   grunt.loadNpmTasks('grunt-contrib-copy');
   grunt.loadNpmTasks('grunt-contrib-imagemin');
   grunt.loadNpmTasks('grunt-contrib-watch');

   grunt.registerTask('default', ['watch']);
   grunt.registerTask('dev', ['browserify', 'sass:dev', 'copy', 'imagemin', 'watch']);
   grunt.registerTask('prod', ['browserify', 'sass:dist', 'copy']);
};
