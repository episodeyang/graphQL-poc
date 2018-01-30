import {buildSchema} from 'graphql';
import requireText from "require-text";
import {tests} from "./schema.spec";
import {Collection} from "./collection";


export const schema = buildSchema(requireText("./schema.graphqls", require));

const notes = [{id: "01", title: 'hey', text: '# Header\nand this works'}];
const Notes = new Collection("note", null, notes);
const bindrs = [{id: "01", title: 'hey', notes: ["01"]}];
const Bindrs = new Collection("bindr", null, bindrs);

export const resolvers = {
    Query: {},
    // need to add a nested logic. Do with Bindr and
    note: Notes.find,
    notes: Notes.findAll,
    bindr: Bindrs.find,
    bindrs: Bindrs.findAll
};



