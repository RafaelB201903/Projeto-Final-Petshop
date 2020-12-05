import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VerMaisPedidoNovoPage } from './ver-mais-pedido-novo.page';

describe('VerMaisPedidoNovoPage', () => {
  let component: VerMaisPedidoNovoPage;
  let fixture: ComponentFixture<VerMaisPedidoNovoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerMaisPedidoNovoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VerMaisPedidoNovoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
