import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PedidosNovosPage } from './pedidos-novos.page';

describe('PedidosNovosPage', () => {
  let component: PedidosNovosPage;
  let fixture: ComponentFixture<PedidosNovosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidosNovosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PedidosNovosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
