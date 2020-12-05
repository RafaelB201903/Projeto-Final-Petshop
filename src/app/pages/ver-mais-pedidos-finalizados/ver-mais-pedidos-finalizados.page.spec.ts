import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VerMaisPedidosFinalizadosPage } from './ver-mais-pedidos-finalizados.page';

describe('VerMaisPedidosFinalizadosPage', () => {
  let component: VerMaisPedidosFinalizadosPage;
  let fixture: ComponentFixture<VerMaisPedidosFinalizadosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerMaisPedidosFinalizadosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VerMaisPedidosFinalizadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
