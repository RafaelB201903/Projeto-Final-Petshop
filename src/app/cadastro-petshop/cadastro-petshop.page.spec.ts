import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CadastroPetshopPage } from './cadastro-petshop.page';

describe('CadastroPetshopPage', () => {
  let component: CadastroPetshopPage;
  let fixture: ComponentFixture<CadastroPetshopPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroPetshopPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CadastroPetshopPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
