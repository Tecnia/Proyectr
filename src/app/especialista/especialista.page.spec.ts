import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EspecialistaPage } from './especialista.page';

describe('EspecialistaPage', () => {
  let component: EspecialistaPage;
  let fixture: ComponentFixture<EspecialistaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspecialistaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EspecialistaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
