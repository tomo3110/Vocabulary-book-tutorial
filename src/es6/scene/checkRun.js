import m from "mithril";
import navbar from "../components/navbar";
import checkCard from "../components/checkCard";
import Ctrl from "../ctrl/checkRun";
import checkButtons from "../components/checkButtons";

let CheckRun = {
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
                checkCard({
                    en: ctrl.word().en,
                    ja: ctrl.word().ja,
                    isAnimation: ctrl.animationFlag,
                    flex: "4",
                    t_act: () => ctrl.t_act(),
                    l_act: () => ctrl.l_act(),
                    r_act: () => ctrl.r_act(),
                    view: ctrl.view
                }),
                m("hr"),
                checkButtons({
                    flex: "1",
                    r: {
                        action: () => ctrl.r_act(),
                        label: "わかる"
                    },
                    l: {
                        action: () => ctrl.l_act(),
                        label: "わからない"
                    }
                })
            ])
        ]);
    }
};

export default CheckRun;
