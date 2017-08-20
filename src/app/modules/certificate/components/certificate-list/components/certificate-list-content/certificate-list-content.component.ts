import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-certificate-list-content',
  templateUrl: './certificate-list-content.component.html',
  styleUrls: ['./certificate-list-content.component.scss']
})
export class CertificateListContentComponent {

	@Input() priceList: any;

	constructor(private router: Router) { }

	public buyNow(id, period) {
		this.router.navigate(['/certificate/order', id, period]);
	}

	public selectPeriod(id: string, period: string) {
		this.priceList.forEach((item, i) => {
			if (item.id === id) {
				this.priceList[i]['templateInfo']['selectedPeriod'] = period;
			}
		});
	}
}
