angular.module('app').controller('mvMainCtrl', function($scope){
            $scope.sports = [
                 {name: 'Cricket', featured: true },
                 {name: 'Hockey', featured: true },
                 {name: 'Baseball', featured: true },
                 {name: 'Football', featured: true },
                 {name: 'Tennis', featured: true },
                 {name: 'Badminton', featured: true },
                 {name: 'Golf', featured: true },
                 {name: 'TT', featured: true }

            ];
            $scope.destinations = [
                 {name: 'New York'},
                 {name: 'Mumbai'},
                 {name: 'London'},
                 {name: 'Paris'}

            ];
     });
