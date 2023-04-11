import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DonorsList } from '../models/donorsList';
import { Donor } from '../models/donor';

const url = "http://localhost:3000/api/donors";

@Injectable({
  providedIn: 'root'
})
export class DonationsService {

  constructor(private http: HttpClient) { }

getAll(params? : any):Observable<DonorsList>{
  let queryParams ={};
    if(params) {
      queryParams = {params : new HttpParams()
        // .set('sort', params.sort || "")
        // .set('sortDirection', params.sortDirection || "")
        .set('page', params.page && params.page.toString() || "")
        .set('pageSize', params.pageSize && params.pageSize.toString() || "")
        .set('filter', params.filter && JSON.stringify(params.filter) || "")
      }
    }
  return this.http.get(url, queryParams).pipe(map( res => {
    return new DonorsList(res);
  }));
}

get(id: number): Observable<Donor>{
  return this.http.get(url + "/" + id).pipe(map( response => {
    return new Donor(response);
  }));
}

}
