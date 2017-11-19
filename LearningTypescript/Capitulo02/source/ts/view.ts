///<reference path="./references.d.ts" />

import Handlebars   = require("handlebars");
import Promise      = require("bluebird");
import Model        = require("./model");

class View {
  private _container : string;
  private _templateUrl : string;
  private _model : Model;

  constructor(templateUrl : string, container : string, model : Model) {
    this._container = container;
    this._templateUrl = templateUrl;
    this._model = model;
  }
  public render(): any {
    // if(this._model === null) {
    //  throw new Error("not implemented!");
    // }
    // else {
    $.ajax({
      url : this._templateUrl,
      success : (text): any => {
        var template : any = Handlebars.compile(text);
        var html: any = template({});
        $(this._container).html(html);
      },
      error : function(error: any): any {
        console.log(error);
      }
    });
    // }
  }
}

export = View;
