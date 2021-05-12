(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/SignUpClicked.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'd6737B/lD5JjYBQTI2m25fv', 'SignUpClicked', __filename);
// Script/SignUpClicked.js

'use strict';

// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html


var mEmitter = require('./EmitterClass');

cc.Class({
    extends: cc.Component,

    properties: {
        _interactable: false,
        btnSignIn: cc.Button,
        welcomeSpeech: cc.RichText
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        this.btnSignIn.interactable = false;
        mEmitter.instance = new mEmitter();
        mEmitter.instance.registerEvent('CheckInteractable', this.checkInteractable.bind(this));
        mEmitter.instance.registerEvent('Welcome', this.welcome.bind(this));
        mEmitter.instance.registerEvent('CheckFull', this.checkFull.bind(this));
    },
    welcome: function welcome(username, time) {
        this.welcomeSpeech.node.active = true;
        var string = '<color=#000000>Welcome</c> <u><color = FF0000>' + username + '</c></u>' + ' <color=#000000>join this club at</c> <i><color = FFFF00>' + time[0] + ':' + time[1] + ':' + time[2] + '</c></i>';
        this.welcomeSpeech.string = string;
    },
    checkInteractable: function checkInteractable(checkUser, checkPass) {
        if (checkUser && checkPass) this._interactable = true;
        this.btnSignIn.interactable = this._interactable;
    },
    btnClicked: function btnClicked() {
        mEmitter.instance.emit('SignedUp', true);
        this.btnSignIn.interactable = false;
    },
    checkFull: function checkFull(isFull) {
        if (isFull) {
            this.btnSignIn.node.active = false;
        }
    },
    start: function start() {}
}

// update (dt) {},
);

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
        //# sourceMappingURL=SignUpClicked.js.map
        