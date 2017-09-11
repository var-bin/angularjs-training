// app.reposController.js

(function() {
  "use strict";

  angular.module("MenuCategoriesApp")
    .controller("ReposController", ReposController);

  ReposController.$inject = ["GitHubDataService"];

  function ReposController(GitHubDataService) {
    let vm = this;

    vm.getRepos = getRepos;
    vm.getRepoStatistics = getRepoStatistics;

    function getRepos(userName) {
      const userNamePromise = GitHubDataService.getUserName(userName);

      userNamePromise
        .then((response) => {
          vm.userName = response;

          return vm.userName;
        })
        .then((UserNameResult) => {
          let promise = GitHubDataService.getRepos(UserNameResult);

          promise
            .then((response) => {
              vm.repositories = response.data;

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

    function getRepoStatistics(userName, repoName, repoId) {
      const repoStatisticsPromise = GitHubDataService.getRepoStatistics(userName, repoName);

      repoStatisticsPromise
        .then((response) => {
          vm.repositories[repoId].total = response.data[0].total;

          console.log("getRepoStatistics: ", response);
        })
        .catch((error) => {
          console.error("Error: ", error);
        })
    }
  }
})();
