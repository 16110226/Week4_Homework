(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/EmitterClass.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '6938bkSsJBDx6K4os17Qh4M', 'EmitterClass', __filename);
// Script/EmitterClass.js

'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

var EventEmitter = require('events');

var mEmitter = function () {
    function mEmitter() {
        _classCallCheck(this, mEmitter);

        this._emitter = new EventEmitter();
        this._emitter.setMaxListeners(100);
    }

    _createClass(mEmitter, [{
        key: 'emit',
        value: function emit() {
            var _emitter;

            (_emitter = this._emitter).emit.apply(_emitter, arguments);
        }
    }, {
        key: 'registerEvent',
        value: function registerEvent(event, listener) {
            this._emitter.on(event, listener);
        }
    }, {
        key: 'registerOnce',
        value: function registerOnce(event, listener) {
            this._emitter.once(event, listener);
        }
    }, {
        key: 'removeEvent',
        value: function removeEvent(event, listener) {
            this._emitter.removeListener(event, listener);
        }
    }, {
        key: 'destroy',
        value: function destroy() {
            this._emitter.removeAllListeners();
            this._emitter = null;
            mEmitter.instance = null;
        }
    }]);

    return mEmitter;
}();

mEmitter.instance = null;
module.exports = mEmitter;

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
        //# sourceMappingURL=EmitterClass.js.map
        