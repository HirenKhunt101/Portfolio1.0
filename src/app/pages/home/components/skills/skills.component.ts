import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from '../../../../shared/components/section-title/section-title.component';
import { staggerFadeInUp } from '../../../../animations/element.animations';

@Component({
    selector: 'app-skills',
    standalone: true,
    imports: [CommonModule, SectionTitleComponent],
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.scss'],
    animations: [staggerFadeInUp]
})
export class SkillsComponent {
    skillCategories = [
        {
            name: 'Frontend',
            icon: 'icon-code', // Placeholder class
            skills: ['Angular', 'React', 'TypeScript', 'RxJS', 'JavaScript', 'NgRx', 'Tailwind', 'HTML', 'Bootstrap', 'CSS']
        },
        {
            name: 'Backend',
            icon: 'icon-server',
            skills: ['Node.js', 'NestJS', 'Express', 'MongoDB', 'MySQL', 'Firebase', 'REST APIs', 'Microservices']
        },
        {
            name: 'Tools & DevOps',
            icon: 'icon-settings',
            skills: ['Git', 'Docker', 'AWS', 'GCP', 'Azure', 'CI/CD', 'GitLab', 'GitHub', 'Kubernetes']
        }
    ];
}
