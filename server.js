const express = require('express')
const dotenv = require('dotenv')

dotenv.config()

const app = express()

const PORT = process.env.PORT || 5000

//This is creating routes inside server file which can become messy
/*
app.get('/api/contacts/', (req, res) => {
	res.send("Sending all the contacts...!")
})
*/

app.use("/api/contacts", require('./routes/contactRoutes'))

app.listen(PORT, () => {
	console.log("Server is running at", PORT)
})



