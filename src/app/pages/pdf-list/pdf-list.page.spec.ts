import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PdfListPage } from './pdf-list.page';

describe('PdfListPage', () => {
  let component: PdfListPage;
  let fixture: ComponentFixture<PdfListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdfListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PdfListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
