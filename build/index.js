"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
require("dotenv/config");
function foo(bar, i) {
    while(i){
        console.log(bar);
        i--;
    }
    return bar;
}
var _default = foo;
