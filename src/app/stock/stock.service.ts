import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Stock } from './stock';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private http:HttpClient) { }

  stockList: Stock[]|any;

  private apiGetStock:string = "";
  private apiPostStock:string = "";
}
