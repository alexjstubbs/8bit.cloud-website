module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        less: {
          development: {
            options: {
              compress: true,
              yuicompress: true,
              optimization: 2
            },
            files: {
              "css/style.css": "less/style.less"
            }
          }
        },
        watch: {
          styles: {
            files: ['less/*.less'], // which files to watch
            tasks: ['less'],
            options: {
              nospawn: true
            }
          },
          react: {
                files: ['js/main.js'],
                tasks: ['browserify']
            },
        },

        browserify: {
                client: {
                    src: ['js/**/main.js'],
                    dest: 'js/site.build.js'
                },

            }

        });

        grunt.loadNpmTasks('grunt-browserify');

        grunt.loadNpmTasks('grunt-contrib-less');
        grunt.loadNpmTasks('grunt-contrib-watch');

        grunt.registerTask('default', ['watch']);


};