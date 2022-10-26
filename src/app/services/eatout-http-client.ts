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

  public get<T>(partialUrl: string, params?: Params): Observable<T> {
    return this.handleErrors(this.http.get<T>(this.url(partialUrl), params));
  }

  protected url(partialUrl: string): string {
    return `http://localhost:5000/${partialUrl}`
  }

  private handleErrors<T>(call: Observable<T>): Observable<T> {
    return call.pipe(
      catchError((err, caught) => EMPTY)
    );
  }


}
