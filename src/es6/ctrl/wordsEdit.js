import m from "mithril";
import vm from "../store";

class WordsEdit {
    constructor(){
        vm.getUrlParam("id")
            .then(res => {
                this.i = res;
                // console.log("param:" + res() + " data:" + vm.wordList[res()]);
                this.navbar = vm.scene.wordsEdit.navbar;
                this.button = vm.scene.wordsEdit.content.button;
                this.en = m.prop(vm.wordList[res()].en());
                this.ja = m.prop(vm.wordList[res()].ja());
            });
    }
    add(){
        if(this.en() === "" || this.ja() === "") return;
        vm.wordList[this.i()].en(this.en());
        vm.wordList[this.i()].ja(this.ja());
        this.en("");
        this.ja("");
        m.route("/words");
    }
}

export default WordsEdit;
