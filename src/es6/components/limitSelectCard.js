import m from "mithril";
import select from "./select";

const limitSelectCard = (args, value) => {
    return m(".card", {
        "style": {
            "margin-bottom": "1rem"
        }
    }, [
        m("label", {
            "for": args.name
        }, args.label),
        select(args, value)
    ]);
};

export default limitSelectCard;
