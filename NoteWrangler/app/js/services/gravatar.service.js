// js/services/gravatar.service

(function() {
  "use strict";

  angular.module("NoteWrangler")
    .provider("Gravatar", GravatarProvider);

  function GravatarProvider() {
    let vm = this;
    let avatarSize = 80;

    /**
     * To use defaultImage, just pass one of the following keywords as
     * the d= parameter to an image request:
     *
     * 404: do not load any image if none is associated with the email hash,
     * instead return an HTTP 404 (File Not Found) response
     *
     * mm: (mystery-man) a simple, cartoon-style silhouetted outline of a person
     * (does not vary by email hash)
     *
     * identicon: a geometric pattern based on an email hash
     *
     * monsterid: a generated 'monster' with different colors, faces, etc
     *
     * wavatar: generated faces with differing features and backgrounds
     *
     * retro: awesome generated, 8-bit arcade-style pixelated faces
     *
     * blank: a transparent PNG image (border added to HTML below for demonstration purposes)
     */
    let defaultImage = "wavatar";

    const AVATAR_URL = "http://www.gravatar.com/avatar/";

    vm.setSize = _setSize;
    vm.setDefaultImage = _setDefaultImage;

    function _setSize(size) {
      avatarSize = size;
    }

    function _setDefaultImage(d) {
      defaultImage = d;
    }

    function _getAvatar(email) {
      return `${AVATAR_URL}${CryptoJS.MD5(email)}?size=${avatarSize.toString()}&d=${defaultImage}`;
    }

    function _$get() {
      return {
        getAvatar: _getAvatar
      };
    }

    vm.$get = _$get;
  }
})();
