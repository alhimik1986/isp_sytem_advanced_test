import { Component, OnInit, OnDestroy, AfterContentInit, ViewChild, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpPriceListService } from '../../services/http-price-list.service';
import { FixedHeaderAndSidebarsDirective } from '../../directives/fixed-header-and-sidebars/fixed-header-and-sidebars.directive';

@Component({
  selector: 'app-certificate-list',
  templateUrl: './certificate-list.component.html',
  styleUrls: ['./certificate-list.component.scss'],
  providers: [HttpPriceListService]
})
export class CertificateListComponent implements OnInit, OnDestroy, AfterContentInit {

	@ViewChild(FixedHeaderAndSidebarsDirective)
	directive = null; // Директива, которую нужно применить после рендеринга этого компонента

	brand: string;
	public siteInfo: string[] = [];
	private priceListOrig = null; 
	priceList; // Прайс-лист ssl-сертификатов (после фильтрации поиском)

	private sub: any;
	private subSite: any;
	private subCert: any;
	private subSearch: any;
	private subClear: any;

	public searchEvent = new EventEmitter<any>();
	public siteInfoEvent = new EventEmitter<any>();

	constructor(
		private httpPriceList: HttpPriceListService,
		private route: ActivatedRoute,
		private router: Router
	) { }

	ngOnInit() {
		// Событие: измение роута
		this.sub = this.route.params.subscribe(params => {
			this.brand = params['brand'];
			this.searchEvent.emit();
		});

		// Событие: изменение параметров поиска прайс-листа
		this.subSite = this.siteInfoEvent.subscribe((siteInfo) => {
			this.siteInfo = siteInfo;
			this.searchEvent.emit();
		});

		// Событие: получен прайс-лист ssl-сертификатов
		this.subCert = this.httpPriceList.getPriceList().subscribe(data => {
			this.priceListOrig = data;
			this.searchEvent.emit();
		});

		// Событие: обновить прайс-лист ssl-сертификатов
		this.subSearch = this.searchEvent.subscribe(() => {
			if (this.priceListOrig !== null) {
				this.priceList = this.httpPriceList.filter(this.priceListOrig, this.brand, this.siteInfo);
			}
		});
	}

	ngOnDestroy() {
		if (this.sub)       this.sub.unsubscribe();
		if (this.subSite)   this.subSite.unsubscribe();
		if (this.subCert)   this.subCert.unsubscribe();
		if (this.subSearch) this.subSearch.unsubscribe();
	}

	ngAfterContentInit() {
		this.directive.initStartTheDirective();
	}
}
