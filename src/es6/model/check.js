import m from "mithril";

const Check = {
    Item: function(args){
        this.rowid = m.prop(args.rowid);
        this.ja = m.prop(args.ja);
        this.en = m.prop(args.en);
        this.flag = m.prop(args.flag || false);
    },
    List: Array
};

export default Check;
