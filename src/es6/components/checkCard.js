import m from "mithril";
import Hammer from "hammerjs";

const checkCard = args => {
    return m(".card displayFlex", {
        "style": {
            "flex": args.flex,
            "margin-bottom": "1rem",
            "align-items": "center"
        },
        "config": (element, isInit/*, context*/) => {
            try {
                if(isInit)return;
                const hammer = new Hammer(element);
                hammer.on("swipeleft", () => args.l_act());
                hammer.on("swiperight", () => args.r_act());
                hammer.on("tap", () => args.t_act());
            } catch(e) {
                console.log(e);
            }
            return;
            // context.onunload = () => {
            //     hammer.
            // };
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
