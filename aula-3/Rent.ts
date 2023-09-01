import { Bike } from "./Bike";
import { User } from "./User";

export class Rent {
    private constructor(
        public bike: Bike,
        public user: User,
        public dateFrom: Date,
        public dateTo: Date,
        public dateReturned?: Date
    ) {}

    static create(rents: Rent[], bike: Bike, user: User, startDate: Date, endDate: Date): Rent {
        const canRent: boolean = Rent.canRent(rents, startDate, endDate)

        if (canRent) {
            return new Rent(bike, user, startDate, endDate)
        }

        throw new Error('Overlapping dates!')
    }

    static canRent(rents: Rent[], startDate: Date, endDate: Date): boolean {
        rents.forEach( rent => {
            if (startDate <= rent.dateTo && endDate >= rent.dateFrom) {
                return false
            }
        })

        return true
    }
}
