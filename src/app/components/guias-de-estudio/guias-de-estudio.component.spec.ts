import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuiasDeEstudioComponent } from './guias-de-estudio.component';

describe('GuiasDeEstudioComponent', () => {
  let component: GuiasDeEstudioComponent;
  let fixture: ComponentFixture<GuiasDeEstudioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuiasDeEstudioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuiasDeEstudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
