import vm from "../store";

class Home {
    constructor() {
        vm.reload();
        this.navbar = vm.scene.home.navbar;
        this.menu = vm.scene.home.content.menu;
    }
}

export default Home;
