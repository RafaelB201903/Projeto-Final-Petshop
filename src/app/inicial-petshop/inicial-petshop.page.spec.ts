import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InicialPetshopPage } from './inicial-petshop.page';

describe('InicialPetshopPage', () => {
  let component: InicialPetshopPage;
  let fixture: ComponentFixture<InicialPetshopPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InicialPetshopPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InicialPetshopPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
