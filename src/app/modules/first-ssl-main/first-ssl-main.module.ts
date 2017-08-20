import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { CertificateModule } from '../../modules/certificate/certificate.module';

import { FirstSslMainComponent } from './components/first-ssl-main/first-ssl-main.component';
import { FirstSslMainHeaderComponent } from './components/first-ssl-main-header/first-ssl-main-header.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CertificateModule
  ],
  declarations: [
    FirstSslMainComponent,
    FirstSslMainHeaderComponent],
  exports: [
  	FirstSslMainComponent
  ]
})
export class FirstSslMainModule { }
