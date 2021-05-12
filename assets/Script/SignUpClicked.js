// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html


const mEmitter = require('./EmitterClass')

cc.Class({
    extends: cc.Component,

    properties: {
        _interactable: false,
        btnSignIn: cc.Button,
        welcomeSpeech: cc.RichText,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.btnSignIn.interactable = false;
        mEmitter.instance = new mEmitter();
        mEmitter.instance.registerEvent('CheckInteractable',this.checkInteractable.bind(this));
        mEmitter.instance.registerEvent('Welcome',this.welcome.bind(this));
        mEmitter.instance.registerEvent('CheckFull',this.checkFull.bind(this));
    },

    welcome(username,time) {
        this.welcomeSpeech.node.active = true;
        var string = '<color=#000000>Welcome</c> <u><color = FF0000>' + username + '</c></u>' + 
                    ' <color=#000000>join this club at</c> <i><color = FFFF00>' + time[0] + ':' + time[1] + ':' + time[2] + '</c></i>'
        this.welcomeSpeech.string = string;
    },

    checkInteractable(checkUser,checkPass) {
        if(checkUser && checkPass) this._interactable = true;
        this.btnSignIn.interactable = this._interactable;
    },

    btnClicked() {
        mEmitter.instance.emit('SignedUp',true);
        this.btnSignIn.interactable = false;
    },

    checkFull(isFull) {
        if(isFull) {
            this.btnSignIn.node.active = false;
        }
    },

    start () {

    },

    // update (dt) {},
});
