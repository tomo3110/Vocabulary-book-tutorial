import m from "mithril";

const Words = {
    Item: function(args){
        this.ja = m.prop(args.ja);
        this.en = m.prop(args.en);
        this.misCount = m.prop(args.misCount || 0);
    },
    List: Array
};

export default Words;
