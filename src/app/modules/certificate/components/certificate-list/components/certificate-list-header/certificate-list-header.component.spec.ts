import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificateListHeaderComponent } from './certificate-list-header.component';

describe('CertificateListHeaderComponent', () => {
  let component: CertificateListHeaderComponent;
  let fixture: ComponentFixture<CertificateListHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertificateListHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificateListHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
