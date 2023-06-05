import { Router } from "express";
import { UserRepository } from "../repository/user-repository";

export const usersRoute = Router({})

let usersList = [{ name: 'polina' }, { name: 'nikita' }]


usersRoute.get('/', (req, res) => {
	res.send(UserRepository.getAllUser())
})

usersRoute.get('/:name', (req, res) => {
	const targetUser = UserRepository.findeUsreByName(req.params.name)
	res.send(targetUser)
})

usersRoute.delete('/:name', (req, res) => {
	const response = UserRepository.deleteUser(req.params.name)
	res.send(response)
})

usersRoute.post('/', (req, res) => {
	const newUserList = UserRepository.createUser(req.body.name)
	res.status(201).send(newUserList)
})
