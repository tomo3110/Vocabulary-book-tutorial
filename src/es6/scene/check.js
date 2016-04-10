import m from "mithril";
import navbar from "../components/navbar";
import limitSelectCard from "../components/limitSelectCard";
import Ctrl from "../ctrl/check";

let Check = {
    controller: () => new Ctrl(),
    view: ctrl => {
        return m(".flex_content displayFlex flex_column", [
            navbar(ctrl.navbar),
            m("form.displayFlex flex_column", {
                "style": {
                    "flex": "1",
                    "padding": "1rem",
                    "padding-top": "6.5rem",
                    "height": "100%"
                }
            }, [
                limitSelectCard(ctrl.content.select, ctrl.checkLimit),
                m("button", {
                    "style": {
                        "background": "#ffffff"
                    },
                    "onclick": () => {
                        console.log(ctrl.checkLimit());
                        return ctrl.goCheckRun();
                    }
                }, ctrl.content.button)
            ])
        ]);
    }
};

export default Check;
