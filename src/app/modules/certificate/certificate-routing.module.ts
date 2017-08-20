import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CertificateListComponent }   from './components/certificate-list/certificate-list.component';
import { CertificateOrderComponent }  from './components/certificate-order/certificate-order.component';
import { CertificateBasketComponent } from './components/certificate-basket/certificate-basket.component';

const routes: Routes = [
	{
		path: 'certificate',
		children: [{
			path: '',
			children: [
				{
					path: 'list',
					redirectTo: 'list/',
				},
				{
					path: 'list/:brand',
					component: CertificateListComponent,
				},
				{
					path: 'order/:id/:period',
					component: CertificateOrderComponent,
				},
				{
					path: 'basket/:id/:period',
					component: CertificateBasketComponent,
				},
			],
		}],
	},
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ],
    providers: []
})
export class CertificateRoutingModule {}
