import {graphql, buildSchema} from 'graphql'

const schema = buildSchema(`
type Query {
    foo: String
}
type Schema {
    query: Query
}`);

const resolvers = {
    foo: () => 'bar',
};

const query = `
query myFirstQuery {
    foo
}`;


async function test() {
    try {
        const result = await graphql(schema, query, resolvers);
        console.log(result);
    } catch (err) {
        console.error(err);
    }
}

test();

// graphql(schema, query, resolvers)
//     .then((result) => console.log(result))
//     .catch((err) => console.warn(err));