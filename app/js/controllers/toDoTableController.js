angular
  .module("trainingRecordsApp", [])
  .controller("toDoTableController", ($scope) => {
    $scope.workoutStyles = {
      actionWrapper: {
        display: "flex",
      },
      actionButton: {
        width: "100%",
        height: "100%",
      },
      userAction: {
        display: "flex",
        justifyContent: "space-around",
      },
    };

    $scope.tableWorkout = [];

    $scope.today = "";
    $scope.getDistance = "";

    $scope.addItem = () => {
      if ($scope.today && $scope.getDistance) {
        $scope.tableWorkout.push({
          date: $scope.today,
          distance: $scope.getDistance,
        });

        $scope.today = "";
        $scope.getDistance = "";
      } else {
      }
    };

    $scope.removeItem = (idx) => {
      $scope.tableWorkout.splice(idx, 1);
    };

    $scope.showPropsItem = (idx) => {
      const currentLine = $scope.tableWorkout[idx];
      const { date, distance } = currentLine;

      $scope.today = date;
      $scope.getDistance = distance;
    };

    $scope.updateItem = (idx) => {
      if ($scope.today && $scope.getDistance) {
        $scope.tableWorkout[idx].date = $scope.today;
        $scope.tableWorkout[idx].distance = $scope.getDistance;

        $scope.today = "";
        $scope.getDistance = "";
      } else {
      }
    };
  });
