import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-certificate-order',
  templateUrl: './certificate-order.component.html',
  styleUrls: ['./certificate-order.component.scss']
})
export class CertificateOrderComponent implements OnInit, OnDestroy {
	id: number;
	period: number;
	private sub: any;

	constructor(private route: ActivatedRoute) { }

	ngOnInit() {
		this.sub = this.route.params.subscribe(params => {
			this.id = +params['id']; // (+) converts string 'id' to a number
			this.period = +params['period'];
		});
	}

	ngOnDestroy() {
		this.sub.unsubscribe();
	}
}
