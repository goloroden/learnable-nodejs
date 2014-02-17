var socket = io.connect();

var AppController = function ($scope) {
  $scope.mappings = [];

  $scope.addMapping = function () {
    var alias = $scope.alias,
        url = $scope.url;

    socket.emit('addMapping', { alias: alias, url: url });
  };

  socket.on('list', function (documents) {
    $scope.$apply(function () {
      $scope.mappings = documents;
    });
  });

  socket.on('newMapping', function (mapping) {
    $scope.$apply(function () {
      $scope.mappings.push(mapping);
    });
  });
};
