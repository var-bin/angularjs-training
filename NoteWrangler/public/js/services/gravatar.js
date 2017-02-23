// js/services/gravatar.js

(function() {
  "use strict";

  //import { MD5 } from "crypto-js/md5";

  angular.module("NoteWrangler")
    .factory("Gravatar", GravatarFactory);

  GravatarFactory.$inject = ["$http"];

  function GravatarFactory($http) {
    const AVATAR_SIZE = 80;
    const AVATAR_URL = "http://www.gravatar.com/avatar/";

    function getAvatar(email) {
      //return AVATAR_URL + MD5(email) + "?size=" + AVATAR_SIZE.toString();
    }

    return {
      getAvatar
    }
  }
})();
