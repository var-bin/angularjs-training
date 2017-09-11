// app.gitHubDataService.js

(function() {
  "use strict";

  angular.module("MenuCategoriesApp")
    .service("GitHubDataService", GitHubDataService);

  GitHubDataService.$inject = ["$http"];

  function GitHubDataService($http) {
    let service = this;

    service.getRepos = getRepos;
    service.getUserName = getUserName;

    function getUserName(userName) {
      return userName;
    }

    function getRepos(userName) {
      if (!userName) {
        return;
      }

      const GET_MENU_CATEGORIES_URL = `https://api.github.com/users/${userName}/repos`;

      const request = $http({
        method: "GET",
        url: GET_MENU_CATEGORIES_URL
      });

      return request;
    }
  }
})();
