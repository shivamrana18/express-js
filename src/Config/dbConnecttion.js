const mongoDB = require( 'mongoose' )
const connectionString = process.env.CONNECTION_STRING?.toString()

const dbConnect = async () => {
    try {
        // @ts-ignore
        let connect = await mongoDB.connect( connectionString )
        console.log( "Connected to MongoDB : ", connect.connection.host, "/", connect.connection.port )
    }
    catch ( err ) {
        console.log( "Error connecting to MongoDB : ", err )
        process.exit(1)
    }
}

module.exports = dbConnect