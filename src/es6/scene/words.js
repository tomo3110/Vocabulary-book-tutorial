import m from "mithril";
import navbar from "../components/navbar";
import wordList from "../components/wordList";
import Ctrl from "../ctrl/words";

let Words = {
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
                wordList(ctrl.wordList)
            ])
        ]);
    }
};

export default Words;
