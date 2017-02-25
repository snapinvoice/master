var app = angular.module('anagrafica', []);

app.controller('anagraficaCtrl', [ '$scope', function($scope) {

    $scope.clienti = [
        {
            idAnagrafica: 1,
            RagSoc: "Cliente Demo",
            CodFis: "CLIENTEDEMO", 
            Telefono: "021256789"
        },
        {
            idAnagrafica: 2,
            RagSoc: "Cliente Demo",
            CodFis: "CLIENTEDEMO2", 
            Telefono: "021256789"
        }
    ];

}]);