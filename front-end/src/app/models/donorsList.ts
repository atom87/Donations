import { Donor } from './donor';

export class DonorsList{
    count: number;
    donors: Donor[];

    constructor(obj? : any){
        this.count = obj && obj.count || 0;
        this.donors = obj && obj.donors.map( elem => {
            return new Donor(elem)}) || [];
    }
}