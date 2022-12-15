import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Params} from "@angular/router";
import {catchError, EMPTY, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EatoutHttpClient {
  constructor(
    private http: HttpClient
  ) {}

  public get<T>(url: string, params?: Params): Observable<T> {
    return this.handleErrors(this.http.get<T>(url, params));
  }

  public post<T>(url: string, body: any): Observable<T> {
    return this.handleErrors(this.http.post<T>(url, body));
  }

  private handleErrors<T>(call: Observable<T>): Observable<T> {
    return call.pipe(
      catchError((err, caught) => {
        return EMPTY;
      })
    );
  }
}
