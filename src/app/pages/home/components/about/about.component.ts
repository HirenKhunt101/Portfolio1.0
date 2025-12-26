import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from '../../../../shared/components/section-title/section-title.component';
import { fadeInUp, staggerFadeInUp } from '../../../../animations/element.animations';

@Component({
    selector: 'app-about',
    standalone: true,
    imports: [CommonModule, SectionTitleComponent],
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss'],
    animations: [fadeInUp, staggerFadeInUp]
})
export class AboutComponent {
    timeline = [
        { year: '2024', title: 'Senior Developer', description: 'Leading frontend architecture at TechCorp.' },
        { year: '2022', title: 'Full Stack Engineer', description: 'Built scalable web apps using Angular & Node.js.' },
        { year: '2020', title: 'Frontend Developer', description: 'Specialized in UI/UX and responsive design.' },
    ];
}
