const express = require('express')
const errorHandler = require( '../middleware/errorHandler' )
const validator = require('express-validator')
const router = express.Router()

const app = express()
app.use(errorHandler)

const customValidator = new validator.ExpressValidator(
    {
      isPostID: async value => {
        // Verify if the value matches the post ID format
      },
    },
    {
      muteOffensiveWords: value => {
        // Replace offensive words with ***
      },
    },
  );


/** Approach 1 */
router.route('/getUser').get((req, res) => {
    res.cookie("name","shivam",{expires: new Date(Date.now() + 900000), httpOnly: true}) // set cookies
    console.log("Cookies get",req.headers) // get cookies
    // Note : Cookies should be set before sending the status and response, else it would give error
    res.status(200).json({
        messgae : `Get user using GET request`
    })
})


// check() is a middleware used to validate
// the incoming data as per the fields
router.route( '/createUser' ).post( [
    validator.check( 'email', 'Email length should be 10 to 30 characters' )
        .isEmail().isLength( { min: 10, max: 30 } ),
    validator.check( 'name', 'Name length should be 10 to 20 characters' )
        .isLength( { min: 10, max: 20 } ),
],validator.query('filter').isString().contains('name').withMessage('name is not included in query'), ( req, res ) => {
     // validationResult function checks whether
    // any occurs or not and return an object
    console.log("Validation result :", validator.validationResult(req))
    console.log( "Body :", req.body )
    res.status( 201 ).json( {
        messgae: `User added using POST request`
    } )
} )

router.route('/updateUser/:id').put((req, res) => {
    res.status(200).json({
        messgae : `User updated using PUT request : ${req.params.id}`
    })
})

router.route('/getError').post((req, res) => {
    console.log("Body :", req.body)
    if(true){  
        res.status(500);
        throw new Error('Ye to Error hai')
    }
    else{
         res.status(200).json({message:"Pass hai"})
    }
})

/** Approach 2 */
// import {getUser,createUser, updateUser} from '../controllers/controller'

// router.route('/getUser').get(getUser)

// router.route('/createUser').post(createUser)

// router.route('/updateUser/:id').put(updateUser)

module.exports = router