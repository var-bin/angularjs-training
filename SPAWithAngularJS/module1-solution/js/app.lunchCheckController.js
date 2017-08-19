// app.lunchCheckController.js

/**
 * 1. If the number of items in the textbox is less than or equal to 3
 * (e.g., 1, 2, or 3), a message should show up under to the textbox
 * saying "Enjoy!". If the number of items is greater than 3
 * (4, 5, and above), the message "Too much!" should show up under
 * the textbox.
 *
 * 2. If the textbox is empty and the user clicks the "Check If Too Much" button,
 * the message "Please enter data first" should show up. 'Empty' here means
 * either "" (empty string) or a string with just spaces in it.
 *
 * 3. Only 1 message should be shown at any given time. In other words,
 * if you have both messages "Enjoy!" and "Too much!" showing up at the same time,
 * it's an error.
 *
 * 4. You are not required to handle a case where there is no item between some commas.
 * For example, you are free to consider this case item 1, item2,,item3 or this case
 * item 1, item2, ,item3 as 4 items in the list. However, you can implement checking for
 * an 'empty' item as a bonus feature (ungraded). Please make sure to put a comment
 * somewhere next to the input textbox stating that you do NOT consider and empty item,
 * i.e., , , as an item towards to the count.
 *
 * item1, item2, item3
 */

(function() {
  "use strict";

  angular.module("LunchCheck")
    .controller("LunchCheckController", LunchCheckController);

  function LunchCheckController() {
    let vm = this;

    const ENJOY_MESSAGE = "Enjoy!";
    const TOO_MUCH_MESSAGE = "Too much!";
    const ENTER_DATA_MESSAGE = "Please enter data first!";
    const EMPTY_ITEMS_MESSAGE = "Empty items. Please try again!";
    const ACCEPTABLE_COUNT = 3;

    vm.onLunchMenuCheck = onLunchMenuCheck;
    vm.infoMessage = "";

    function checkData() {
      // 2
      if (!vm.lunchMenu) {
        vm.infoMessage = ENTER_DATA_MESSAGE;

        return;
      }

      checkCount();
    }

    function checkCount() {
      const check = checkDataItems(vm.lunchMenu.split(","));

      if (!!check) {
        return;
      }

      const data = vm.lunchMenu.split(",");
      const dataSize = data.length;

      // 1, 3
      if (dataSize <= ACCEPTABLE_COUNT) {
        vm.infoMessage = ENJOY_MESSAGE;
      } else {
        vm.infoMessage = TOO_MUCH_MESSAGE;
      }

      return;
    }

    /**
     *
     * @param {*} item - array item, comes from ng-model
     */
    function checItemLength(item) {
      return item.length === 0;
    }

    /**
     *
     * @param {*} arr - ng-model data
     */

    // 4
    function checkDataItems(arr) {
      const check = arr.some(checItemLength);

      if (check) {
        vm.infoMessage = EMPTY_ITEMS_MESSAGE;

        return -1;
      }
    }

    function onLunchMenuCheck() {
      checkData();
    }
  }
})();
