import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BanadoresComponent } from './banadores.component';

describe('BanadoresComponent', () => {
  let component: BanadoresComponent;
  let fixture: ComponentFixture<BanadoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BanadoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BanadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
