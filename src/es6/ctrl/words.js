import vm from "../store";
// import Model from "../model/words";

class Words {
    constructor(){
        // vm.reload();
        this.navbar = vm.scene.words.navbar;
        this.wordList = vm.wordList;
    }
    onunload(){
        vm.strage.words.set(this.wordList);
    }
}

export default Words;
