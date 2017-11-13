// app.repositories.service.ts

class RepositoriesService {
  static $inject = ["$http"];

  constructor(public $http: ng.IHttpService) {}

  getRepositories() {
    return this.$http.get("https://api.github.com/users/var-bin/repos")
      .then((response) => response.data);
  }
}

export { RepositoriesService };
