class validate {
    validaterPass(str) {
        var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        var lower = /[a-z]/
        var upper = /[A-Z]/
        var number = /[0-9]/
        var tip = '';
        var active = false;
        var checkpass = false;
        if(str.textLabel.string.length > 12) {
            tip = 'Password cannot have more than 12 characters';
            active = true;
            //this.passTip.node.active = true;
            //this.passTip.string = 'Password cannot have more than 12 characters';
        } else if(format.test(str.textLabel.string)) {
            //this.passTip.node.active = true;
            //this.passTip.string = 'Password cannot contain special character';
            tip = 'Password cannot contain special character';
            active = true;
        } else if(str.textLabel.string.length < 6) {
            // this.passTip.node.active = true;
            // this.passTip.string = 'Password must have at least 6 characters';
            tip = 'Password must have at least 6 characters';
            active = true;
        }  else if(!lower.test(str.textLabel.string) || !upper.test(str.textLabel.string) || !number.test(str.textLabel.string)) {
            //this.passTip.node.active = true; 
            // this._checkPass = true;
            active = true;
            tip = 'Password must contain at least 1 lower, 1 upper character and 1 number';
        } else {
            active = false;
            checkpass = true;
        }
        var obj = {
            tooltip : tip,
            act: active,
            check: checkpass,
        }
        return obj; 
    }
}
module.exports = validate;