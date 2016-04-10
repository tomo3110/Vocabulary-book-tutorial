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
            this.limit(res());
            vm.addCheckAll(JSON.parse(JSON.stringify(_(vm.wordList).shuffle())));
            if(vm.checkList.length === 0) return m.route("/words");
            this.getNextWord();
        });
    }
    isFlag(){
        this.word().flag(true);
    }
    isView(){
        this.view(true);
    }
    incrimentCount(){
        vm.incrimentCount(this.i, this.limit);
    }
    getNextWord(){
        this.word(vm.getNextWord1(this.i, this.limit));
        this.incrimentCount();
        this.view(false);
    }
    checkEndFlag(){
        return vm.checkEndFlag(this.limit);
    }
}

export default CheckRun;
