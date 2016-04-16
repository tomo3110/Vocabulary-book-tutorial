import m from "mithril";

const Words = {
    Item: function(args){
        this.index = m.prop(args.rowid);
        this.ja = m.prop(args.ja);
        this.en = m.prop(args.en);
        this.flag = m.prop(args.flag || false);
    },
    List: Array
};

export default Words;
