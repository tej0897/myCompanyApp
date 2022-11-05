import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Stock } from './stock';
import { StockService } from './stock.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  constructor(private http:HttpClient, private stockService: StockService) { }

  ngOnInit(): void {
  }

  stockObj: Stock = new Stock();
  stockList: Array<Stock> = [];
  data:{}|any;

  addStock(companyID:number){
    this.stockService.addStock(companyID, this.stockObj).subscribe(data=>
      {
        this.data = JSON.stringify(data);
        this.stockList.push(this.data);
        alert("Stock data added to Stock and Company Table!");
      })
  }

}
