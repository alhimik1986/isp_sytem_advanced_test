import { Component, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-certificate-list-filter',
  templateUrl: './certificate-list-filter.component.html',
  styleUrls: ['./certificate-list-filter.component.scss']
})
export class CertificateListFilterComponent {

	@Input() siteInfo: string[];
	@Input() siteInfoEvent: EventEmitter<any>;

	public typeSelected = '';
	public domainSelected = '';
	public applyingSelected = '';

	public switchType(elem) {
		this.typeSelected = (this.typeSelected === elem) ? '' : elem;
		this.applyFilter();
	}

	public switchDomain(elem) {
		this.domainSelected = (this.domainSelected === elem) ? '' : elem;
		this.applyFilter();
	}

	public switchApplying(elem) {
		this.applyingSelected = (this.applyingSelected === elem) ? '' : elem;
		this.applyFilter();
	}

	private applyFilter() {
		let siteInfo = [];
		if (this.typeSelected)     siteInfo.push(this.typeSelected);
		if (this.domainSelected)   siteInfo.push(this.domainSelected);
		if (this.applyingSelected) siteInfo.push(this.applyingSelected);

		this.siteInfoEvent.emit(siteInfo);
	}

	public hasFilter(param) {
		return (this.siteInfo.indexOf(param) !== -1);
	}

	public clearFilter() {
		this.typeSelected     = '';
		this.domainSelected   = '';
		this.applyingSelected = '';

		this.siteInfoEvent.emit([]);
	}


}
