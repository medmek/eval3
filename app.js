

var myApp = angular.module('myApp',['ngRoute']);

myApp.controller('ProjetsCtrl',function($scope,$http,$rootScope){
	$rootScope.title = "Tableau de Bord";
	$http.get('listerProjetsTab').success(function(data){
		$scope.projets=data;
	});
	});
myApp.controller('MainCtrl', function($rootScope){
    //code

});

myApp.controller('AccueilCtrl', function($rootScope){
    $rootScope.title = "Accueil";
    
});

/*myApp.controller('ProjetsCtrl', function($rootScope){
    $rootScope.title = "Tableau de Bord";
    
});*/

myApp.controller('AjoutCtrl', function($rootScope){
    $rootScope.title = "Import de Projet";
    
});

myApp.controller('AfficheCtrl', function($rootScope,$scope,$http,$routeParams){
	$rootScope.Id=$routeParams.projetId;
    $rootScope.title = "projet "+$scope.Id;
    $scope.Id=$rootScope.Id;
    $http.get('folder?id='+$scope.Id).success(function(data){
		$scope.reports=data;
	});
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

	}).when('/projets/:projetId', {
		templateUrl : 'project/afficheProjet.html',
		controller  : 'AfficheCtrl'

})
	.when('/profil', {
						templateUrl : 'profil.html',
                		controller  : 'ProjetsCtrl'

	})
	.otherwise({redirectTo: '/'});
});