import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AtualizarInfoPage } from './atualizar-info.page';

describe('AtualizarInfoPage', () => {
  let component: AtualizarInfoPage;
  let fixture: ComponentFixture<AtualizarInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtualizarInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AtualizarInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
