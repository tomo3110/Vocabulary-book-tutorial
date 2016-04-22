import m from "mithril";
import _ from "underscore";
import Words from "./model/words";
import Check from "./model/check";
import LS from "./helper/stgrage";
// import DB from "./helper/db";
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
        vm.strage = {
            words: new LS("words")
        };
        vm.strage.words.set([
            {rowid: 0, en: "hello", ja: "こんにちは"},
            {rowid: 1, en: "Apple", ja: "りんご"},
            {rowid: 2, en: "window", ja: "窓"}
        ]);
        vm.strage.words.get().then(res => {
            if(res){
                vm.addAll(vm.wordList, res);
            }
        });
        return;
    },
    add: (list = [], addItem) => {
        if(addItem){
            list.push(new Words.Item(addItem));
            return;
        }
    },
    addAll: (list = [], addList) => {
        addList.map(addItem => vm.add(list, addItem));
        return;
    },
    addCheck: addItem => {
        if(addItem){
            vm.checkList.push(new Check.Item(addItem));

        }
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
            return res;
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
    * getNextWord1
    * @param{Function} [num] 配列インデックス、m.prop(0)で作成したgetter-setter関数
    * @param{Function} [limit] 配列インデックスのインクリメントを行う関数
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
            // console.error(e.message);
            return;
        }
    },
    checkEndFlag: limit => {
        const result = _.countBy(vm.checkList, item => {
            return item.flag() ? "ok" : "no";
        });
        return (limit() + 1 === result.ok);
    },
    // featch(args){
    //     vm.db.select({
    //         name: args.name,
    //         where: args.where
    //     }).then(res => {
    //         vm.addAll(vm.wordList, res);
    //     });
    // }
    save: (data) => {
        vm.strage.set(data);
    },
    fetch: (key) => {
        vm.strage.key(key || "words");
        return vm.strage.get();
    },
    reload: () => {
        vm.addAll(vm.wordList, vm.strage.get());
    }
};

export default vm;
