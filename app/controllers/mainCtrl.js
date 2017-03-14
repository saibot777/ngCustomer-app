/**
 * Created by stefan.trajkovic on 14.3.2017..
 */
(function () {
    "use strict"

    angular.module('customersApp')
        .controller('mainCtrl' ,function ($scope) {
            $scope.sortBy = 'name';
            $scope.reverse = 'false';

            $scope.customers=[
                {joined: '2000-12-02', name: 'Stefan', city: 'Beograd', orderTotal: 9.9994},
                {joined: '2011-10-02', name: 'Sladjana', city: 'Smederevo', orderTotal: 8.4994},
                {joined: '2007-11-02', name: 'Jovan', city: 'Smederevo', orderTotal: 7.7994}
            ]
            $scope.doSort = function(propName) {
                $scope.sortBy = propName;
                $scope.reverse = !$scope.reverse;
            };

        });
}());

