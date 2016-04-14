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
                    t_act: () => {
                        if(ctrl.view())return;
                        m.startComputation();
                        ctrl.isView();
                        m.endComputation();
                        return;
                    },
                    l_act: (element) => {
                        // const el = element.classList;
                        m.startComputation();
                        ctrl.getNextWord();
                        console.log(element);
                        // el.add("animated");
                        // el.add("infinite");
                        // el.add("bounce");
                        m.endComputation();
                        return;
                    },
                    r_act: () => {
                        m.startComputation();
                        ctrl.isFlag();
                        if(ctrl.checkEndFlag()){
                            m.route("/home");
                            m.endComputation();
                        } else {
                            ctrl.getNextWord();
                            m.endComputation();
                        }
                        return;
                    },
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
                                return;
                            } else {
                                ctrl.getNextWord();
                                return
                            }
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
