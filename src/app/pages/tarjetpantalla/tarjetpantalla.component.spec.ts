import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetpantallaComponent } from './tarjetpantalla.component';

describe('TarjetpantallaComponent', () => {
  let component: TarjetpantallaComponent;
  let fixture: ComponentFixture<TarjetpantallaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetpantallaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarjetpantallaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
