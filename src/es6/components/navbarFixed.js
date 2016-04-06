import m from "mithril";
// import helper from "./helper";

const navbar = (args)=>{
    return m(".displayFlex", {
        "style": {
            "flex": "1"
        }
    },[
        m(".displayFlex card flex_row", {
            "style": {
                "flex": 1,
                "align-items": "center",
                "padding-top": "2rem"
            }
        }, [
            m("a", {
                "style": {
                    "flex": "1",
                    "text-align": "center",
                    "font-size": "10px"
                },
                "onclick": args.l_btn.act
            }, args.l_btn.label),
            m("div", {
                "style": {
                    "flex": "3",
                    "text-align": "center"
                }
            }, args.title),
            m("a", {
                "style": {
                    "flex": "1",
                    "text-align": "center",
                    "font-size": "10px"
                },
                "onclick": args.r_btn.act
            }, args.r_btn.label)
        ])
    ]);
}

export default navbar;
