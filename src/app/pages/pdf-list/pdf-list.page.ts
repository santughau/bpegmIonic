import { Component, OnInit } from "@angular/core";
import { BpegmServiceService } from "src/app/shared/bpegm-service.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-pdf-list",
  templateUrl: "./pdf-list.page.html",
  styleUrls: ["./pdf-list.page.scss"],
})
export class PdfListPage implements OnInit {
  classList: [];
  textbook: [];
  constructor(private serive: BpegmServiceService, private _router: Router) {
    this.serive.presentLoading();
    this.serive.getClassForTextbook().subscribe((classes) => {
      this.classList = classes;
      this.serive.loadingController.dismiss();
    });
  }

  ngOnInit() {}
  selectedClass(className) {
    this.serive.presentLoading();
    this.serive.getTextbook(className.target.value).subscribe((textbook) => {
      this.textbook = textbook;
      this.serive.loadingController.dismiss();
    });
  }
}
