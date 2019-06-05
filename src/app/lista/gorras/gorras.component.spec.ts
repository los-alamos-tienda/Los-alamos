import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GorrasComponent } from './gorras.component';

describe('GorrasComponent', () => {
  let component: GorrasComponent;
  let fixture: ComponentFixture<GorrasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GorrasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GorrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
