"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rent = void 0;
class Rent {
    constructor(bike, user, dateFrom, dateTo, dateReturned) {
        this.bike = bike;
        this.user = user;
        this.dateFrom = dateFrom;
        this.dateTo = dateTo;
        this.dateReturned = dateReturned;
    }
    static create(rents, bike, user, startDate, endDate) {
        const canRent = Rent.canRent(rents, startDate, endDate);
        if (canRent) {
            return new Rent(bike, user, startDate, endDate);
        }
        throw new Error('Overlapping dates!');
    }
    static canRent(rents, startDate, endDate) {
        rents.forEach(rent => {
            if (startDate <= rent.dateTo && endDate >= rent.dateFrom) {
                return false;
            }
        });
        return true;
    }
}
exports.Rent = Rent;
