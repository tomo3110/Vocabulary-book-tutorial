import m from "mithril";
import Hammer from "hammerjs";

const checkCard = args => {
    return m(".card displayFlex", {
        // "class": args.isAnimation() ? "animated fadeOutRight" : "",
        "style": {
            "flex": args.flex,
            "margin-bottom": "1rem",
            "align-items": "center"
        },
        "config": (element, isInit) => {
            const hammer = new Hammer(element);
            try {
                if(isInit)return;
                hammer.on("swipeleft", () => args.l_act(element));
                hammer.on("swiperight", () => args.r_act(element));
                hammer.on("tap", () => args.t_act());
                return;
            } catch(e) {
                console.log(e);
                throw new Error("hammerJs swaip & tap events undefined");
            }
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
