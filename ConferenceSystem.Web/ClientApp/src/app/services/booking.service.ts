import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class BookingService {

  ApiURL: string = "https://localhost:44375/api/";

  constructor(private httpClient: HttpClient) {

  }


  GetBooking() {
    return this.httpClient.get(this.ApiURL + "booking")
  }

}
