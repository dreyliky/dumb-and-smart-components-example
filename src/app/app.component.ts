import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ThemeEnum } from '@core';
import { ThemeService } from 'ngx-os';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
    constructor(
        private readonly themeService: ThemeService
    ) {
        this.themeService.apply(ThemeEnum.Win10);
    }
}
