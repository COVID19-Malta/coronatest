import {Injectable} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Injectable({
    providedIn: 'root'
})

export class LocaleService {

    public locale = 'en_US';

    constructor(
        private translateService: TranslateService,
    ) {
        this.changeLocale('en_US');
        translateService.setDefaultLang('en_US')
    }

    translate(key = null, params = null) {
        if (key) {
            return this.translateService.instant(key, params);
        } else {
            return '';
        }
    }

    changeLocale(locale) {
        this.locale = locale;
        this.translateService.use(this.locale);
    }
}
