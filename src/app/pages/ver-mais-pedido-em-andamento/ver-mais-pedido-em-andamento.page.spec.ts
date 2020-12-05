import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VerMaisPedidoEmAndamentoPage } from './ver-mais-pedido-em-andamento.page';

describe('VerMaisPedidoEmAndamentoPage', () => {
  let component: VerMaisPedidoEmAndamentoPage;
  let fixture: ComponentFixture<VerMaisPedidoEmAndamentoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerMaisPedidoEmAndamentoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VerMaisPedidoEmAndamentoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
