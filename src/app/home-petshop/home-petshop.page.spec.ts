import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomePetshopPage } from './home-petshop.page';

describe('HomePetshopPage', () => {
  let component: HomePetshopPage;
  let fixture: ComponentFixture<HomePetshopPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePetshopPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePetshopPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
