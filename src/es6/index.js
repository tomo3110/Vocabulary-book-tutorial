import m from "mithril";
import navbar from "./components/navbar";
import store from "./store";
import Test from "./ctrl/checkRun";
// import Cmd from "./helper/mySqlite";

import Home from "./scene/home";
import Words from "./scene/words";
import WordsNew from "./scene/wordsNew";
import WordsEdit from "./scene/WordsEdit";
import Check from "./scene/Check";
import CheckRun from "./scene/CheckRun";

import "skeleton";
import "animate.css";
import "../css/style.css";

class Ctrl {
    constructor(name) {
        this.name = m.prop(name);
    }
}
document.addEventListener("deviceready", store.init, false);
// store.featch();
// store.init();
// console.log(store.wordList.length);
// store.addAll(store.wordList, [
//     {
//         index: 0,
//         en: "hello",
//         ja: "こんにちは"
//     },{
//         index: 1,
//         en: "Apple",
//         ja: "りんご"
//     },{
//         index: 2,
//         en: "window",
//         ja: "窓"
//     }
// ]);

// const cmd = new Cmd();
//
// console.log(cmd.select({
//     name: "test"
//     // where: "flag = " + true
//     // data: [
//     //     {
//     //         colome: "id",
//     //         value: 1
//     //     },{
//     //         colome: "name",
//     //         value: "'saitou'"
//     //     },{
//     //         colome: "age",
//     //         value: "'22'"
//     //     }
//     // ]
// }));

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
m.route(document.body, "/home", {
    "/home": Home,
    "/words": Words,
    "/words/new": WordsNew,
    "/words/:id": WordsEdit,
    "/check/:id": CheckRun,
    "/check": Check
});
