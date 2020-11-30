import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SairPetshopPage } from './sair-petshop.page';

describe('SairPetshopPage', () => {
  let component: SairPetshopPage;
  let fixture: ComponentFixture<SairPetshopPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SairPetshopPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SairPetshopPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
