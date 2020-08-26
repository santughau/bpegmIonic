import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { LoadingController } from "@ionic/angular";

@Injectable({
  providedIn: "root",
})
export class BpegmServiceService {
  constructor(
    private http: HttpClient,
    public loadingController: LoadingController
  ) {}
  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: "my-custom-class",
      message:
        "कृपया थोडा वेळ वाट पहा  आम्ही  सर्वर  वरून  माहिती  घेऊन  येत आहोत ",
      mode: "ios",
    });
    await loading.present();
  }

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

  getClassForTextbook(): Observable<any> {
    return this.http.get("https://bpegm.co/yamini/getClass.php");
  }

  getTextbook(id): Observable<any> {
    return this.http.post("https://bpegm.co/yamini/getSubject.php", { id: id });
  }
}
