// app.message1.controller.spec.ts

"use strict";

import * as angular from "angular";
import "angular-mocks";
import "./app.message1.controller";
import "../app.module";

describe("Message1Ctrl: ", () => {
  let $componentController;
  let $compile;
  let $rootScope;

  beforeEach(angular.mock.module("myApp"));
  beforeEach(inject((_$componentController_, _$compile_, _$rootScope_) => {
    $componentController = _$componentController_;
    $compile = _$compile_;
    $rootScope = _$rootScope_;
  }));

  it("Message1Ctrl.name should be equal Vitalii", () => {
    const ctrl = $componentController("message1Component", null, null);
    const result = ctrl.name;

    expect(result).toBe("Vitalii");
  });

  it("Message1Ctrl.sum method should add 1 + 2 to equal 3", () => {
    const ctrl = $componentController("message1Component", null, null);
    const sum = ctrl.sum;

    expect(sum(1, 2)).toBe(3);
  });

  it("Template should contain 'Vitalii'", () => {
    const element = $compile("<message-1-component></message-1-component>")($rootScope);
    $rootScope.$digest();

    // Check that the compiled element contains the templated content
    expect(element.html()).toContain("Vitalii");
  });

  it("Template should contain <button>", () => {
    const element = $compile("<message-1-component></message-1-component>")($rootScope);
    $rootScope.$digest();

    // console.log(element.find("button")[0].nodeName.toLowerCase());

    // Check that the compiled element contains the templated content
    expect(element.find("button")[0].nodeName.toLowerCase()).toEqual("button");
  });
});
