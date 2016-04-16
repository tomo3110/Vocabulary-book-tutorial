import m from "mithril";

const Check = {
    Item: function(args){
        this.index = m.prop(args.rowid);
        this.ja = m.prop(args.ja);
        this.en = m.prop(args.en);
        this.flag = m.prop(args.flag || 0);
    },
    List: Array
};

export default Check;
