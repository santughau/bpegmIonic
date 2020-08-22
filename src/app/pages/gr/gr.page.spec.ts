import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GrPage } from './gr.page';

describe('GrPage', () => {
  let component: GrPage;
  let fixture: ComponentFixture<GrPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
