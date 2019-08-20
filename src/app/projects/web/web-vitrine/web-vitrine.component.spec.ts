import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebVitrineComponent } from './web-vitrine.component';

describe('Web.VitrineComponent', () => {
  let component: WebVitrineComponent;
  let fixture: ComponentFixture<WebVitrineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebVitrineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebVitrineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
