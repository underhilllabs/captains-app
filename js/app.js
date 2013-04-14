app = angular.module('CptnCounter',["ngResource"]);
this.CaptainCtrl = function ($scope, $http) {
  $scope.getCaptains = function() {
    $http({
      method: 'JSONP',
      url: 'http://m.bkmark.me\:8080/api/captains?callback=JSON_CALLBACK'
    }).
    success(function(data) {
      $scope.captains = data.captains;
      $scope.error = '';
    }).
    error(function(data, status) {
      $scope.error = 'Error: ' + status;
      console.log($scope.error);
      console.log(data);
    });
  };
  $scope.getCaptains();
  //Captain = $resource('/captains/:id',{id: "this.id"});
  //$scope.captains = Captain.query();
  //$scope.captains = [
  //  {"name": "Jean-Luc Picard", "image": "img/picard.jpg", "source": "Star Trek: TNG", "votes": 0, index: 0}
  //  , {"name": "James Tiberius Kirk","image": "img/kirk.jpg", "source": "Star Trek: TOS", "votes": 0, index: 1}
  //  , {"name": "Kathryn Janeway", "image": "img/janeway.jpg", "source": "Star Trek Voyager ", "votes": 0, index: 2}
  //  , {"name": "Hikaru Sulu", "image": "img/sulu.jpg", "source": "Star Trek Movies", "votes": 6, index: 3}
  //  , {"name": "Mal Reynolds","image": "img/mal.jpg", "source": "Firefly", "votes": 4, index: 4}
  //  , {"name": "Worf, Son of Mogh","image": "img/worf.jpg", "source": "Star Trek: DSN", "votes": 0, index: 5}
  //  , {"name": "Benjamin Sisko","image": "img/sisko.jpg", "source": "Star Trek: DSN", "votes": 0, index: 6}
  //  , {"name": "Han Solo","image": "img/solo.jpg", "source": "Star Wars", "votes": 0, index: 7}
  //];

  $scope.inc = function(idx) {
    console.log("index is " + idx + " int is " + parseInt(idx));
    $scope.captains[parseInt(idx)].votes += 1;
  }
  $scope.addCaptain = function() {
    //cptn = Captain.save({"name": $scope.cptName,"image": $scope.cptUrl, "source": $scope.cptSource, "votes": 1, index: $scope.captains.length});
    //$scope.captains.push(cptn);
    $scope.captains.push({"name": $scope.cptName,"image": $scope.cptUrl, "source": $scope.cptSource, "votes": 1, index: $scope.captains.length});
    $scope.cptName = "";
    $scope.cptUrl = "";
    $scope.cptSource = "";
  }
};

