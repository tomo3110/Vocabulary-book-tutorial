import m from "mithril";

const wordCard = args => {
    return m(".card", {
        "style": {
            "flex": args.flex,
            "margin-bottom": "1rem"
        }
    }, [
        m("div", [
            m("label", {
                "for": "en_Input"
            }, "英語"),
            m("input", {
                "type": "text",
                "class":"u-full-width",
                "id": "en_Input",
                "value": args.en(),
                "oninput": m.withAttr("value", args.en)
            })
        ]),
        m("div", [
            m("label", {
                "for": "ja_Input"
            }, "日本語"),
            m("input", {
                "type": "text",
                "class":"u-full-width",
                "id": "ja_Input",
                "value": args.ja(),
                "oninput": m.withAttr("value", args.ja)
            })
        ])
    ]);
};

export default wordCard;
