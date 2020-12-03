import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HistoriePage } from './historie.page';

describe('HistoriePage', () => {
  let component: HistoriePage;
  let fixture: ComponentFixture<HistoriePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoriePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HistoriePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
