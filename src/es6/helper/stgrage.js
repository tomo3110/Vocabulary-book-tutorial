import m from "mithril";

class Localstrage {
    constructor(name){
        this.localStorage = window.localStorage;
        this.key = m.prop(name);
    }
    set(value){
        this.localStorage.setItem(this.key(), JSON.stringify(value));
    }
    get(){
        const d = m.deferred();
        d.resolve(JSON.parse(this.localStorage.getItem(this.key())));
        return d.promise;
    }
}

export default Localstrage;
