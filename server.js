const express = require('express')
const dotenv = require('dotenv')
const errorHandler = require('./middleware/errorHandle')

dotenv.config() //It configs the .env file

const app = express()

const PORT = process.env.PORT || 5000

//This is creating routes inside server file which can become messy
/*
app.get('/api/contacts/', (req, res) => {
	res.send("Sending all the contacts...!")
})
*/
app.use(express.json()) //Body parser to parse the json (to avoid undefined problem)
app.use("/api/contacts", require('./routes/contactRoutes'))
app.use(errorHandler)

app.listen(PORT, () => {
	console.log("Server is running at", PORT)
})



