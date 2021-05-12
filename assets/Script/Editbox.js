// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

var valid = require('./ValidateEditbox')
const mEmitter = require('./EmitterClass')

cc.Class({
    extends: cc.Component,

    properties: {
        userName: cc.EditBox,
        passWord: cc.EditBox,
        userTip: cc.Label,
        passTip: cc.Label,
        _checkPass: false,
        _checkUser: false,
        _singedUp: false,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        mEmitter.instance.registerEvent('SignedUp', this.signedUp.bind(this));
    },

    signedUp(clicked) {
        if (clicked) {
            cc.log('Run')
            this.saveInformation();
            this.userName.string = '';
            this.passWord.string = '';
        }
    },

    editUser() {
        this.passTip.node.active = false;
        this.userTip.node.active = true;
        this.userTip.string = 'Please input your username. No special character';
    },

    editPass() {
        this.userTip.node.active = false;
        this.passTip.node.active = true;
        this.passTip.string = 'Please input your password. No special character';
    },

    validaterPass(str) {
        var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        var lower = /[a-z]/
        var upper = /[A-Z]/
        var number = /[0-9]/
        if (str.textLabel.string.length > 12) {
            this.passTip.node.active = true;
            this.passTip.string = 'Password cannot have more than 12 characters';
        } else if (format.test(str.textLabel.string)) {
            this.passTip.node.active = true;
            this.passTip.string = 'Password cannot contain special character';
        } else if (str.textLabel.string.length < 6) {
            this.passTip.string = 'Password must have at least 6 characters';
            this.passTip.node.active = true;
        } else if (!lower.test(str.textLabel.string) || !upper.test(str.textLabel.string) || !number.test(str.textLabel.string)) {
            this.passTip.node.active = true;
            this.passTip.string = 'Password must contain at least 1 lower, 1 upper character and 1 number';
        } else {
            this.passTip.node.active = false;
            this._checkPass = true;
            mEmitter.instance.emit('CheckInteractable', this._checkUser, this._checkPass);
        }
    },

    validateUser(str) {
        var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        if (format.test(str.textLabel.string)) {
            this.userTip.node.active = true;
            this.userTip.string = 'Username cannot contain special character';
        } else if (str.length > 10) {
            this.userTip.node.active = true;
            this.userTip.string = 'Username cannot have more than 10 characters';
        } else {
            this.userTip.node.active = false;
            this._checkUser = true;
            mEmitter.instance.emit('CheckInteractable', this._checkUser, this._checkPass);
        }
    },

    saveInformation() {
        var date = new Date();
        var seconds = date.getSeconds();
        if (parseInt(seconds) < 10) seconds = '0' + seconds;
        var minutes = date.getMinutes();
        if (parseInt(minutes) < 10) minutes = '0' + minutes;
        var hour = date.getHours();
        if (parseInt(hour) < 10) hour = '0' + hour;
        var str = this.userName.textLabel.string + "     " + hour + ':' + minutes + ':' + seconds;
        var time = [hour,minutes,seconds]
        mEmitter.instance.emit('Update',str);
        mEmitter.instance.emit('Welcome',this.userName.textLabel.string,time);
    },

    start() {

    },

    // update (dt) {},
});
