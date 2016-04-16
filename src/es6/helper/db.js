import m from "mithril";
import _ from "underscore";
import {Sql, Cmd} from "./mySqlite";
// "vocablary_book"
class DB {
    constructor(name){
        this.init(name);
    }
    init(name){
        this.db = undefined;
        this.db = new Sql({name: name, location: 1});
        this.cmd = new Cmd();
    }
    createTable(args){
        this.db.exec(this.cmd.createTable, {
            name: args.name,
            colomes: args.colomes
        });
    }
    insert(args){
        this.db.exec(this.cmd.insert, {
            name: args.name,
            colomes: _.keys(args.data),
            data: _.values(args.data)
        });
    }
    update(args){
        this.db.exec(this.cmd.update, {
            name: args.name,
            data: args.data,
            where: args.where
        });
    }
    select(args){
        let d = m.deferred();
        this.db.exec(this.cmd.select, {
            name: args.name,
            where: args.where
        }).then(res => {
            d.resolve(_.values(res));
        });
        return d.promise;
    }
    delete(args){
        this.db.exec(this.cmd.delete, {
            name: args.name,
            where: args.where
        });
    }
}

export default DB;
