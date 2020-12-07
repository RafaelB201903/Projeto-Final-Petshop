import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddImagemPage } from './add-imagem.page';

describe('AddImagemPage', () => {
  let component: AddImagemPage;
  let fixture: ComponentFixture<AddImagemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddImagemPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddImagemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
