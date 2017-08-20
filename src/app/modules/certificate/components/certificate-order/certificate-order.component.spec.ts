import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificateOrderComponent } from './certificate-order.component';

describe('CertificateOrderComponent', () => {
  let component: CertificateOrderComponent;
  let fixture: ComponentFixture<CertificateOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertificateOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificateOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
