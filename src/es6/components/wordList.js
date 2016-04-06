import m from "mithril";
const wordItem = (item, index) => {
    return m(".card displayFlex flex_row", {
        "style": {
            "margin-bottom": "1rem",
            "align-items": "center",
            "padding": "2rem"
        },
        "onclick": () => {
            m.route("/words/" + index);
            // console.log(index);
        }
    }, [
        m("div", {
            "style": {
                "flex": "1"
            }
        }, item.en()),
        m("div", {
            "style": {
                "flex": "1"
            }
        }, item.ja())
    ]);
};

const wordList = list => {
    return m("div", {
        "style": {
            "flex": "1"
        }
    }, [
        list.map((item, index) => wordItem(item, index))
    ]);
};

export default wordList;
