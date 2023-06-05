import express from 'express'
import bodyParser from 'body-parser'
import { usersRoute } from './routers/user-routes'

const app = express()
const port = process.env.PORT || 3234


app.use(bodyParser({}))

app.use('/users', usersRoute)

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
}) 
