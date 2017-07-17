// productListCtrl.ts

"use strict";

module app.productList {
  interface IProductListModel {
    title: string;
    showImage: boolean;
    products: app.domain.IProduct[];
    toggleImage(): void;
  }

  class ProductListCtrl implements IProductListModel {
    title: string;
    showImage: boolean;
    products: app.domain.IProduct[];

    static $inject = ["dataAccessService"];

    constructor(private dataAccessService: app.common.DataAccessService) {
      this.title = "Product List";
      this.showImage = false;
      this.products = [];

      let product = dataAccessService.getProductResource();
      product.query((data: app.domain.IProduct[]) => {
        this.products = data;
      });
    }

    toggleImage(): void {
      this.showImage = !this.showImage;
    }
  }

  angular
    .module("productManagement")
    .controller("ProductListCtrl", ProductListCtrl);
}
