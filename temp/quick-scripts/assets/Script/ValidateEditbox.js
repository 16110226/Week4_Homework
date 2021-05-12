(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/ValidateEditbox.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'e5144RPriVHkrEjHfxx8Sib', 'ValidateEditbox', __filename);
// Script/ValidateEditbox.js

'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var validate = function () {
    function validate() {
        _classCallCheck(this, validate);
    }

    _createClass(validate, [{
        key: 'validaterPass',
        value: function validaterPass(str) {
            var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
            var lower = /[a-z]/;
            var upper = /[A-Z]/;
            var number = /[0-9]/;
            var tip = '';
            var active = false;
            var checkpass = false;
            if (str.textLabel.string.length > 12) {
                tip = 'Password cannot have more than 12 characters';
                active = true;
                //this.passTip.node.active = true;
                //this.passTip.string = 'Password cannot have more than 12 characters';
            } else if (format.test(str.textLabel.string)) {
                //this.passTip.node.active = true;
                //this.passTip.string = 'Password cannot contain special character';
                tip = 'Password cannot contain special character';
                active = true;
            } else if (str.textLabel.string.length < 6) {
                // this.passTip.node.active = true;
                // this.passTip.string = 'Password must have at least 6 characters';
                tip = 'Password must have at least 6 characters';
                active = true;
            } else if (!lower.test(str.textLabel.string) || !upper.test(str.textLabel.string) || !number.test(str.textLabel.string)) {
                //this.passTip.node.active = true; 
                // this._checkPass = true;
                active = true;
                tip = 'Password must contain at least 1 lower, 1 upper character and 1 number';
            } else {
                active = false;
                checkpass = true;
            }
            var obj = {
                tooltip: tip,
                act: active,
                check: checkpass
            };
            return obj;
        }
    }]);

    return validate;
}();

module.exports = validate;

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=ValidateEditbox.js.map
        