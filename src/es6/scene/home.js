import m from "mithril";
import navbar from "../components/navbar";
import homeMenu from "../components/homeMenu";
import Ctrl from "../ctrl/home";

let Home = {
    controller: () => new Ctrl(),
    view: ctrl => {
        return m(".flex_content displayFlex flex_column", [
            navbar(ctrl.navbar),
            m(".displayFlex flex_column", {
                "style": {
                    "flex": "1",
                    "padding": "1rem",
                    "padding-top": "6.5rem",
                    "height": "100%"
                }
            }, [
                homeMenu(ctrl.menu)
            ])
        ]);
    }
};

export default Home;
