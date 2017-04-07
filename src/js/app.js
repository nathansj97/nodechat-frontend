angular.module('nodechat', ['ngRoute', 'luegg.directives'])
    .config(['$routeProvider', '$locationProvider',
        function($routeProvider, $locationProvider){
            $locationProvider.html5Mode(true);
            $routeProvider.
                when('/home', {
                    templateUrl: 'home.tpl.html',
                    controller: 'homeCtrl',
                    controllerAs: 'ctrl',
                    css: '/views/css/home.css'
                }).
                when('/', {
                    templateUrl: 'login.tpl.html',
                    controller: 'loginCtrl',
                    controllerAs: 'ctrl',
                    css: '/views/css/login.css'
                }).
                when('/chat/:username', {
                    templateUrl: 'chat.tpl.html',
                    controller: 'chatCtrl',
                    controllerAs: 'ctrl',
                    css: '/views/css/chat.css'
                }).
                when('/inbox', {
                    templateUrl: 'inbox.tpl.html',
                    controller: 'inboxCtrl',
                    controllerAs: 'ctrl',
                    css: '/views/css/inbox.css'
                }).
                when('/recent', {
                    templateUrl: 'recent.tpl.html',
                    controller: 'recentCtrl',
                    controllerAs: 'ctrl',
                    css: '/views/css/recent.css'
                }).
                when('/search', {
                    templateUrl: 'search.tpl.html',
                    controller: 'searchCtrl',
                    controllerAs: 'ctrl',
                    css: '/views/css/search.css'
                });
    }]);