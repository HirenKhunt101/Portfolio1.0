import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from '../../../../shared/components/section-title/section-title.component';
import { fadeInUp, staggerFadeInUp } from '../../../../animations/element.animations';
import { APP_CONSTANTS } from '../../../../core/constants/app.constants';

@Component({
    selector: 'app-about',
    standalone: true,
    imports: [CommonModule, SectionTitleComponent],
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss'],
    animations: [fadeInUp, staggerFadeInUp]
})
export class AboutComponent {
    constants = APP_CONSTANTS;
}
