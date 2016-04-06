import m from "mithril";

const tipItem = tip => {
    return m("li", tip);
}

const homeMenuItem = item => {
    return m(".card", {
        "style": {
            "margin-bottom": "1rem"
            // "flex": "1"
        }
    },[
        m("button", {
            "class": "u-full-width",
            "onclick": () =>{
                m.route(item.url)
            }
        }, item.label),
        m("ul", {
            "style": {
                "padding": "0.5rem",
                "margin-bottom": "0"
            }
        },[
            item.tips.map(tip => tipItem(tip))
        ])
    ]);
};

const homeMenu = list => {
    return m(".displayFlex flex_column", {
        "style": {
            "flex": "1"
        }
    }, [
        list.map(item => homeMenuItem(item))
    ]);
};

export default homeMenu;
