import m from "mithril";
import _ from "underscore";
import Words from "./model/words";
import Check from "./model/check";

let vm = {
    scene: {
        home: {
            navbar: {
                title: "ホーム",
                l_btn: {
                    label: "設定",
                    act: function(){}
                },
                r_btn: {
                    label: "ヘルプ",
                    act: function(){}
                }
            },
            content: {
                menu: [
                    {
                        label: "単語帳へ",
                        url: "/words",
                        tips: [
                            "単語の管理ができます。",
                            "まずはここで単語を登録してください。"
                        ]
                    },{
                        label: "暗記カードへ",
                        url: "/check",
                        tips: [
                            "単語の暗記ができます。",
                            "直感とスピードが大切",
                            "『わかる』『わからない』で分ける。"
                        ]
                    },{
                        label: "テストへ",
                        url: "/test",
                        tips: [
                            "単語の復習ができます。",
                            "正しい単語の意味を選択してください。"
                        ]
                    }
                ]
            }
        },
        words: {
            navbar: {
                title: "単語帳",
                l_btn: {
                    label: "戻る",
                    act: () => {
                        return m.route("/home");
                    }
                },
                r_btn: {
                    label: "追加",
                    act: () => {
                        return m.route("/words/new");
                    }
                }
            },
            content: {
                list: []
            }
        },
        wordsNew: {
            navbar: {
                title: "単語を追加",
                l_btn: {
                    label: "戻る",
                    act: () => {
                        return m.route("/words");
                    }
                },
                r_btn: {
                    label: "",
                    act: function(){}
                }
            },
            content: {
                button1: "追加する",
                button2: "続けて追加"
            }
        },
        wordsEdit: {
            navbar: {
                title: "単語を編集",
                l_btn: {
                    label: "戻る",
                    act: () => {
                        return m.route("/words");
                    }
                },
                r_btn: {
                    label: "",
                    act: function(){}
                }
            },
            content: {
                button: "登録する"
            }
        },
        check: {
            navbar: {
                title: "暗記カード - メニュー",
                l_btn: {
                    label: "戻る",
                    act: function(){
                        return m.route("/home");
                    }
                },
                r_btn: {
                    label: "ヘルプ",
                    act: function(){}
                }
            },
            content: {
                select: {
                    name: "checkLimitSelect",
                    label: "問題数の選択",
                    option: [
                        {
                            value: 5,
                            title: "5問"
                        },{
                            value: 10,
                            title: "10問"
                        },{
                            value: 15,
                            title: "15問"
                        },{
                            value: 20,
                            title: "20問"
                        }
                    ]
                },
                button: "暗記カードへ"
            }
        },
        checkRun: {
            navbar: {
                title: "暗記カード - 実践",
                l_btn: {
                    label: "戻る",
                    act: function(){
                        return m.route("/check");
                    }
                },
                r_btn: {
                    label: "",
                    act: function(){}
                }
            },
            content: {}
        },
        test: {
            navbar: {
                title: "テスト - メニュー",
                l_btn: {
                    label: "戻る",
                    act: function(){
                        return m.route("/home");
                    }
                },
                r_btn: {
                    label: "ヘルプ",
                    act: function(){}
                }
            },
            content: {}
        },
        TestRun: {
            navbar: {
                title: "テスト - 実践",
                l_btn: {
                    label: "戻る",
                    act: function(){
                        return m.route("/test");
                    }
                },
                r_btn: {
                    label: "",
                    act: function(){}
                }
            },
            content: {}
        },
        TestResult: {
            navbar: {
                title: "テスト - 結果",
                l_btn: {
                    label: "戻る",
                    act: function(){
                        return m.route("/home");
                    }
                },
                r_btn: {
                    label: "",
                    act: function(){}
                }
            },
            content: {}
        }
    },
    init: () => {
        vm.wordList = new Words.List();
        vm.checkList = new Check.List();
        // this.addAll(this.list, []);
        return;
    },
    add: (list, addItem) => {
        if(addItem){
            list.push(new Words.Item(addItem));
            return;
        }
    },
    addAll: (list, addList) => {
        addList.map(addItem => vm.add(list, addItem));
        return;
    },
    addCheck: addItem => {
        vm.checkList.push(new Check.Item(addItem));
        return;
    },
    addCheckAll: addList => {
        addList.map(addItem => vm.addCheck(addItem));
        return;
    },
    getUrlParam: key => {
        const deferred = m.deferred();
        deferred.resolve(() => {
            let res = Number(m.route.param(key));
            return res - 1;
        });
        return deferred.promise;
    },
    getCheckWords: (words, limit)  => {
        return _(words).sample(limit);
    },
    incrimentCount: (num, limit) =>{
        if(num() === limit()){
            num(0);
            return;
        } else {
            num(num() + 1);
            return;
        }
    },
    /**
    *@param{Function}num 配列インデックス、m.prop(0)で作成したgetter-setter関数
    *@param{Function}incrimentFunc 配列インデックスのインクリメントを行う関数
    *@param{Function}d m.deferredで作成したpromiseファクトリー
    */
    getNextWord1: (num, limit) => {
        //引数の型チェック
        if(typeof num() === Number)return;
        if(typeof limit() === Number)return;
        if(typeof vm.checkList[num()].flag() === Boolean)return;
        try {
            switch (vm.checkList[num()].flag()) {
                case true: {
                    vm.incrimentCount(num, limit);
                    return vm.getNextWord1(num, limit);
                }
                case false: {
                    return vm.checkList[num()];
                }
            }
        } catch (e) {
            console.error(e.message);
        }
    },
    checkEndFlag: limit => {
        const result = _.countBy(vm.checkList, item => {
            return (item.flag() === true) ? "ok" : "no";
        });
        return (limit() + 1 === result.ok);
    }
};

export default vm;
