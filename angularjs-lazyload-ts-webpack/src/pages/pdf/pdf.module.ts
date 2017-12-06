// pdf.module.ts

"use strict";

import * as angular from "angular";
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";

class PdfController {
  public title: string = "PdfComponent";
  public docDefinition = {
    content: "This is an sample PDF printed with pdfMake"
  };

  constructor() {
    pdfMake.vfs = pdfFonts.pdfMake.vfs;
  }

  myCreatePdf() {
    pdfMake.createPdf(this.docDefinition).open();
  }
}

class PdfComponent implements ng.IComponentOptions {
  public template: string = require("./pdf.view.html");
  public controller: any = PdfController;
}

const PDF_MODULE = angular
  .module("pdf.module", [])
  .component("pdfComponent", new PdfComponent());

export { PDF_MODULE };
