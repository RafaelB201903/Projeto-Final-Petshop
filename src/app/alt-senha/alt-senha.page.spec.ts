import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AltSenhaPage } from './alt-senha.page';

describe('AltSenhaPage', () => {
  let component: AltSenhaPage;
  let fixture: ComponentFixture<AltSenhaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltSenhaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AltSenhaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
