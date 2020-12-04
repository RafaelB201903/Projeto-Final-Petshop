import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PedidosFinalizadosPage } from './pedidos-finalizados.page';

describe('PedidosFinalizadosPage', () => {
  let component: PedidosFinalizadosPage;
  let fixture: ComponentFixture<PedidosFinalizadosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidosFinalizadosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PedidosFinalizadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
