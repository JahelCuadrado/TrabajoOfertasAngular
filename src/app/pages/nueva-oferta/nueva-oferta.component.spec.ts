import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaOfertaComponent } from './nueva-oferta.component';

describe('NuevaOfertaComponent', () => {
  let component: NuevaOfertaComponent;
  let fixture: ComponentFixture<NuevaOfertaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevaOfertaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaOfertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
