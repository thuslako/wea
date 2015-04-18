require.config({
    baseUrl: "/ApplicationName/Public/js",
    waitSeconds: 200,
    paths: {
        'angular': 'vendor/angular/angular.min',
        'jquery': 'vendor/jquery/jquery.min',
        'moment': 'vendor/momentjs/min/moment.min',
        'respond': 'vendor/respond/dest/respond.src',
        'domReady': 'vendor/requirejs-domready/domReady',
        'bootstrap': 'vendor/bootstrap/dist/js/bootstrap.min',
        
        'angular.animate': 'vendor/angular-animate/angular-animate.min',
        'angular.cookies': 'vendor/angular-cookies/angular-cookies.min',
        'angular.resource': 'vendor/angular-resource/angular-resource.min',
        'angular.route': 'vendor/angular-route/angular-route.min',
        'angular.sanitize': 'vendor/angular-sanitize/angular-sanitize.min',
        'angular-touch': 'vendor/angular-touch/angular-touch.min',
        'uiBootstrap': 'vendor/angular-ui-bootstrap-bower/ui-bootstrap.min',
        'uiBootstrapTpl':'vendor/angular-ui-bootstrap-bower/ui-bootstrap-tpls.min'
    },
    shim: {
        'moment': {
            exports: 'moment'
        },
        'angular': {
            deps: ['jquery', 'moment'],
            exports: 'angular'
        },
        'respond': {
            exports: 'respond'
        },

        'bootstrap': {
            deps: ['jquery'],
            exports: 'bootstrap'
        },
        
        'angular.animate': ['angular'],
        'angular.cookies': ['angular'],
        'angular.resource': ['angular'],
        'angular.route': ['angular'],
        'angular.sanitize': ['angular'],
        'angular-touch': ['angular'],
        'uiBootstrap': { deps: ['angular', 'bootstrap'], exports: 'uiBootstrap' },
        'uiBootstrapTpl': { deps: ['angular', 'uiBootstrap'] }
    },
    urlArgs: "bust=" + (new Date()).getTime()
    //urlArgs: "bust=v4"
});