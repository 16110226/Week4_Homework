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
const mEmitter = require("./EmitterClass");

cc.Class({
    extends: cc.Component,

    properties: {
        userName: cc.EditBox,
        passWord: cc.EditBox,
        btnLogin: cc.Button,
        progressBar: cc.ProgressBar,
        scrollView: cc.ScrollView,
        welcomeSpeech: cc.RichText,
        noti: cc.RichText,
        userTip: cc.Label,
        passTip: cc.Label,
        item: cc.Prefab,
        index: 0,
        _checkPass: false,
        _checkUser: false,

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.welcomeSpeech.node.active = false;
        this.userTip.node.active = false;
        this.passTip.node.active = false;
        this.btnLogin.interactable = false;
        this.noti.node.active = false;
        //cc.log(validate);
        //mEmitter.instance.emit('Hello','Hello Yetyet');
    },

    validateUser(str) {
        var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        if(format.test(str)) {
            this.userTip.node.active = true;
            this.userTip.string = 'Username cannot contain special character';
        }  else if (str.length > 10) {
            this.userTip.node.active = true;
            this.userTip.string = 'Username cannot have more than 10 characters';
        } else this._checkUser = true;
        if(this._checkPass && this._checkUser) this.btnLogin.interactable = true;
    },
    
    checkPassLength(str) {
        var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        var lower = /[a-z]/
        var upper = /[A-Z]/
        var number = /[0-9]/
        if(str.textLabel.string.length > 12) {
            this.passTip.node.active = true;
            this.passTip.string = 'Password cannot have more than 12 characters';
        } else if(format.test(str.textLabel.string)) {
            this.passTip.node.active = true;
            this.passTip.string = 'Password cannot contain special character';
        } else if(str.textLabel.string.length < 6) {
            this.passTip.node.active = true;
            this.passTip.string = 'Password must have at least 6 characters';
        }  else if(lower.test(str.textLabel.string) && upper.test(str.textLabel.string) && number.test(str.textLabel.string)) {
            this.passTip.node.active = false; 
            this._checkPass = true;
        } else this.passTip.string = 'Password must contain at least 1 lower, 1 upper character and 1 number'
        if(this._checkPass === true && this._checkUser === true) this.btnLogin.interactable = true;
        cc.log(this._checkPass);
        cc.log(this._checkUser)
    },

    editUser() {
        //this.userName.textLabel = '';
        this.passTip.node.active = false;
        this.userTip.node.active = true;
        this.userTip.string = 'Please input your username. No special character';
    },

    editPass() {
        //this.passWord.textLabel = '';
        this.userTip.node.active = false;
        this.passTip.node.active = true;
        this.passTip.string = 'Please input your password. No special character';
    },

    signupClicked() {
        this.welcomeSpeech.node.active = true;
        var date = new Date();
        var seconds = date.getSeconds();
        if(parseInt(seconds) < 10) seconds = '0' + seconds;
        var minutes = date.getMinutes();
        if(parseInt(minutes) < 10) minutes = '0' + minutes;
        var hour = date.getHours();
        if(parseInt(hour) < 10) hour = '0' + hour;
        var string = '<color=#000000>Welcome</c> <u><color = FF0000>' + this.userName.textLabel.string + '</c></u>' + 
                    ' <color=#000000>join this club at</c> <i><color = FFFF00>' + hour + ':' + minutes + ':' + seconds + '</c></i>'
        this.welcomeSpeech.string = string;
        this.progressBar.progress += 1/8;
        if(this.progressBar.progress === 1) {
            this.btnLogin.node.active = false;
            this.userName.node.active = false;
            this.passWord.node.active = false;
            this.noti.node.active = true;
        }
        var data = [hour,minutes,seconds];
        this.addScrollView(data);
    },

    addScrollView(data) {
        var record = cc.instantiate(this.item);
        record = cc.instantiate(this.item);
        record.getComponent(cc.Label).string = this.userName.textLabel.string + "     " + data[0] + ':' + data[1] + ':' + data[2];
        record.y -= (30*this.index);
        this.scrollView.content.addChild(record);
        cc.log(this.scrollView.content.children );
        this.index++;
    },

    start () {

    },

    // update (dt) {},
});