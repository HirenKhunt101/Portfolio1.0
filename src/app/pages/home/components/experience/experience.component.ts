import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from '../../../../shared/components/section-title/section-title.component';
import { staggerFadeInUp } from '../../../../animations/element.animations';
import { APP_CONSTANTS } from '../../../../core/constants/app.constants';

@Component({
    selector: 'app-experience',
    standalone: true,
    imports: [CommonModule, SectionTitleComponent],
    templateUrl: './experience.component.html',
    styleUrls: ['./experience.component.scss'],
    animations: [staggerFadeInUp]
})
export class ExperienceComponent {
    constants = APP_CONSTANTS;
}
