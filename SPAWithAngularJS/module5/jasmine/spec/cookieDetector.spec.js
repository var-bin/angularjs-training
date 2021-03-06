// cookieDetector.spec.js

describe("cookieDetector", () => {
  let itemsWithoutCookies;
  let itemsWithCookies;

  beforeEach(() => {
    itemsWithoutCookies = [
      "apples",
      "pears",
      "bananas"
    ];

    itemsWithCookies = [
      "bread",
      "milk",
      "Cookie"
    ];
  });

  it("Should be able to detect no cookies", () => {
    const result = detectCookie(itemsWithoutCookies);

    expect(result).not.toBe(true);
  });

  it("Should be able to detect cookies", () => {
    const result = detectCookie(itemsWithCookies);

    expect(result).toBe(true);
  });
});
