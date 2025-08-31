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

So either we need to handle the promise usind try catch block or we can use the middleware asyncHandler which handles the promise and calls errorHandler if it encounters any


With asyncHandler you just thow the error so it implicitly calls the next(error) so it removes the necessity to write try catch block by ourselves

## Connecting a DB with Mongoose

Install the mongoDB plugin and write .env file using MONGO_URI from atlas
create a config file which has an async function which establish the connection with mongoDB
mongoose.connect(process.env.MONGO_URI)
Then you can log connection.connections.host and connection.connections.name

Then import that file into server.js and call the function defined 

Create a model - for schema
mongoose.Schema({},{timestamp: true})

Then export the schema
module.exports = mongoose.model('name-of-collection', schemaName)

import it in contactController to implement CRUD operations

Use await Contact.find() to get all the contacts
Use await Contact.create({json}) to create the contact
Use await Contact.findByIdAndUpdate(id, body, {new: true})
Use await Contact.findByIdAndDelete(id)

## Authorization and Authentication


