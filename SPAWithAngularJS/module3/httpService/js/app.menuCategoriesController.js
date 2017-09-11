// app.menuCategoriesController.js

(function() {
  "use strict";

  angular.module("MenuCategoriesApp")
    .controller("MenuCategoriesController", MenuCategoriesController);

  MenuCategoriesController.$inject = ["GitHubDataService"];

  function MenuCategoriesController(GitHubDataService) {
    let vm = this;

    vm.getRepos = getRepos;

    function getRepos(userName) {
      vm.userName = GitHubDataService.getUserName(userName);

      if (!vm.userName) {
        return;
      }

      let promise = GitHubDataService.getRepos(vm.userName);

      promise
        .then((response) => {
          vm.categories = response.data;

          console.log("response.data: ", response.data);
        })
        .catch((error) => {
          console.error("Somethig went terrible wrong", error);
        });
    }
  }
})();
