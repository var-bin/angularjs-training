// app.gitHubDataService.js

(function() {
  "use strict";

  angular.module("MenuCategoriesApp")
    .service("GitHubDataService", GitHubDataService);

  GitHubDataService.$inject = ["$http", "$q"];

  function GitHubDataService($http, $q) {
    let service = this;

    service.getRepos = getRepos;
    service.getUserName = getUserName;
    service.getRepoStatistics = getRepoStatistics;

    function getUserName(userName) {
      const deferred = $q.defer();

      if (userName) {
        deferred.resolve(userName);
      } else {
        let message = "Please, enter a user name";

        deferred.reject(message);
      }

      return deferred.promise;
    }

    function getRepos(userName) {
      const REPOS_URL = `https://api.github.com/users/${userName}/repos`;

      const request = $http({
        method: "GET",
        url: REPOS_URL
      });

      return request;
    }

    function getRepoStatistics(userName, repoName) {
      const REPO_URL = `https://api.github.com/repos/${userName}/${repoName}/stats/contributors`;

      const request = $http({
        method: "GET",
        url: REPO_URL
      });

      return request;
    }
  }
})();
