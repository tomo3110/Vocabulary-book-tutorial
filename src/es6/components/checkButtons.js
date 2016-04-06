import m from "mithril";

/**
@param{Object} args ボタンのアクション
@return{Object}
*/
const checkButtons = args => {
    return m(".displayFlex flex_row", {
        "style": {
            "flex": args.flex,
            "margin-bottom": "3rem"
        }
    }, [
        m("button", {
            "style": {
                "flex": "1",
                "margin-right": "0.5rem",
                "border-color": "#fb5973",
                "background": "#fb5973",
                "color": "#ffffff"
            },
            "onclick": args.l.action
        }, args.l.label),
        m("button", {
            "style": {
                "flex": "1",
                "margin-left": "0.5rem",
                "border-color": "#1be89a",
                "background": "#3ae0a1",
                "color": "#ffffff"
            },
            "onclick": args.r.action
        }, args.r.label)
    ]);
};

export default checkButtons;
