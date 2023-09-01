"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const Rent_1 = require("./Rent");
const crypto_1 = __importDefault(require("crypto"));
class App {
    constructor() {
        this.users = [];
        this.bikes = [];
        this.rents = [];
    }
    findUser(email) {
        return this.users.find(user => user.email === email);
    }
    registerUser(user) {
        this.users.forEach(rUser => {
            if (rUser.email === user.email) {
                throw new Error('Duplicate user!');
            }
        });
        user.id = crypto_1.default.randomUUID();
        this.users.push(user);
        console.log('User registered!');
    }
    removeUser(user) {
        const userToBeRemoved = this.findUser(user.email);
        if (userToBeRemoved === undefined) {
            throw new Error('User not registered!');
        }
        this.users = this.users.filter(rUser => rUser !== userToBeRemoved);
        console.log('User removed!');
    }
    registerBike(bike) {
        this.bikes.forEach(rBike => {
            if (rBike === bike) {
                throw new Error('Bike is already registered!');
            }
        });
        bike.id = crypto_1.default.randomUUID();
        this.bikes.push(bike);
        console.log('Bike registered!');
    }
    rentBike(bike, user, startDate, endDate) {
        const rent = Rent_1.Rent.create(this.rents, bike, user, startDate, endDate);
        this.rents.push(rent);
        console.log('Sucessful rent!');
        return rent;
    }
    returnBike(rent, dateReturned) {
        rent.dateReturned = dateReturned;
        this.rents = this.rents.filter(rRent => rRent !== rent);
        console.log('Bike returned!');
        return rent;
    }
}
exports.App = App;
