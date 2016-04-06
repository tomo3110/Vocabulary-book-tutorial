import vm from "../store";

class Words {
    constructor(){
        this.navbar = vm.scene.words.navbar;
        this.wordList = vm.wordList;
    }
}

export default Words;
