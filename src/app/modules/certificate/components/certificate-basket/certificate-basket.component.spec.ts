import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificateBasketComponent } from './certificate-basket.component';

describe('CertificateBasketComponent', () => {
  let component: CertificateBasketComponent;
  let fixture: ComponentFixture<CertificateBasketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertificateBasketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificateBasketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
