const Book = require('../model/Book')
const Author = require('../model/Author')

const mongoDataMethods={
    getAllAuthors: async (condition = null ) => condition === null  ?  await Author.find(): await Book.find(condition),
    createAuthor: async args => {
        const newAuthor = new Author(args)
        return await newAuthor.save()
    },
    findAuthorById: async id => await Author.findById(id),


    getAllBooks: async () => await Book.find(),
    createBook: async args  => {
        const newBook = new Book(args)
        return await newBook.save()
    },
    findBookById: async id => await Book.findById(id)
}


module.exports = mongoDataMethods