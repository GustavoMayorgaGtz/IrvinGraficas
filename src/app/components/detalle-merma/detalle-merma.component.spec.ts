import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleMermaComponent } from './detalle-merma.component';

describe('DetalleMermaComponent', () => {
  let component: DetalleMermaComponent;
  let fixture: ComponentFixture<DetalleMermaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleMermaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleMermaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
