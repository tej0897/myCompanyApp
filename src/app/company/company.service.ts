import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CanMatch } from '@angular/router';
import { Observable } from 'rxjs';
import { Company } from './company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http:HttpClient) { }

  companies: Company[] | any;
  
  private apiGet:string = 'http://localhost:8081/api/v1/getAllCompanies';
  private apiPost:string = 'http://localhost:8081/api/v1/addCompany';
  private apiDelete:string = 'http://localhost:8081/api/v1/deleteCompany';
  private apiUpdate:string = 'http://localhost:8081/api/v1/updateCompany';
  private apiGetByID:string = 'http://localhost:8081/api/v1/getCompanyByID';

  addCompany(companyObj:Company): Observable<Company>{
    return this.http.post<Company>(this.apiPost, companyObj);
  }

  getAllCompany(): Observable<Array<Company>>{
    return this.http.get<Array<Company>>(this.apiGet);
  }

  deleteCompany(companyID:number): Observable<Company>{
    return this.http.delete<Company>('${this.apiDelete}/${companyID}');
  } 

  getCompanyByID(companyID:number): Observable<Array<Company>>{
    return this.http.get<Array<Company>>('${this.apiGetByID}/${companyID}');
  }

  updateCompany(companyObj:Company): Observable<Company>{
    return this.http.put<Company>(this.apiUpdate, companyObj);
  }
  
}
