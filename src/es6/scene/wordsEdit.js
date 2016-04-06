import m from "mithril";
import navbar from "../components/navbar";
import wordCard from "../components/wordCard";
import Ctrl from "../ctrl/WordsEdit";

const WordsEdit = {
    controller: () => new Ctrl(),
    view: ctrl => {
        return m(".flex_content displayFlex flex_column", [
            navbar(ctrl.navbar),
            m("div", {
                "style": {
                    "flex": "1",
                    "padding": "1rem",
                    "padding-top": "6.5rem",
                    "height": "100%"
                }
            }, [
                wordCard({
                    en: ctrl.en,
                    ja: ctrl.ja
                }),
                m("br"),
                m("button.button-primary u-full-width", {
                    "style": {
                        "margin-bottom": "2rem"
                    },
                    "onclick": () => {
                        ctrl.add();
                    }
                }, ctrl.button)
            ])
        ]);
    }
};

export default WordsEdit;
