angular.module('jsCodingTest', [
    // Add module dependencies here.
    'cpLib','ui.bootstrap'
]);

angular.module('jsCodingTest').controller('GiveTheGovernmentABurrito', function($scope,PackagesFactory) {
    $scope.myInterval = 5000;
    $scope.noWrapSlides = false;
    PackagesFactory.searchPackages('Burrito','SW1A%200AA')
    .success(function(data, status, headers, config) {
        $scope.result = data;      
    });
});
