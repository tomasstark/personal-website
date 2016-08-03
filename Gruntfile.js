module.exports = function (grunt) {
    var sassFiles = { './public/stylesheets/style.css': './public/stylesheets/scss/main.scss' };

   grunt.initConfig({
      browserify: {
         dist: {
            options: {
               transform: [
                   ['babelify', { presets: ['es2015', 'react'] }]
               ]
            },
            files: {
               './public/javascripts/app.bundle.js': ['./react/app.js']
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
      imagemin: {
          dist: {
              files: [{
                  expand: true,
                  cwd: 'public/images/',
                  src: ['**/*.{png,jpg,svg}'],
                  dest: 'public/images/'
              }]
          }
      },
      watch: {
        scripts: {
            files: ['react/**/*.js', 'public/data/**/*.json'],
            tasks: ['browserify']
        },
        styles: {
            files: ['public/stylesheets/scss/**/*.scss'],
            tasks: ['sass']
        }
      }
   });

   grunt.loadNpmTasks('grunt-browserify');
   grunt.loadNpmTasks('grunt-contrib-sass');
   grunt.loadNpmTasks('grunt-contrib-imagemin');
   grunt.loadNpmTasks('grunt-contrib-watch');

   grunt.registerTask('default', ['watch']);
   grunt.registerTask('dev', ['browserify', 'sass:dev', 'imagemin', 'watch']);
   grunt.registerTask('prod', ['browserify', 'sass:dist']);
};
