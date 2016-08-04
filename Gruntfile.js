module.exports = function (grunt) {
    var sassFiles = { './public/stylesheets/style.css': './public/stylesheets/scss/main.scss' };

    grunt.initConfig({
        env: {
            dev: {
                NODE_ENV: 'development'
            },
            prod: {
                NODE_ENV: 'production'
            }
        },
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
       uglify: {
           dist: {
               files: {
                   './public/javascripts/app.bundle.js': ['./public/javascripts/app.bundle.js']
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
              options: {
                  optimizationLevel: 4
              },
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
            files: ['react/**/*.js', 'react/data/**/*.json'],
            tasks: ['browserify']
        },
        styles: {
            files: ['public/stylesheets/scss/**/*.scss'],
            tasks: ['sass']
        }
      }
   });

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-env');
    grunt.loadNpmTasks('grunt-contrib-uglify');
   grunt.loadNpmTasks('grunt-contrib-sass');
   grunt.loadNpmTasks('grunt-contrib-imagemin');
   grunt.loadNpmTasks('grunt-contrib-watch');

   grunt.registerTask('default', ['watch']);
    grunt.registerTask('dev', ['env:dev', 'browserify', 'sass:dev', 'imagemin', 'watch']);
    grunt.registerTask('prod', ['env:prod', 'browserify', 'uglify', 'sass:dist']);
};
