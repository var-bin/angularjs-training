// product.ts

"use strict";

module app.domain {
  interface IProduct {
    productId: number;
    productName: string;
    productCode: string;
    releaseDate: Date;
    price: number;
    description: string;
    imageUrl: string;
    calculateDiscount(percent: number): number;
  }
}
