"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var like_1 = require("./like");
var button = new like_1.LikeComponent(10, true);
button.onClick();
console.log("likesCount " + button.likesCount + " isSeleceted " + button.isSelected);
