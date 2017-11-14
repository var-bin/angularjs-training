// app.message1.controller.spec.ts

"use strict";

import * as angular from "angular";
import "angular-mocks";
import "../app";

describe("Message1Ctrl: ", () => {
  let $componentController: ng.IComponentControllerService;
  let $compile: ng.ICompileService;
  let $rootScope: ng.IRootScopeService;

  beforeEach(angular.mock.module("myApp"));
  beforeEach(inject((_$componentController_, _$compile_, _$rootScope_) => {
    $componentController = _$componentController_;
    $compile = _$compile_;
    $rootScope = _$rootScope_;
  }));

  it("Message1Ctrl.name should be equal Vitalii", () => {
    const ctrl: ng.IComponentController = $componentController("message1Component", {}, null);
    const name = ctrl.name;

    expect(name).toBe("Vitalii");
  });

  it("Message1Ctrl.sum method should add 1 + 2 to equal 3", () => {
    const ctrl: ng.IComponentController = $componentController("message1Component", {}, null);
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
    const button = element.find("button")[0].nodeName.toLowerCase();

    // Check that the compiled element contains the templated content
    expect(button).toEqual("button");
  });
});
