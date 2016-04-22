import m from "mithril";
import vm from "../store";

class Check {
    constructor(){
        // vm.reload();
        this.navbar = vm.scene.check.navbar;
        this.content = vm.scene.check.content;
        this.checkLimit = m.prop(5);
    }
    goCheckRun(){
        const url = "/check/" + this.checkLimit();
        return m.route(url);
    }
}

export default Check;
