import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Params} from "@angular/router";
import {catchError, EMPTY, Observable} from "rxjs";
import {ReservationApiObject} from "../pages/reservation/api/reservation.api";

@Injectable({
  providedIn: 'root'
})
export class EatoutHttpClient {
  constructor(
    private http: HttpClient
  ) {}

  public get<T>(partialUrl: string, params?: Params): Observable<T> {
    return this.handleErrors(this.http.get<T>(this.url(partialUrl), params));
  }

  public post<T>(partialUrl: string, reservation: ReservationApiObject ): Observable<T> {
    return this.handleErrors(this.http.post<T>(this.url(partialUrl), reservation));
  }

  protected url(partialUrl: string): string {
    return `http://localhost:${partialUrl}`
  }

  private handleErrors<T>(call: Observable<T>): Observable<T> {
    return call.pipe(
      catchError((err, caught) => EMPTY)
    );
  }


}
