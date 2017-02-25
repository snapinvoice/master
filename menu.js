var app = angular.module('menu', []);

app.controller('menuCtrl', [ '$scope', '$location', function($scope, $location) {
    $scope.dashTitle = {
        name: "SnapInvoice",
        link: "#"
    };

    var host = function (url){
        return $location.$$protocol + '://' + $location.$$host + "/features/" + url + "/index.html";
    }

    $scope.menu = [
    {
        id: "dashboard",
        name: "Dashboard",
        link: host("home")
    },
    {
        id: "fatture",
        name: "Fatturazione",
        link: "#",
        rows:[
            {
                id: "new-fattura",
                name: "Nuova Fattura",
                link: "scadenzario/create.html"
            },
            {
                id: "list-fattura",
                name: "Nuova Fattura",
                link: "scadenzario/list.html"
            }
        ]
    },
    {
        id: "clienti",
        name: "Clienti",
        link: host("anagrafica")
    },
    {
        id: "profilo",
        name: "Profilo",
        link: "#"
    },
    {
        id: "logout",
        name: "Esci",
        link: "logout/logout.html"
    },
];

}]);