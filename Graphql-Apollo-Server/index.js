const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
    type Book {
        title: String,
        author: String,
        publisher: String,
        price: Float
    }

    type Query {
        books: [Book]
    }
`;

const books = [
    {
        title: 'The Awakening',
        author: 'Kate Chopin',
        publisher: 'Rupa',
        price: '100'
    },
    {
        title: 'City of Glass',
        author: 'Paul Auster',
        publisher: 'Packt',
        price: '200'
    }
];

const resolvers = {
    Query: {
        books: () => books
    }
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`);
});