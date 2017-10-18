// cookieDetector.js

"use strict";

// v1
/* function detectCookie(items) {
  const TRIGGERED_WORD = "cookie";

  for (let i = 0; i < items.length; i++) {
    const item = items[i];

    if (item.indexOf(TRIGGERED_WORD) !== -1) {
      return true;
    }

    return false;
  }
} */

// v2
function detectCookie(items) {
  const TRIGGERED_WORD = "cookie";

  for (let i = 0; i < items.length; i++) {
    const item = items[i];

    if (item.indexOf(TRIGGERED_WORD) !== -1) {
      return true;
    }
  }

    return false;
}

module.exports = detectCookie;
