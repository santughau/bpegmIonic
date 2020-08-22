import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class BpegmServiceService {
  constructor(private http: HttpClient) {}
  getBpegmData(): Observable<any> {
    return this.http.get<any>("https://bpegm.co/yamini/ranjana.php");
  }

  getClass(): Observable<any> {
    return this.http.get("https://bpegm.co/yamini/class.php");
  }

  getSubject(id): Observable<any> {
    return this.http.post("https://bpegm.co/yamini/sub.php", { id: id });
  }

  getFilterData(id): Observable<any> {
    return this.http.post("https://bpegm.co/yamini/filterData.php", { id: id });
  }
}
