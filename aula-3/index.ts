import { App } from "./App";
import { Bike } from "./Bike";
import { User } from "./User";

const bike = new Bike('mountain bike', 'mountain', 123, 500, 100.5, 'desc', 5, [])
const user = new User('Maria', 'maria@mail.com', '1234')
const today = new Date()
const twoDaysFromToday = new Date()
twoDaysFromToday.setDate(twoDaysFromToday.getDate() + 2)
const tomorrow = new Date()
tomorrow.setDate(tomorrow.getDate() + 1)
const sevenDaysFromToday = new Date()
sevenDaysFromToday.setDate(sevenDaysFromToday.getDate() + 7)

const app = new App()

app.registerUser(user)
console.log(app.findUser('maria@mail.com'))

app.registerBike(bike)
console.log(bike)

const rent = app.rentBike(bike, user, today, tomorrow)
console.log(rent)

const returnedRent = app.returnBike(rent, twoDaysFromToday)
console.log(returnedRent)

app.removeUser(user)
console.log(app.findUser('maria@mail.com'))
