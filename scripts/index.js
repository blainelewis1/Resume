//TODO: Maybe add the ability to do skills
var resume = angular.module('Resume', [])
.controller('Controller', function ($scope) {

  $scope.preloaded = window.location.hash.substr(1);

  if($scope.preloaded) {
      $scope.preloaded = parseInt($scope.preloaded);
      if(!isNaN($scope.preloaded)) {
          var preloaded_values = [];
          var i = 0;
          experiences.reverse();
          do {
              if($scope.preloaded & 1) {
                  preloaded_values.push(experiences[i]);
              }

              i++;
          } while((($scope.preloaded = $scope.preloaded >> 1)));

          experiences = preloaded_values;
          experiences.reverse();
      } else {
          //TODO: test if the value is a preset eg. "Program Manager", and just use that
          if(window.location.hash.substr(1)) {

          }
      }

      $scope.preloaded = true;
  }

  $scope.enabled = [];
  $scope.link = link;
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
        var val;

        if(presetUnset) {
            val = !clicked;
        } else {
            var allowed = (item.presets && item.presets.indexOf($scope.presetValue) !== -1);

            if(allowed) {
                val = !clicked;
            } else {
                val = clicked;
            }
        }

        $scope.$parent.enabled[$scope.$index] = val;

        return val;
    };
}]);

function link($scope) {
    var val = 0;
    for(var i = 0; i < $scope.enabled.length; i++) {
        val += $scope.enabled[i] ? Math.pow(2, $scope.enabled.length - i - 1) : 0;
    }

    return window.location.href.split("#")[0] + "#" + val;
}
