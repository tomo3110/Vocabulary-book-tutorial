import m from "mithril";
export class Cmd {
    createTable(args){
        let resColomes = "";
        args.colomes.map((item, index) => {
            (index === 0) ? resColomes += item : resColomes += ", " + item;
        });
        return "CREATE TABLE IF NOT EXISTS " + args.name + " (" + resColomes + ")";
    }
    insert(args){
        let resData = "";
        args.data.map((item, index) => {
            (index === 0) ? resData += item : resData += ", " + item;
        });
        return "INSERT INTO " + args.name + " VALUES(" + resData + ");";
    }
    delete(args){
        return "DELETE FROM " + args.name + " WHERE " + args.where;
    }
    select(args){
        return (args.where) ? "SELECT * FROM " + args.name + " WHERE " + args.where : "SELECT * FROM " + args.name;
        // return "SELECT * FROM " + args.name + " WHERE " + args.where;
    }
    update(args){
        let resData = "";
        args.data.map((item, index) => {
            (index === 0) ? resData += item : resData += ", " + item;
        });
        return "UPDATE " + args.name + " SET " + resData + " WHERE " + args.where;
    }
}

export class Sql {
    constructor(db){
        this.init(db);
    }
    init(db){
        // console.dir(window.sqlitePlugin);
        this.db = window.sqlitePlugin.openDatabase(db);
        // this.db = window.openDatabase(db.name, "1.0", "words", 10000);
    }
    exec(cmd, args){
        let d = m.deferred();
        this.db.transaction(
            tx => {
                tx.executeSql(cmd(args), [], (t, r) => {
                    d.resolve(r.rows);
                });
            },
            err => {
                console.log("code: " + err.code + "; msg: " + err.message + ";");
            }
        );
        return d.promise;
    }
}
