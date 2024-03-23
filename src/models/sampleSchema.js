const { checkSchema } = require( 'express-validator' );

const schema = checkSchema( {
    userName: {
        exists: {
            errorMessage: "User name is required",
            options: { checkFalsy: true },
        },
        isString: { errorMessage: "User name should be string" },
    },
    password: {
        exists: { errorMessage: "Password is required" },
        isString: { errorMessage: "password should be string" },
        isLength: {
            options: { min: 5 },
            errorMessage: "Password should be at least 5 characters",
        },
    },
    email: {
        isEmail: { errorMessage: "Please provide valid email" },
    },
    gender: {
        isString: { errorMessage: "Gender should be string" },
        isIn: {
            options: [ [ "Male", "Female", "Other" ] ],
            errorMessage: "Gender is invalid",
        },
    },
    dateOfBirth: {
        isDate: { errorMessage: "DOB should be string" },
    },
    phoneNumber: {
        isString: { errorMessage: "phone number should be string" },
        custom: {
            options: ( value ) => {
                value.length === 10;
            },
            errorMessage: "Phone number should be 10 digits",
        }
    },
} )

export default schema;