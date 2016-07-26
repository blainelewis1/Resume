var resume = angular.module('Resume', [])
.controller('Controller', function ($scope) {
  $scope.contact = contact;
  $scope.skills = skills;
  $scope.experiences = experiences;
  $scope.educations = educations;
  $scope.presets = presets;
})
.filter('trustAsHtml', ['$sce', function($sce){
    return function(text) {
        return $sce.trustAsHtml(text);
    };
}])
.filter('preset', [function(){
    return function(item, $scope, dimmed) {
        return dimmed || !$scope.presetValue || !($scope.presetValue.trim()) || (item.presets && item.presets.indexOf($scope.presetValue) !== -1);
    };
}]);
