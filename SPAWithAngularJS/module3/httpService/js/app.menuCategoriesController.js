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
      let userNamePromise = GitHubDataService.getUserName(userName);

      userNamePromise
        .then((response) => {
          vm.userName = response;

          return vm.userName;
        })
        .then((UserNameResult) => {
          let promise = GitHubDataService.getRepos(UserNameResult);

          promise
            .then((response) => {
              vm.categories = response.data;

              console.log("response.data: ", response.data);
              console.log("response: ", response);
            })
            .catch((error) => {
              console.error("Somethig went terrible wrong", error);
            });

          console.log("second then: ", UserNameResult);
        })
        .catch((error) => {
          vm.error = error;

          console.error(error);
        });

      vm.error = "";
    }
  }
})();
