module.exports = function(grunt) {

    grunt.initConfig({
        watch: {
            files: [
                '/vagrant/'
            ],
            tasks: ['rsync:dev']
        },
        rsync: {
        	dev: {
                options: {
                    src: "/vagrant/",
                    dest: "/home/vagrant",
                    recursive: true,
                    delete: true,
                    exclude: ["node_modules", ".*", "uploads", "public/bower_components"],
                    include: [".bowerrc"],
                    event: ['changed', 'added', 'deleted']             
                }
        	},
            host: {
                options: {
                    src: "/home/vagrant/",
                    dest: "/vagrant",
                    recursive: true,
                    delete: true,
                    exclude: ["node_modules", ".*", "uploads", "public/bower_components"],
                    include: [".bowerrc"],
                    event: ['changed', 'added', 'deleted']
                }
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-rsync");
    
    grunt.registerTask('default', ['rsync:dev']);
    grunt.registerTask('update-host', ['rsync:host']);
};