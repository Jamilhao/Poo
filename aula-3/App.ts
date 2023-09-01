import { Bike } from "./Bike";
import { Rent } from "./Rent";
import { User } from "./User";
import crypto from 'crypto';

export class App {
    users: User[] = []
    bikes: Bike[] = []
    rents: Rent[] = []

    findUser(email: string): User | undefined {
        return this.users.find( user => user.email === email )
    }

    registerUser(user: User): void {
        this.users.forEach( rUser => {
            if (rUser.email === user.email) {
                throw new Error('Duplicate user!')
            }
        })

        user.id = crypto.randomUUID()
        this.users.push(user)
        console.log('User registered!')
    }

    removeUser(user: User): void {
        const userToBeRemoved: User | undefined = this.findUser(user.email)

        if (userToBeRemoved === undefined) {
            throw new Error('User not registered!')
        }

        this.users = this.users.filter( rUser => rUser !== userToBeRemoved )
        console.log('User removed!')
    }

    registerBike(bike: Bike): void {
        this.bikes.forEach( rBike => {
            if (rBike === bike) {
                throw new Error('Bike is already registered!')
            }
        })

        bike.id = crypto.randomUUID()
        this.bikes.push(bike)
        console.log('Bike registered!')
    }

    rentBike(bike: Bike, user: User, startDate: Date, endDate: Date): Rent {
        const rent: Rent = Rent.create(this.rents, bike, user, startDate, endDate)
        this.rents.push(rent)
        console.log('Sucessful rent!')
        return rent
    }

    returnBike(rent: Rent, dateReturned: Date): Rent {
        rent.dateReturned = dateReturned
        this.rents = this.rents.filter( rRent => rRent !== rent )
        console.log('Bike returned!')
        return rent
    }
}
