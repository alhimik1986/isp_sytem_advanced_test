import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificateListArticlesComponent } from './certificate-list-articles.component';

describe('CertificateListArticlesComponent', () => {
  let component: CertificateListArticlesComponent;
  let fixture: ComponentFixture<CertificateListArticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertificateListArticlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificateListArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
