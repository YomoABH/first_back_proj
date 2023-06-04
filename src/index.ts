import express, { Request, Response } from 'express'
import bodyParser from 'body-parser'

const app = express()
const port = process.env.PORT || 3234

let usersList = [{ name: 'polina' }, { name: 'nikita' }]

app.use(bodyParser({}))

app.get('/users', (req, res) => {
	res.send(usersList)
})

app.get('/users/:name', (req, res) => {
	let name = req.params.name
	let targetUser = usersList.filter(user => user.name === name)
	res.send(targetUser)
})

app.delete('/users/:name', (req, res) => {

	for (let i = 0; i < usersList.length; i++) {
		if (usersList[i].name === req.params.name) {
			usersList.splice(i, 1)
			res.send(204)
			return
		}
	}
	res.send(404)
})
app.put('/users/:name', (req, res) => {
	let user = usersList.find(user => user.name === req.params.name)

	if (user) {
		user.name = req.body.name
		res.status(200).send(usersList)
	} else {
		res.send(404)
	}
})

app.post('/users', (req, res) => {
	const newUser = {
		name: req.body.name
	}
	usersList.push(newUser)
	res.status(201).send(usersList)
})


app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
}) 
