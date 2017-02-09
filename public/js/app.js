"use strict";
(function() {
  var app = angular.module("gemStore", []);

  app.controller("StoreController", function () {
    this.product = gems;
  });

  app.controller("ReviewController", function () {
    this.review = {};

    this.addReview = function(product) {
      this.review.createdOn = Date.now(); //  returns the number of milliseconds elapsed since 1 January 1970 00:00:00 UTC
      product.reviews.push(this.review);

      this.review = {};
    };
  });

  app.directive("productTitle", function () {
    return {
      restrict: "A",
      templateUrl: "product-title.html"
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

  var gems = [
    {
      name: 'Azurite',
      description: "Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems. Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems. Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.",
      shine: 8,
      price: 110.50,
      rarity: 7,
      color: '#CCC',
      faces: 14,
      images: [
        "images/gem-02.gif",
        "images/gem-05.gif",
        "images/gem-09.gif"
      ],
      reviews: [{
        stars: 5,
        body: "I love this gem!",
        author: "joe@example.org",
        createdOn: 1397490980837
      }, {
        stars: 1,
        body: "This gem sucks.",
        author: "tim@example.org",
        createdOn: 1397490980837
      }],
      canPurchase: true
    },
    {
      name: 'Bloodstone',
      description: "Origin of the Bloodstone is unknown, hence its low value. It has a very high shine and 12 sides, however. Origin of the Bloodstone is unknown, hence its low value. It has a very high shine and 12 sides, however. Origin of the Bloodstone is unknown, hence its low value. It has a very high shine and 12 sides, however.",
      shine: 9,
      price: 22.90,
      rarity: 6,
      color: '#EEE',
      faces: 12,
      images: [
        "images/gem-01.gif",
        "images/gem-03.gif",
        "images/gem-04.gif"
      ],
      reviews: [{
        stars: 3,
        body: "I think this gem was just OK, could honestly use more shine, IMO.",
        author: "JimmyDean@example.org",
        createdOn: 1397490980837
      }, {
        stars: 4,
        body: "Any gem with 12 faces is for me!",
        author: "gemsRock@example.org",
        createdOn: 1397490980837
      }],
      canPurchase: true
    },
    {
      name: 'Zircon',
      description: "Zircon is our most coveted and sought after gem. You will pay much to be the proud owner of this gorgeous and high shine gem. Zircon is our most coveted and sought after gem. You will pay much to be the proud owner of this gorgeous and high shine gem. Zircon is our most coveted and sought after gem. You will pay much to be the proud owner of this gorgeous and high shine gem.",
      shine: 70,
      price: 1100,
      rarity: 2,
      color: '#000',
      faces: 6,
      images: [
        "images/gem-06.gif",
        "images/gem-07.gif",
        "images/gem-10.gif"
      ],
      reviews: [{
        stars: 1,
        body: "This gem is WAY too expensive for its rarity value.",
        author: "turtleguyy@example.org",
        createdOn: 1397490980837
      }, {
        stars: 1,
        body: "BBW: High Shine != High Quality.",
        author: "LouisW407@example.org",
        createdOn: 1397490980837
      }, {
        stars: 1,
        body: "Don't waste your rubles!",
        author: "nat@example.org",
        createdOn: 1397490980837
      }],
      canPurchase: true
    }];
})();
