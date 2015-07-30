describe('GiveTheGovernmentABurrito', function() {
   var $httpBackend, $rootScope, createController, authRequestHandler;

   // Set up the module
   beforeEach(module('jsCodingTest'));

   beforeEach(inject(function($injector) {
     // Set up the mock http service responses
     $httpBackend = $injector.get('$httpBackend');
     // backend definition common for all tests
     authRequestHandler = $httpBackend.when('GET')
                            .respond(200,{
           input:{name:"Burrito"},
           packages:[
            {name:"Burrito inc. 1", images:[{medium:"http://url1"}],vendor:{name:"Burrito1"}},
            {name:"Burrito inc. 1", images:[{medium:"http://url2"}],vendor:{name:"Burrito2"}}
            ]
         });

     // Get hold of a scope (i.e. the root scope)
     $rootScope = $injector.get('$rootScope');
     // The $controller service is used to create instances of controllers
     var $controller = $injector.get('$controller');

     createController = function() {
       return $controller('GiveTheGovernmentABurrito', {'$scope' : $rootScope });
     };
   }));


   afterEach(function() {
     $httpBackend.verifyNoOutstandingExpectation();
     $httpBackend.verifyNoOutstandingRequest();
   });


   it('should fetch the packages', function() {
     $httpBackend.expectGET();
     var controller = createController();
     $httpBackend.flush();
   });


   it('$scope.result should contain the result with the packages', function() {

     $httpBackend.expectGET();
     var controller = createController();
     $httpBackend.flush();
     expect($rootScope.result).not.toBe(undefined);
     expect($rootScope.result.packages).not.toBe(undefined);
     expect($rootScope.result.packages.length).toBe(2);
   });


});