import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificateListContentComponent } from './certificate-list-content.component';

describe('CertificateListContentComponent', () => {
  let component: CertificateListContentComponent;
  let fixture: ComponentFixture<CertificateListContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertificateListContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificateListContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
