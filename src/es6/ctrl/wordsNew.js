import m from "mithril";
import vm from "../store";

class WordsNew {
    constructor(){
        this.navbar = vm.scene.wordsNew.navbar;
        this.button1 = vm.scene.wordsNew.content.button1;
        this.button2 = vm.scene.wordsNew.content.button2;
        this.en = m.prop("");
        this.ja = m.prop("");
    }
    add(continu){
        if(this.en() === "" || this.ja() === "") return;
        vm.add(vm.wordList, {
            en: this.en(),
            ja: this.ja()
        })
        // vm.db.insert({
        //     name: "words",
        //     data: {
        //         en: "'" + this.en() + "'",
        //         ja: "'" + this.ja() + "'",
        //         flag: 0
        //     }
        // });
        this.en("");
        this.ja("");
        if(!continu){
            m.route("/words");
        }
    }
    onunload(){
        vm.strage.words.set(vm.wordList);
    }
}

export default WordsNew;
