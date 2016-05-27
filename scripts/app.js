

var myApp = angular.module('myApp',['ngRoute']);

myApp.controller('MainCtrl', function($rootScope){
    //code
     $rootScope.title = "Accueil";

});

myApp.controller('AccueilCtrl', function($rootScope){
    $rootScope.title = "Accueil";
    
});

myApp.controller('ProjetsCtrl', function($rootScope){
    $rootScope.title = "Tableau de Bord";
    
});

myApp.controller('AjoutCtrl', function($rootScope){
    $rootScope.title = "Import de Projet";
    
});

myApp.config( function( $routeProvider ) {
	$routeProvider
	.when('/', {
                templateUrl : 'accueil.html',
                controller  : 'AccueilCtrl'
    })
	.when('/projets', {
						templateUrl : 'projets.html',
                		controller  : 'ProjetsCtrl'

	})
	.when('/projets/ajout', {
						templateUrl : 'projets_ajout.html',
                		controller  : 'AjoutCtrl'

	})
	.when('/profil', {
						templateUrl : 'profil.html',
                		controller  : 'ProjetsCtrl'

	})
	.otherwise({redirectTo: '/'});
});