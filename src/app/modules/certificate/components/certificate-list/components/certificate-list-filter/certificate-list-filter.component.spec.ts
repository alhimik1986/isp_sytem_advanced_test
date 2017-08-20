import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificateListFilterComponent } from './certificate-list-filter.component';

describe('CertificateListFilterComponent', () => {
  let component: CertificateListFilterComponent;
  let fixture: ComponentFixture<CertificateListFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertificateListFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificateListFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
