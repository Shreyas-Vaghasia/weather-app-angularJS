var crudApp = angular.module('crudApp', []);


crudApp.controller("crudController", ($scope) => {

    $scope.users = [
        { id: 1, name: "John", email: "john@gmail.com" },
        { id: 2, name: "Danial", email: "danial" },
        { id: 3, name: "John", email: "test" },
        { id: 4, name: "John", email: "test" },
        { id: 5, name: "John", email: "test" },

    ]

    $scope.addUser = () => {
        $scope.users.push({
            id: $scope.users.length + 1,
            name: $scope.user.name,
            email: $scope.user.email
        })
        $scope.user = {}
        $scope.userForm.$setPristine()
    }
    $scope.deleteUser = (userId) => {
        $scope.users = $scope.users.filter((user) => user.id !== userId)
    }
    $scope.editUser = (userId) => {
        $scope.user = $scope.users.find((user) => user.id === userId)

    }
    $scope.updateUser = () => {
        $scope.user = {}
    }
    $scope.clearUser = () => {
        $scope.user = {}
    }



    console.log($scope)
})