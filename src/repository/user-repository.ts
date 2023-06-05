
let usersList = [{ name: 'polina' }, { name: 'nikita' }]

export const UserRepository = {

	getAllUser() {
		return usersList
	},

	findeUsreByName(name: String) {
		let targetUser = usersList.filter(user => user.name === name)
		return targetUser

	},

	deleteUser(name: String) {

		for (let i = 0; i < usersList.length; i++) {
			if (usersList[i].name === name) {
				usersList.splice(i, 1)
				return usersList
			}
			return 404
		}

	},

	createUser(name: string) {
		const newUser = {
			name: name
		}
		usersList.push(newUser)
		return usersList
	}

}