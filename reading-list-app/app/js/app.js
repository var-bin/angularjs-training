(function () {
  'use strict';

  var app = angular.module('readingList', []);

  app.controller('ReadingListController', ['$rootScope', function ($rootScope) {
    $rootScope.books = books;
    $rootScope.genres = genres;
    $rootScope.showForm = false;

    $rootScope.toggleForm = function () {
      return $rootScope.showForm = !$rootScope.showForm;
    };

    $rootScope.toggleButtonText = function (state) {
      return $rootScope.showForm ? "Cancel" : "Create a Review";
    };
  }]);

  app.directive('appView', function () {
    return {
      restrict: 'E',
      templateUrl: '../partials/app-view.html'
    }
  });

  app.directive('reviewForm', function () {
    return {
      restrict: 'E',
      templateUrl: '../partials/review-form.html',
      controller: function () {
        this.book = {genres: {}},

        this.setRating = function (rating) {
          var rating = rating || 0;

          return rating;
        };

        this.setTitle = function (title) {
          var title = title || "Title of Book";

          return title;
        };

        this.setAuthor = function (author) {
          var author = author || "Author's Name";

          return author;
        };

        this.setReview = function (review) {
          var review = review || "No review yet.";

          return review;
        };

        this.addReview = function (form) {
          books.push(this.book);
          this.book = {genres: {}};

          form.$setPristine();
        }
      },
      controllerAs: 'reviewFormCtrl'
    };
  });

  app.directive('readingListItem', function () {
    return {
      restrict: 'E',
      templateUrl: '../partials/reading-list-item.html'
    };
  });

  var genres = [
    'fable',
    'fantasy',
    'fiction',
    'folklore',
    'horror',
    'humor',
    'legend',
    'metafiction',
    'mystery',
    'mythology',
    'non-fiction',
    'poetry'
  ];

  var books = [
    {
      title: 'A Game of Thrones: A Song of Ice and Fire',
      author: 'George R.R. Martin',
      isbn: '0553593714',
      review: 'The most inventive and entertaining fantasy saga of our time—warrants one hell of an introduction. I loved this book!',
      rating: 4,
      genres: { 'non-fiction': true, fantasy: true }
    },{
      title: 'HTML for Babies',
      author: 'John C Vanden-Heuvel Sr',
      isbn: '0615487661',
      review: "It's never too early to be standards compliant! I taught my little one mark-up in under one hour!",
      rating: 5,
      genres: { fiction: true }
    },{
      title: 'A is for Array',
      author: 'Brandon J Hansen',
      isbn: '1489522212',
      review: 'A is for Array is the ABC book for future programmers. Filled with fun illustrations and simple real-world examples, my children loved seeing my world intertwined with theirs!',
      rating: 4,
      genres: { fiction: true }
    },{
      title: 'The Dragon Reborn',
      author: 'Robert Jordan',
      isbn: '0812513711',
      review: 'The Wheel weaves as the Wheel wills, and we are only the thread of the Pattern. Moiraine',
      rating: 4,
      genres: { 'non-fiction': true, fantasy: true }
    }
  ];
})();
