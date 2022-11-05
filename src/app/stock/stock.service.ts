import { HttpClient } from '@angular/common/http';
import { CommaExpr } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Stock } from './stock';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private http:HttpClient) { }

  stockList: Stock[]|any;

  private apiPostStock:string = "http://localhost:8081/api/stocks/add";
  private apiGetStock:string = "http://localhost:8081/api/stocks/getAllStocks";

  addStock(companyID:number, stock:Stock): Observable<Stock>{
    return this.http.post<Stock>('${this.apiPostStock}/${companyID}', stock);
  }

  getAllStock(companyID:number): Observable<Array<Stock>>{
    return this.http.get<Array<Stock>>('${this.apiGetStock}/${companyID}');
  }
  
}
