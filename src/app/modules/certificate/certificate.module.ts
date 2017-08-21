import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { /*HttpModule,*/ JsonpModule } from '@angular/http';

//import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CertificateRoutingModule } from './certificate-routing.module';

import { SanitizeHtmlDirective } from './shared/sanitize-html/sanitize-html.directive'

import { CertificateListComponent } from './components/certificate-list/certificate-list.component';
import { CertificateOrderComponent } from './components/certificate-order/certificate-order.component';
import { CertificateBasketComponent } from './components/certificate-basket/certificate-basket.component';
import { CertificateListHeaderComponent } from './components/certificate-list/components/certificate-list-header/certificate-list-header.component';
import { CertificateListFilterComponent } from './components/certificate-list/components/certificate-list-filter/certificate-list-filter.component';
import { CertificateListContentComponent } from './components/certificate-list/components/certificate-list-content/certificate-list-content.component';
import { CertificateListArticlesComponent } from './components/certificate-list/components/certificate-list-articles/certificate-list-articles.component';
import { FixedHeaderAndSidebarsDirective } from './directives/fixed-header-and-sidebars/fixed-header-and-sidebars.directive';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    //HttpModule,
    JsonpModule,
    //FormsModule,
    //ReactiveFormsModule,
    
    CertificateRoutingModule
  ],
  declarations: [
    SanitizeHtmlDirective,
    
    CertificateListComponent,
    CertificateOrderComponent,
    CertificateBasketComponent,
    CertificateListHeaderComponent,
    CertificateListFilterComponent,
    CertificateListContentComponent,
    CertificateListArticlesComponent,
    FixedHeaderAndSidebarsDirective
  ],
  exports: [
    
  ]
})
export class CertificateModule { }
