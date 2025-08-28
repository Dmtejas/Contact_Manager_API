# HTTP client - ThunderClient inside the VS code extension

## dotenv - 
It is a module, probided by npm which maintians the environment variables like PORT number
## Usage : const dotenv = require('dotenv').config()
        using process module const PORT = process.env.PORT

res.json({}) --> Inside which json data can be sent to the client
res.status(200) --> Set the status code
app.use("route", require('route-module'))


Router :- const router = express.Router()
Usage :- router.get("/(endpoint)", (req, res) => {

})

other Usage :- router.route().get()
module.exports = Router //To export it to other modules or by server file


# Creating the contact controller
Here you define all the functions just to organize the endpoints in a better way

# Creating Middlware for ErrorHandling
Here you create a errorHandler function with a general structure as 
res.json({"Title": "", "message": err.message, "stackTrace": err.stackTrace})

# express-async-error-handler 
This is a middleware to basically avoid the necessity to write try catch in async functions when we handle promises

## Syntax : 
const getContacts = asyncHandler(async (req, res, next) => {

})

It implicitly calls the errorHandler that we have defined whenever something goes off