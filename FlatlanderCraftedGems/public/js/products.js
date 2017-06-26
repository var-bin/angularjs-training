"use strict";

(function () {
  var app = angular.module("storeProducts", []);

  app.directive("productTitle", function () {
    return {
      restrict: "A",
      templateUrl: "product-title.html"
    }
  });

  app.directive("productDescription", function () {
    return {
      restrict: "E",
      templateUrl: "product-description.html"
    }
  });

  app.directive("productSpecs", function () {
    return {
      restrict: "E",
      templateUrl: "product-specs.html"
    }
  });

  app.directive("productReviews", function () {
    return {
      restrict: "E",
      templateUrl: "product-reviews.html"
    }
  });

  app.directive("productReviewsForm", function () {
    return {
      restrict: "E",
      templateUrl: "product-reviews-form.html"
    }
  });

  app.directive("productPanels", function () {
    return {
      restrict: "E",
      templateUrl: "product-panels.html",
      controller: function () {
        this.tab = 1;

        this.setTab = function (setTab) {
          this.tab = setTab;
        };

        this.isSet = function (setValue) {
          return this.tab === setValue;
        };

        this.setActive = function (activeValue) {
          return this.tab === activeValue;
        };
      },
      controllerAs: "navTab"
    }
  });

  app.directive("productGallery", function () {
    return {
      restrict: "E",
      templateUrl: "product-gallery.html",
      controller: function () {
        this.currentImage = 0;

        this.setCurrent = function (currentValue) {
          this.currentImage = currentValue || 0;
        };

        this.toggleCurrent = function (toggleValue) {
          if (this.currentImage === toggleValue) {
            return false;
          }

          this.currentImage = toggleValue || 0;
        };

        this.setActive = function (activeValue) {
          return this.currentImage === activeValue;
        };
      },
      controllerAs: "gallery"
    }
  });

  app.directive("productButton", function () {
    return {
      restrict: "E",
      templateUrl: "product-button.html"
    };
  });
})();
