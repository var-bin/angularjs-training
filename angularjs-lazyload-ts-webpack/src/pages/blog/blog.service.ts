// blog.service.js

class BlogService {
  public API_URL: string = "https://api.github.com";

  static $inject = ["$http"];

  constructor(public $http: ng.IHttpService) {}

  getData() {
    const REPOS = "users/var-bin/repos";
    const URL = `${this.API_URL}/${REPOS}`;

    return this.$http.get(URL)
      .then((response) => response.data);
  }
}

export { BlogService };
