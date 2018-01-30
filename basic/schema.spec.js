import {graphql} from "graphql";
import {resolvers, schema} from "./schema";

const tests = [
    {
        query: `mutation myFirstQuery {
        note(id: "01") {
            id name text
        }
    }`,
        expect: console.log
    }, {
        query: `query myFirstQuery {
        notes(ids: ["01"]) {
            id name
        }
    }`,
        expect: console.log
    }
];

async function test() {
    for (let {query, expect} of tests) {
        console.log(query, expect);
        try {
            const result = await graphql(schema, query, resolvers);
            expect(result);
        } catch (err) {
            console.error(err);
        }
    }
}

test();