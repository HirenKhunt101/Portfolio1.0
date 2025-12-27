import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { APP_CONSTANTS } from '../../core/constants/app.constants';

@Component({
    selector: 'app-footer',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
    currentYear = new Date().getFullYear();
    constants = APP_CONSTANTS;

}
