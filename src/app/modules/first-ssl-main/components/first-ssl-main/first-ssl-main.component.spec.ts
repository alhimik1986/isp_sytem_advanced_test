import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstSslMainComponent } from './first-ssl-main.component';

describe('FirstSslMainComponent', () => {
  let component: FirstSslMainComponent;
  let fixture: ComponentFixture<FirstSslMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstSslMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstSslMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
