///<reference path="./references.d.ts" />

import View = require("./view");

var loadingView: any = new View("./source/hbs/layout/loading.hbs", "#outline", null);

export = loadingView;
