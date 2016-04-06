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
                    flex: "4",
                    act: ctrl.isView,
                    view: ctrl.view
                }),
                m("hr"),
                checkButtons({
                    flex: "1",
                    r: {
                        action: () => {
                            ctrl.isFlag();
                            if(ctrl.checkEndFlag()){
                                m.route("/home");
                            }
                            ctrl.getNextWord();
                        },
                        label: "わかる"
                    },
                    l: {
                        action: () => {
                            ctrl.getNextWord();
                        },
                        label: "わからない"
                    }
                })
            ])
        ]);
    }
};

export default CheckRun;
