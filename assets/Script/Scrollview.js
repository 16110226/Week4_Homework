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
       registeredList: cc.ScrollView,
       item: cc.Prefab,
       progressBar: cc.ProgressBar,
       noti: cc.RichText,
       _index: 0,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        //mEmitter.instance.emit('Hello','Hello Yetyet');
        //mEmitter.instance = new mEmitter();
        //mEmitter.instance.registerEvent('Hello',this.sayHello.bind(this));
        mEmitter.instance.registerEvent('Update',this.updateList.bind(this));
    },

    updateList(str) {
        var record = cc.instantiate(this.item);
        record = cc.instantiate(this.item);
        record.getComponent(cc.Label).string = str
        record.y -= (30*this._index);
        cc.log(this.registeredList);
        this.registeredList .content.addChild(record);
        this._index++;
        this.progressBar.progress += 1/8;
        if(this.progressBar.progress === 1) {
            mEmitter.instance.emit('CheckFull',true);
            this.noti.node.active = true;
            mEmitter.instance.destroy();
        }
    },

    start () {

    },

    // update (dt) {},
});
