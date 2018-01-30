const ot = {
    apply: function apply(ob, op) {
        if (op.add) {
            return ob + op.add;
        } else if (typeof op.mul !== "undefined") {
            return ob * op.mul
        } else {
            return ob;
        }
    }
};

export class Collection {
    constructor(name, schema, data) {
        this.name = name;
        this.data = data || [];
    }

    find = async ({id: _id}) => {
        return this.data.find(({id}) => (id == _id))
    };

    findAll = async ({ids = []}) => {
        return this.data.filter(({id}) => ids.indexOf(id) >= 0)
    };

    applyOp = async ({id, op}) => {
        return ot.apply(this.find(id), op);
    }
}
