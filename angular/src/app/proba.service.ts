import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class ProbaService {

  constructor(private _http: HttpClient) {
}
dailyForecast(){

  return this._http.get("https://jsonplaceholder.typicode.com/albums").pipe(map((result: any) => result));

}
}

