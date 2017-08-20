import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appFixedHeaderAndSidebars]'
})
export class FixedHeaderAndSidebarsDirective {

	// Информация о DOM элементах этого компонента
	private elemsInfo: object = {
		header:   {width: null, left: null, top: null, fakeElem: null},
		sidebar1: {width: null, left: null, top: null, fakeElem: null},
		sidebar3: {width: null, left: null, top: null, fakeElem: null},
	};
	private header;
	private sidebar1;
	private sidebar3;

	constructor(private elemRef: ElementRef) { }

	// Этот метод нужно запустить внутри компонента, когда он отрендерится
	// Как это сделить: https://stackoverflow.com/a/40550620
	public initStartTheDirective() {
		this.header   = this.elemRef.nativeElement.querySelector('.js-certificate-header');
		this.sidebar1 = this.elemRef.nativeElement.querySelector('.js-sidebar-1');
		this.sidebar3 = this.elemRef.nativeElement.querySelector('.js-sidebar-3');
	}

	@HostListener("window:scroll", [])
	onWindowScroll() {
		if (document.body.offsetWidth < 768)
			return;

		let headerScrolled = this.headerScrolled(this.header);
		this.handleScroll(this.header, 'header', this.header, 'auto', headerScrolled);
		this.handleScroll(this.sidebar1, 'sidebar1', this.header, '25%', headerScrolled);
		this.handleScroll(this.sidebar3, 'sidebar3', this.header, '25%', headerScrolled);
	}

	private headerScrolled(headerElem) {
		let headerFakeTop = this.elemsInfo['header']['fakeElem'] ? this.elemsInfo['header']['fakeElem'].offsetTop : 0;
		let scrollTop = this.windowScrollTop();
		return (scrollTop > headerElem.offsetTop && scrollTop > headerFakeTop);
	}

	private windowScrollTop() {
		return (document.documentElement && document.documentElement.scrollTop) || window.scrollY || document.body.scrollTop;
	}

	private handleScroll(elem, propName, headerElem, defaultWidth, headerScrolled) {
		if (headerScrolled) {
			if ( ! elem.style.position || elem.style.position == 'static') {
				// Сохраняю ширину и отступ элемента
				this.saveElemPosition(elem, propName, headerElem);
				this.appendFakeElem(elem, propName, defaultWidth);

				elem.style.position = 'fixed';
				elem.style.width = this.elemsInfo[propName]['width'] + 'px';
				elem.style.left  = this.elemsInfo[propName]['left']  + 'px';
				elem.style.top   = this.elemsInfo[propName]['top']   + 'px';
				headerElem.style.top = 0;
				elem.style.zIndex = 2;
			}
		} else if (elem.style.position != 'static') {
			this.removeFakeElem(propName);
			elem.style.position = 'static';
			elem.style.width = defaultWidth;
			// Сохраняю ширину и отступы элемента
			this.saveElemPosition(elem, propName, headerElem);
		}
	}

	// Добавление муляжа элемента, который будет скроллиться.
	// Это нужно, чтобы верстка не прыгала во время прокрутки страницы.
	private appendFakeElem(origElem, propName, defaultWidth) {
		if (this.elemsInfo[propName]['fakeElem'])
			return;

		var div = document.createElement('div');
		div.style.width = origElem.offsetWidth + 'px';
		div.style.height = origElem.offsetHeight + 'px';
		origElem.parentNode.insertBefore(div, origElem); // insert div before origElem

		this.elemsInfo[propName]['fakeElem'] = div;
	}

	private removeFakeElem(propName) {
		let fakeElem = this.elemsInfo[propName]['fakeElem'];
		if (fakeElem) {
			fakeElem.parentNode.removeChild(fakeElem);
			this.elemsInfo[propName]['fakeElem'] = null;
		}
	}

	private saveElemPosition(elem, propName, headerElem) {
		this.elemsInfo[propName]['width'] = elem.offsetWidth;
		this.elemsInfo[propName]['left']  = elem.offsetLeft;
		this.elemsInfo[propName]['top']   = headerElem.offsetHeight;
	}

	private hideFakeElems() {
		if (this.elemsInfo['sidebar1']['fakeElem']) this.elemsInfo['sidebar1']['fakeElem'].style.display = 'none';
		if (this.elemsInfo['sidebar3']['fakeElem']) this.elemsInfo['sidebar3']['fakeElem'].style.display = 'none';
	}

	private showFakeElems() {
		if (this.elemsInfo['sidebar1']['fakeElem']) this.elemsInfo['sidebar1']['fakeElem'].style.display = 'block';
		if (this.elemsInfo['sidebar3']['fakeElem']) this.elemsInfo['sidebar3']['fakeElem'].style.display = 'block';
	}




	@HostListener("window:resize", [])
	onWindowResize() {
		this.handleResize();
	}

	private handleResize() {
		if (document.body.offsetWidth < 768) {
			this.smallScreenPosition(this.header, 'header');
			this.smallScreenPosition(this.sidebar1, 'sidebar1');
			this.smallScreenPosition(this.sidebar3, 'sidebar3');
		} else {
			this.setDefaultPosition(this.header, 'header', 'auto');
			this.setDefaultPosition(this.sidebar1, 'sidebar1', 'auto');
			this.setDefaultPosition(this.sidebar3, 'sidebar3', 'auto');

			// Сохраняю ширину и отступы элементов
			this.saveElemPosition(this.header, 'header', this.header);
			this.saveElemPosition(this.sidebar1, 'sidebar1', this.header);
			this.saveElemPosition(this.sidebar3, 'sidebar3', this.header);

			let headerScrolled = this.headerScrolled(this.header);
			this.setPreviousPosition(this.header, 'header', headerScrolled, 'auto');
			this.setPreviousPosition(this.sidebar1, 'sidebar1', headerScrolled, '50%');
			this.setPreviousPosition(this.sidebar3, 'sidebar3', headerScrolled, '50%');

			this.header.style.top = 0;

			this.header.style.visibility = 'visible';
			this.sidebar1.style.visibility = 'visible';
			this.sidebar3.style.visibility = 'visible';
		}
	}

	private smallScreenPosition(elem, propName) {
		elem.style.position = 'static';
		elem.style.width = 'auto';
		this.removeFakeElem(propName);
	}

	private setDefaultPosition(elem, propName, defaultWidth) {
		elem.style.visibility = 'hidden';
		elem.style.position = 'static';
		elem.style.width = defaultWidth;
		this.removeFakeElem(propName);
	}

	private setPreviousPosition(elem, propName, headerScrolled, defaultWidth) {
		elem.style.position = headerScrolled ? 'fixed' : 'static';
		elem.style.width = this.elemsInfo[propName]['width'] + 'px';
		elem.style.left  = this.elemsInfo[propName]['left']  + 'px';
		elem.style.top   = this.elemsInfo[propName]['top']   + 'px';
		
		if (headerScrolled)
			this.appendFakeElem(elem, propName, defaultWidth);
	}
}
