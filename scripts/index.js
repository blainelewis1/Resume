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
    return function(item, $scope) {
        /*
        Case 1: No presets, nothing clicked     = not dimmed
        Case 2: No preset, clicked              = dimmed
        Case 3: Preset, not clicked             = not dimmed
        Case 4: Preset, clicked                 = dimmed
        Case 5: Preset (unallowed), not clicked = dimmed
        Case 6: Preset (unallowed), clicked     = not dimmed
        */

        var presetUnset = !$scope.presetValue || !$scope.presetValue.trim();
        var clicked = $scope.clicked;

        if($scope.presetValue !== $scope.prevValue) {
            clicked = false;
            $scope.clicked = false;
        }

        $scope.prevValue = $scope.presetValue;

        if(presetUnset) {
            return !clicked;
        } else {
            var allowed = (item.presets && item.presets.indexOf($scope.presetValue) !== -1);

            if(allowed) {
                return !clicked;
            } else {
                return clicked;
            }
        }
    };
}]);
