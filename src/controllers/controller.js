const asyncHandler = require( 'express-async-handler' )

//@desc GET Request
//@param /user/getUser
const getUser = asyncHandler( async ( req, res ) => {
    res.status( 200 ).json( {
        messgae: `Get user using GET request`
    } )
} )

//@desc POST Request
//@param /user/createUser
const createUser = asyncHandler( async ( req, res ) => {
    res.status( 201 ).json( {
        messgae: `User added using POST request`
    } )
} )

//@desc PUT Request
//@param /user/updateUser/:id
const updateUser = asyncHandler( async ( req, res ) => {
    res.status( 200 ).json( {
        messgae: `User updated using PUT request : ${ req.params.id }`
    } )
} )

module.exports = { getUser, createUser, updateUser }