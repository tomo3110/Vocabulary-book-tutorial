import m from "mithril";
/**
@param{String} item.value 内部の値
@param{String} item.label 選択肢として利用者に見せる値
*/
const option = item => {
    return m("option" ,{
        "value": item.value
    }, item.title);
};

const select = (args, value) => {
    return m("select.u-full-width", {
        "name": args.name,
        "size": args.size || 1,
        "id": args.name,
        "value": value()
    }, [
        args.option.map(item => option(item))
    ]);
};

export default select;
