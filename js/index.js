var resume = angular.module('Resume', []);

resume.controller('Controller', function ($scope) {
  $scope.info = info;
  $scope.skills = skills;
  $scope.experiences = experiences;
  $scope.educations = educations;
});

resume.filter('trustAsHtml', ['$sce', function($sce){
        return function(text) {
            return $sce.trustAsHtml(text);
        };
    }]);

function applyFilter(filterName) {
  if(filterName){
    var ids = premades[filterName];
    $("#experience").children().deactivate();
    for(var i = 0; i < ids.length; i++){
      $("#" + ids[i]).activate();
    }
  } else {
    $("#experience").children().activate();
  }
}

$.fn.activate = function() {
  this.removeClass("no-print");
  this.find("h3").removeClass("dim");
  this.find("div").show();
  this.find("h4").show();
  this.find("ul").show();
  return this;
};

$.fn.deactivate = function() {
  this.addClass("no-print");
  this.find("h3").addClass("dim");
  this.find("div").hide();
  this.find("h4").hide();
  this.find("ul").hide();
  return this;
};

function toggleIt() {
  var obj = $(this);
  obj.toggleClass("no-print");
  obj.find("h3").toggleClass("dim");
  obj.find("div").toggle();
  obj.find("h4").toggle();
  obj.find("ul").toggle();
}

function highlight() {
  $(this).toggleClass("highlighted");
}

$(function() {
  $("#experience").children("div").click(toggleIt).hover(highlight);
});
