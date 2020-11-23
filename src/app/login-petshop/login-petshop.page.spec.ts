import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoginPetshopPage } from './login-petshop.page';

describe('LoginPetshopPage', () => {
  let component: LoginPetshopPage;
  let fixture: ComponentFixture<LoginPetshopPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginPetshopPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPetshopPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
