import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CustomerItemsPage } from './customer-items.page';

describe('CustomerItemsPage', () => {
  let component: CustomerItemsPage;
  let fixture: ComponentFixture<CustomerItemsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerItemsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomerItemsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
