import { Component, OnInit } from "@angular/core";
import { BpegmServiceService } from "src/app/shared/bpegm-service.service";
import { LoadingController } from "@ionic/angular";

@Component({
  selector: "app-bpegm",
  templateUrl: "./bpegm.page.html",
  styleUrls: ["./bpegm.page.scss"],
})
export class BpegmPage implements OnInit {
  isFilter: boolean = false;
  post = [];
  loading;
  classList = [];
  subject = [];
  filterData = [];
  constructor(
    private service: BpegmServiceService,
    public loadingController: LoadingController
  ) {
    this.loadData(null);
    this.service.getClass().subscribe((clas) => {
      this.classList = clas;
    });
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: "my-custom-class",
      message:
        "कृपया थोडा वेळ वाट पहा  आम्ही  सर्वर  वरून  माहिती  घेऊन  येत आहोत ",
      mode: "ios",
    });
    await loading.present();
  }

  classSelected(event) {
    console.log(event.target.value);
    this.presentLoading();
    this.service.getSubject(event.target.value).subscribe((sub) => {
      this.subject = sub;
      this.loadingController.dismiss();
    });
  }

  subjectSelected(event) {
    this.service.getFilterData(event.target.value).subscribe((data) => {
      this.post = data;
    });
  }

  ngOnInit() {}
  changeFilter() {
    this.isFilter = !this.isFilter;
  }

  loadData(event) {
    this.presentLoading();
    this.service.getBpegmData().subscribe((data) => {
      this.post = data;
      console.log(this.post);

      this.loadingController.dismiss();
    });
  }
}
