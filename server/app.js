const express = require('express')
const mongoose  = require('mongoose')

const {ApolloServer} = require('apollo-server-express')

const typeDefs = require('./schema/schema')
const resolvers = require('./resolver/resolver')


// connect db
const connectDb = async () => {
    try{
        await mongoose.connect(
            `mongodb+srv://phanminhnhan:1999@cluster0.7qfh0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
             {
                useCreateIndex: true,
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useFindAndModify: false
            }
        )
        console.log("mongodb is connected ")
    }catch (error){
        console.log(error.message)
        process.exit(1)
    }

}
connectDb()

// load data
const mongoDataMethods = require('./data/database')

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: () => ({
        mongoDataMethods
    })
})

const app = express()


server.applyMiddleware({app})


app.listen({
        port:8080
    },
    () =>{
        console.log(`Sevver is runiing at http://localhost:8080${server.graphqlPath}`)
    }

)