//
//// Primitive Types
//
let userName: string
userName = 'Dre'

let userAge: number
userAge = 35

let isValid = true
isValid = false

//
//// Union Types
//
type StringOrNumber = string | number
let userID: StringOrNumber = 'abc123'
userID = 123

//
//// Object Types
//
type User = {
	name: string
	age: number
	isAdmin: boolean
	id: string | number
}
let user: User

user = {
	name: 'Dre',
	age: 34,
	isAdmin: true,
	id: 'abc123',
}

//
//// Array Types
//
let hobbies: string[]
hobbies = ['Sports', 'Music', 'Cooking']

//
//// Function Types
//

// ...with return value type
function add(a: number, b: number): number {
	const result = a + b
	console.log(result)
	return result
}

type CalculationFn = (a: number, b: number) => number

function calculate(a: number, b: number, calcFn: CalculationFn) {
	calcFn(a, b)
}

calculate(10, 20, add)

//
//// Object Types with Interfaces
//
interface Credentials {
	username: string
	password: string
}

// interfaces are easily extendable
// interface Credentials {
// 	mode: string
// }

let creds: Credentials

creds = {
	username: 'dre',
	password: '1234',
}

// For example, if you're defining a class of credentials, for example, you can use the implements keyword
// to implement an interface.  And this then forces you to add the properties and methods that are defined
// in the object of that interface in your class as well.
class AuthCredentials implements Credentials {
	mode: string
	username: string
	password: string
	emails: string
}

function login(credentials: Credentials) {
	console.log(credentials.username)
}

login(new AuthCredentials())

//
//// Merging Types
//

//
// TYPE
//

// type Admin = {
// 	permissions: string[]
// }

// type AppUser = {
// 	userName: string
// }

// type AppAdmin = Admin & AppUser

// let admin: AppAdmin

// admin = {
// 	permissions: ['login'],
// 	userName: 'Max',
// }

//
// INTERFACES
//

interface Admin {
	permissions: string[]
}

interface AppUser {
	userName: string
}

interface AppAdmin extends Admin, AppUser {}

let admin: AppAdmin

admin = {
	permissions: ['login'],
	userName: 'Max',
}

//
//// LITERAL TYPES AND TYPE GUARDS
//

type Role = 'admin' | 'user' | 'editor'

let role: Role

role = 'admin'
role = 'user'
role = 'editor'

function performAction(action: string | number, role: Role) {
	if (role === 'admin' && typeof action === 'string') {
		// ...
	}
}

//
//// CUSTOM GENERIC TYPES
//

let roles: Array<Role> // or Role[]
roles = ['admin', 'editor']

type DataStorage<T> = {
	storage: T[]
	add: (data: T) => void
}

const textStorage: DataStorage<string> = {
	storage: [],
	add(data) {
		this.storage.push(data)
	},
}

const userStorage: DataStorage<User> = {
	storage: [],
	add(user) {},
}

//
// JAVASCRIPT VERSION
//

function merge<T, U>(a: T, b: U) {
	return {
		...a,
		...b,
	}
}

const newUser = merge({ name: 'Dre' }, { age: 34 })
