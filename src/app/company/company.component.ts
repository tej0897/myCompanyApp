import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Company } from './company';
import { CompanyService } from './company.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
c: any;

  constructor(private companyService: CompanyService, private http:HttpClient) { }

  ngOnInit(): void {
  }

  companyObj:Company = new Company();
  companyarr:Array<Company>=[];

  data:{}|any;

  addCompanyDetails(){
    this.companyService.addCompany(this.companyObj).subscribe(data=>
      {
        this.data = JSON.stringify(data);
        this.companyarr.push(this.data);
        //window.location.reload();
      },error => {
        console.log(error);
      })
  }

  getCompanyList(){
    this.companyService.getAllCompany().subscribe(data =>
      {
        this.companyarr = Object.values(data);
        console.log(this.companyObj.stockPrice);
      }, error => {
        console.log(error);
      })
  }

  deleteCompany(companyID:number){
    this.companyService.deleteCompany(companyID).subscribe(data =>
      {
        let companyIndex = this.companyarr.findIndex(c=>c.companyID == companyID);
        this.companyarr.splice(companyIndex, 1);
        alert("Company Record is Deleted");
        window.location.reload();
        this.getCompanyList();
      }, error =>{
        console.log(error);
      })
  }

  updateCompany(){

  }

  companym: Company = new Company();
  companyData: Array<Company>=[];
  response:any;

  getCompanyByID(companyID:number){
    this.companyService.getCompanyByID(this.companym.companyID).subscribe(data=>
      {
        this.companyData = Object.values(data);
        console.log(this.companyData);
        this.data = JSON.stringify(data);
        alert("search result: ");
      }, error =>{
        console.log(error);
      })
  }



}
