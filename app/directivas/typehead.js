'use strict';

angular.module('kcc.directivas',[])
.factory('elasticFactory', function(esFactory,configuration) {
        return esFactory({ host: configuration.servidorBackEnd })
    })
    .directive('typeahead', function(elasticFactory,$timeout) {

        return {
            restrict: 'AEC',
            scope: {
                items: '=',
                prompt:'@',
                nombre: '@',
                cargo:'@',
                codigo:'=',
              model: '=',
                onSelect:'&'
            },
            link:function(scope,elem,attrs){

                scope.handleSelection=function(selectedItem,nombreItem){



                    scope.current=0;
                    scope.selected=true;
                    scope.codigo=selectedItem
                    scope.model = nombreItem
                    
                    
                    $timeout(function(){

                        scope.onSelect(selectedItem);

                    },200);
                };
                scope.current=0;
                scope.selected=true;
                scope.isCurrent=function(index){

                    return scope.current==index;
                };
                scope.autocomplete =function(index)
                {

if (scope.model !=undefined)
                    if (scope.model.length > 2)
                    elasticFactory.search(
                        {
                            index: 'kcc',
                            size: 15,
                            body: {
                                "fields" : ["nombre", "cargo","email"],
                                "query": {

                                    "multi_match": {
                                        "query" : scope.model,
                                        "fields" : [ "nombre^2", "cargo" ]
                                    }
                                }
                            }

                        }).then(function (response) {
                            scope.items = response.hits.hits;
                        }
                    )


                }
                scope.setCurrent=function(index){

                    scope.current=index;
                };
            },
            templateUrl: 'includes/autocomplete.html'
        }
    });