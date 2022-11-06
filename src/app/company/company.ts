import { Stock } from "../stock/stock";

export class Company {
    companyID: number | any;
    companyName: string | any;
    companyCEO: string | any;
    turnover: string | any;
    website: string | any;
    
    stockPrice: number | any;
    stockList: Array<Stock> = [];

}
