import { Directive, Input, HostBinding, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Directive({
	selector: '[sanitizeHtml]'
})
export class SanitizeHtmlDirective {
	@Input()
	public sanitizeHtml: string;

	constructor(private _sanitizer: DomSanitizer){}

	@HostBinding('innerHtml')
	public get innerHtml(): SafeHtml {
		return this._sanitizer.bypassSecurityTrustHtml(this.sanitizeHtml);
	}
}