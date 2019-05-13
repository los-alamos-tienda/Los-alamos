import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuadroInformacionComponent } from './cuadro-informacion.component';

describe('CuadroInformacionComponent', () => {
  let component: CuadroInformacionComponent;
  let fixture: ComponentFixture<CuadroInformacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuadroInformacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuadroInformacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
