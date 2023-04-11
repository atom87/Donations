export class Donor {
    _id: number;
    name: string;
    description: string; //ili string[]
    charity_date: string;
    categories: Array<string>;
    estimated_value: number;

    constructor(obj? :any){
        this._id = obj && obj._id || 0;
        this.name = obj && obj.name || null;
        this.description = obj && obj.description || null;
        this.charity_date = obj && obj.charity_date || null;
        this.categories =  obj && obj.categories || null;
        this.estimated_value = obj && obj.estimated_value || 0;
    }
}