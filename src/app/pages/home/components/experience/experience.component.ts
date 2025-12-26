import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from '../../../../shared/components/section-title/section-title.component';
import { staggerFadeInUp } from '../../../../animations/element.animations';

@Component({
    selector: 'app-experience',
    standalone: true,
    imports: [CommonModule, SectionTitleComponent],
    templateUrl: './experience.component.html',
    styleUrls: ['./experience.component.scss'],
    animations: [staggerFadeInUp]
})
export class ExperienceComponent {
    education = [
        {
            degree: 'B.Tech in Computer Science',
            school: 'University of Technology',
            year: '2016 - 2020',
            description: 'Graduated with Honors. Focused on Software Engineering and Algorithms.'
        }
    ];

    experience = [
        {
            role: 'Senior Frontend Developer',
            company: 'Tech Solutions Inc.',
            year: '2023 - Present',
            description: 'Leading the frontend team, migrating legacy apps to Angular 17, and implementing design systems.'
        },
        {
            role: 'Full Stack Developer',
            company: 'Creative Studio',
            year: '2021 - 2023',
            description: 'Developed e-commerce platforms using MEAN stack. Integrated payment gateways and optimized performance.'
        },
        {
            role: 'Junior Web Developer',
            company: 'StartUp Hub',
            year: '2020 - 2021',
            description: 'Assisted in building responsive websites and maintaining existing codebases.'
        }
    ];
}
