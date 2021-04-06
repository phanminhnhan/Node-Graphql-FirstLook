const {books, authors} = require('../data/data')
const mongoDataMethods = require('../data/database')

const Author = require('../model/Author')
const Book = require('../model/Book')


const resolvers = {
    Query: {
        books: async (parent, args, {mongoDataMethods}) => 
            await mongoDataMethods.getAllBooks(),

        book: async (parent, {id}, {mongoDataMethods}) => 
            await mongoDataMethods.findBookById(id),



        authors: async (parent, args, { mongoDataMethods }) =>
			await mongoDataMethods.getAllAuthors(),

        author: async  (parent, {id}, {mongoDataMethods}) => 
            await mongoDataMethods.findAuthorById(id),
    }, 



    
    Book: {
        author: async ({authorId}, args, {mongoDataMethods}) => 
            await mongoDataMethods.findAuthorById(authorId)
    },
    Author: {
        books: async ({bookId}, args, {mongoDataMethods}) => 
            await mongoDataMethods.getAllBooks({authorId:bookId})
    },
    Mutation: {
        createAuthor: async (parent, args, {mongoDataMethods}) => await mongoDataMethods.createAuthor(args),
        createBook: async (parent, args, {mongoDataMethods}) => await mongoDataMethods.createBook(args)
    }
}

module.exports = resolvers