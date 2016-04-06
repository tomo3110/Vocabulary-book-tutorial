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
        // if(this.i() === this.limit()){
        //     this.i(0);
        // } else {
        //     this.i(this.i() + 1);
        // }
    }
    getNextWord(){
        // vm.getNextWord1(this.i, this.incrimentCount)
        const res = vm.getNextWord1(this.i, this.limit)
        this.word(res());
        this.view(false);
        this.incrimentCount();
        // this.word(vm.getNextWord1(this.i, this.limit));
        // this.view(false);
    }
    checkEndFlag(){
        const result = _.countBy(this.word(), item => (item.flag === true) ? "ok" : "no" );
        // console.dir(_.countBy(this.word, item => (item().flag) ? "ok" : "no" ));
        console.log(JSON.stringify(result));
        return (this.limit() === result.ok);

    }
}

export default CheckRun;
