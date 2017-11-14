// test.ts

// https://webpack.js.org/guides/dependency-management/#context-module-api

function importAll(r: any): any {
  r.keys().forEach(r);
}

importAll((require as any).context("./", true, /spec.ts$/));
