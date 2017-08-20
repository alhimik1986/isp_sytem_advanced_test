import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstSslMainHeaderComponent } from './first-ssl-main-header.component';

describe('FirstSslMainHeaderComponent', () => {
  let component: FirstSslMainHeaderComponent;
  let fixture: ComponentFixture<FirstSslMainHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstSslMainHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstSslMainHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
