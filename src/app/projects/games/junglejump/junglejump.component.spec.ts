import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JunglejumpComponent } from './junglejump.component';

describe('JunglejumpComponent', () => {
  let component: JunglejumpComponent;
  let fixture: ComponentFixture<JunglejumpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JunglejumpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JunglejumpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
