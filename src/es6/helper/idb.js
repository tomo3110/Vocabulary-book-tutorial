class IDB {
    constructor(args){
        this.init();
        this.idbReq = this.indexedDB.open(args.name, args.version);
    }
    init(){
        this.indexedDB = window.indexedDB ||window.webkitIndexedDB|| window.msIndexedDB;
        this.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
        this.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange|| window.msIDBKeyRange;
        this.IDBCursor = window.IDBCursor || window.webkitIDBCursor;
    }
    addStore(args){ //args = Array
        this.idbReq.onupgradeneeded = function(event){
            const db = event.target.result;
            args.map(item => {
                return db.createObjectStore(
                    item.name,
                    {
                        keyPath: item.keyPath,
                        autoIncrement: args.autoIncrement
                    }
                );
            });
        }
    }
}
export default IDB;
