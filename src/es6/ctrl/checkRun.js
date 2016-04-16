import * as m from "mithril";
import vm from "../store";
// import _ from "underscore";
import Check from "../model/check";
// import window from "window";

class CheckRun {
    constructor(){
        this.i = m.prop(0);
        this.word = m.prop([]);
        this.view = m.prop(false);
        this.limit = m.prop(0);
        this.animationFlag = m.prop(false);
        this.navbar = vm.scene.checkRun.navbar;
        vm.getUrlParam("id").then(res => {
            this.limit(res() - 1);
            vm.addCheckAll(JSON.parse(JSON.stringify(_(vm.wordList).shuffle())));
            // vm.db.select({
            //     name: "words"
            //     // where: "flag = 'flase'"
            // }).then(data => {
            //     m.startComputation();
            //     console.log(data);
            //     vm.addCheckAll(data);
            //     if(vm.checkList.length === 0) return m.route("/words");
            //     if(vm.checkList.length < res()){
            //         this.limit(vm.checkList.length - 1);
            //     }
            //     this.getNextWord();
            //     m.endComputation();
            //     return;
            // });
            if(vm.checkList.length === 0) return m.route("/words");
            if(vm.checkList.length < res()){
                this.limit(vm.checkList.length - 1);
            }
            this.getNextWord();
            return;
        });
    }
    isFlag(){
        this.word().flag(1);
        return;
    }
    isView(){
        this.view(true);
        return;
    }
    incrimentCount(){
        vm.incrimentCount(this.i, this.limit);
        return;
    }
    getNextWord(){
        this.word(vm.getNextWord1(this.i, this.limit));
        this.incrimentCount();
        this.view(false);
        return;
    }
    checkEndFlag(){
        return vm.checkEndFlag(this.limit);
    }
    t_act(){
        if(this.view())return;
        m.startComputation();
        this.isView();
        m.endComputation();
        return;
    }
    l_act(){
        this.getNextWord();
        m.endComputation();
        return;
    }
    r_act(){
        m.startComputation();
        this.isFlag();
        if(this.checkEndFlag()){
            m.route("/home");
            m.endComputation();
        } else {
            this.getNextWord();
            m.endComputation();
        }
        return;
    }
    onunload(){
        vm.checkList = undefined;
        vm.checkList = new Check.List();
    }
}

export default CheckRun;
