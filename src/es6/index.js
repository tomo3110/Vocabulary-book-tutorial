import m from "mithril";
import navbar from "./components/navbar";
import store from "./store";
import Test from "././ctrl/checkRun";

import Home from "./scene/home";
import Words from "./scene/words";
import WordsNew from "./scene/wordsNew";
import WordsEdit from "./scene/WordsEdit";
import CheckRun from "./scene/CheckRun";

import "skeleton";
import "../css/style.css";

class Ctrl {
    constructor(name) {
        this.name = m.prop(name);
    }
}

store.init();
// console.log(store.wordList.length);
store.addAll(store.wordList, [
    {
        en: "hello",
        ja: "こんにちは"
    },{
        en: "Apple",
        ja: "りんご"
    },{
        en: "window",
        ja: "窓"
    }
]);

const test = new Test();
// console.log(JSON.stringify(test.word()));
// test.isFlag();
// test.getNextWord();
console.log(JSON.stringify(test.word()));
// console.log(store.wordList.length);
// console.log(JSON.stringify(store.wordList));

const test1 = {
    controller: () => new Ctrl("tomokazu"),
    view: (ctrl)=>{
        return m("div", [
            navbar(store.scene.words.navbar),
            m(".displayFlex flex_column nowrap", {
                "style": {
                    "padding-top": "6rem"
                }
            }, [
                m(".card", {
                    "style": {
                        "margin": "0.5em"
                    }
                }, [
                    m("label", {
                        "for": "hoge"
                    }, "test"),
                    m("input", {
                        "type": "text",
                        "class":"u-full-width",
                        "id": "hoge",
                        "value": ctrl.name(),
                        "oninput": m.withAttr("value", ctrl.name)
                    }),
                    m("button", {
                        "class":"u-full-width"
                    },"submit")
                ]),
                m(".card", {
                    "style": {
                        "margin": "0.5em"
                    }
                }, [
                    m("label", {
                        "for": "hoge"
                    }, "test"),
                    m("input", {
                        "type": "text",
                        "class":"u-full-width",
                        "id": "hoge",
                        "value": ctrl.name(),
                        "oninput": m.withAttr("value", ctrl.name)
                    }),
                    m("button", {
                        "class":"u-full-width"
                    },"submit")
                ]),
                m(".card", {
                    "style": {
                        "margin": "0.5em"
                    }
                }, [
                    m("label", {
                        "for": "hoge"
                    }, "test"),
                    m("input", {
                        "type": "text",
                        "class":"u-full-width",
                        "id": "hoge",
                        "value": ctrl.name(),
                        "oninput": m.withAttr("value", ctrl.name)
                    }),
                    m("button", {
                        "class":"u-full-width"
                    },"submit")
                ]),
                m(".card", {
                    "style": {
                        "margin": "0.5em"
                    }
                }, [
                    m("label", {
                        "for": "hoge"
                    }, "test"),
                    m("input", {
                        "type": "text",
                        "class":"u-full-width",
                        "id": "hoge",
                        "value": ctrl.name(),
                        "oninput": m.withAttr("value", ctrl.name)
                    }),
                    m("button", {
                        "class":"u-full-width"
                    },"submit")
                ])
            ])
        ]);
    }
};

// function getData(){
//     m.request({
//         method: "GET",
//         url: "https://script.google.com/macros/s/AKfycbyscrb4rLWzr3im1WCdAbQWDl-k14mRyAyGkuVBzTyPwm9uSNQ/exec",
//         initialValue: []
//     }).then(function(res){
//         console.log(res);
//     });
// }
//getData();
// m.mount(document.body, test);
// m.route(document.body, "/", {
//     "/": Home,
//     "/home": Home,
//     "/words": Words,
//     "/words/new": WordsNew,
//     "/words/edit": WordsEdit,
//     "/check": Check,
//     "/check/run": CheckRun,
//     "/test": Test,
//     "/test/run": TestRun,
//     "/test/result": TestResult
// });
m.route(document.body, "/check/2", {
    "/home": Home,
    "/words": Words,
    "/words/new": WordsNew,
    "/words/:id": WordsEdit,
    "/check/:id": CheckRun
});
