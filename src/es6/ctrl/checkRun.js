import * as m from "mithril";
import vm from "../store";
import _ from "underscore";

class CheckRun {
    constructor(){
        this.i = m.prop(0);
        this.word = m.prop([]);
        this.view = m.prop(false);
        this.limit = m.prop(0);
        this.navbar = vm.scene.checkRun.navbar;
        vm.getUrlParam("id").then(res => {
            this.limit(res() - 1);
            vm.addCheckAll(JSON.parse(JSON.stringify(_(vm.wordList).shuffle())));
            if(vm.checkList.length === 0) return m.route("/words");
            if(vm.checkList.length < res()){
                this.limit(vm.checkList.length - 1);
            }
            this.getNextWord();
        });
        return;
    }
    isFlag(){
        this.word().flag(true);
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
}

export default CheckRun;
