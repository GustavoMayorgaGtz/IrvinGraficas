import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelladoraComponent } from './datos.component';

describe('SelladoraComponent', () => {
  let component: SelladoraComponent;
  let fixture: ComponentFixture<SelladoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelladoraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelladoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
