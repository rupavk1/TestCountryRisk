import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse} from '@angular/common/http';
import { Observable, of, forkJoin } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _countryURL: string = "./assets/data.json";
  constructor(private http: HttpClient) { }
  
  
 //To return countries list
  getCountryData(): Observable<any> {
    
    return this.http.get<any>(this._countryURL)
      .pipe(
        tap(countries => this.log('fetched countries')),
        catchError(this.handleError('getCountryData'))
      ) as Observable<any>;
  }

  private handleError<T>(operation = 'operation') {
    return (error: HttpErrorResponse): Observable<T> => {

      
      console.error(error); // log to console instead

      if (error.error instanceof Event) {
        throw error.error;
      }

      const message = `Error occurred code "${error.error}"`;
      throw new Error(`${operation} failed: ${message}`);
    };

  }

  private log(message: string) {
    console.log('GlobeService: ' + message);
  }

  
      
    
  
  
  
 }
