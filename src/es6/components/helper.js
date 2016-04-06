import m from "mithril";

let helper = {
    component: (args) => {
        return {
            controller: args.ctrl || function(){},
            view: args.view
        };
    },
    getUrlParam: key => {
        let deferred = m.deferred();
        deferred.resolve(() => {
            let res = Number(m.route.param(key));
            return res - 1;
        });
        return deferred.promise;
    }
};

export default helper;
