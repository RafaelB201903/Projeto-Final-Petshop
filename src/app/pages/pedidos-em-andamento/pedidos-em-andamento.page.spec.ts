import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PedidosEmAndamentoPage } from './pedidos-em-andamento.page';

describe('PedidosEmAndamentoPage', () => {
  let component: PedidosEmAndamentoPage;
  let fixture: ComponentFixture<PedidosEmAndamentoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidosEmAndamentoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PedidosEmAndamentoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
