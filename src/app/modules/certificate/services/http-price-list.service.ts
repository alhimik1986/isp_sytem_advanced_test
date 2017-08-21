import { Injectable } from '@angular/core';
import { Jsonp, Response/*, RequestOptions*/ } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()

export class HttpPriceListService {

	constructor(private jsonp: Jsonp) {}

	private handleResponse(res: Response): any {
		let body = res.json() || null;
		body = body ? body.pricelist : [];

		body.forEach((item, index)=> {
			body[index]['siteinfo'] = this.parseSiteInfo(body[index]['siteinfo']);
			body[index]['templateInfo'] = {
				logoUrl: body[index]['siteinfo'].hasOwnProperty('stamp') ? body[index]['siteinfo']['stamp'] : '',
				buttonLabels: this.getButtonLabels(body[index]),
				selectedPeriod: this.getFirstPeriod(body[index])
			};
		});

		return body;
	}

	private getButtonLabels(data) {
		let res = [];

		data.price.period.forEach((item) => {
			if (item.type !== 'month') {
				console.log('Ошибка в конвертации периода из месяцы в года.');
			}

			if (item.cost == '')
				return;

			let cost = parseFloat(item.cost).toString();
			let period = (item.length / 12) + ' года';
			if (item.length == 12) period = '1 год';
			if (item.length == 24) period = '2 года';
			if (item.length == 36) period = '3 года';
			if (item.length == 48) period = '4 года';
			if (item.length == 60) period = '5 лет';

			res.push({
				label: period + ' ' + cost + ' ',
				length: item.length
			});
		});

		return res;
	}

	private getFirstPeriod(data) {
		return (data.price.period.length > 0) ? data.price.period[0]['length'] : 0;
	}

	private parseSiteInfo(data: string): object {
		let dataList = data.split(', ');
		let res = {};

		dataList.forEach((item) => {
			let params = item.split('=');
			res[params[0]] = (params.length === 2) ? params[1] : null;
		});

		return res;
	}


	

	private handleError(error: Response | any) {
		console.log('error', error);
		return error;
	}

	private httpGet(url: string): Observable<any> {
		return this.jsonp
			 .get(url, {})
			 .map(this.handleResponse.bind(this))
			 .catch(this.handleError);
	}

	public getPriceList() {
		let url = 'https://my.ispsystem.com/?func=pricelist.export&out=bjson&project=1&itemtype=certificate&onlyavailable=yes';
		url = url + '&callback=__ng_jsonp__.__req0.finished';
		return this.httpGet(url);
	}

	// Вспомогательный метод: фильтрация (поиск) в прайс-листе
	public filter(priceList, brand: string, siteInfo: string[]) {
		if ( ! brand && siteInfo.length === 0)
			return priceList;

		let result = [];

		// Если поиск только по брендам
		if (brand && siteInfo.length === 0) {
			priceList.forEach((item) => {
				if (item.siteinfo.hasOwnProperty(brand)) {
					result.push(item);
				}
			});
		}


		// Если поиск только по галочкам
		if ( ! brand && siteInfo.length !== 0) {
			priceList.forEach((item) => {
				if (this.hasElemInSiteInfo(siteInfo, item.siteinfo)) {
					result.push(item);
				}
			});
		}

		// Если поиск и по тем и по другим
		if (brand && siteInfo.length !== 0) {
			priceList.forEach((item) => {
				if (item.siteinfo.hasOwnProperty(brand) && this.hasElemInSiteInfo(siteInfo, item.siteinfo)) {
					result.push(item);
				}
			});
		}

		return result;
	}

	private hasElemInSiteInfo(elems: string[], siteInfo) {
		let result = true;
		elems.forEach((item) => {
			if ( ! siteInfo.hasOwnProperty(item)) {
				result = false;
				return false;
			}
		});

		return result;
	}
}
