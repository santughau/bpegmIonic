import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BpegmPage } from './bpegm.page';

describe('BpegmPage', () => {
  let component: BpegmPage;
  let fixture: ComponentFixture<BpegmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BpegmPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BpegmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
