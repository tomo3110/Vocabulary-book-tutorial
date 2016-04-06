import m from "mithril";

const checkCard = args => {
    return m(".card displayFlex", {
        "style": {
            "flex": args.flex,
            "margin-bottom": "1rem",
            "align-items": "center"
        },
        "onclick": () => {
            args.act()
        }
    }, [
        m(".flex_content", [
            m("h3", {
                "style": {
                    "height": "1em",
                    "text-align": "center"
                }
            }, args.en()),
            m("hr"),
            m("h3", {
                "style": {
                    "height": "1em",
                    "text-align": "center"
                }
            }, args.view() ? args.ja() : "")
        ])
    ]);
};

export default checkCard;
