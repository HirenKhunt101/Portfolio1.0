import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from '../../../../shared/components/section-title/section-title.component';
import { staggerFadeInUp, scaleIn } from '../../../../animations/element.animations';

interface Project {
    id: number;
    title: string;
    description: string;
    image: string; // Placeholder or use generate_image if needed
    tags: string[];
    category: 'frontend' | 'backend' | 'fullstack';
    demoUrl?: string;
    githubUrl?: string;
}

@Component({
    selector: 'app-projects',
    standalone: true,
    imports: [CommonModule, SectionTitleComponent],
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss'],
    animations: [staggerFadeInUp, scaleIn]
})
export class ProjectsComponent {
    filter: 'all' | 'frontend' | 'backend' | 'fullstack' = 'all';

    projects: Project[] = [
        {
            id: 1,
            title: 'E-Commerce Dashboard',
            description: 'A comprehensive dashboard for managing products, orders, and analytics. Features real-time data visualization.',
            image: 'assets/project1.jpg', // Placeholder
            tags: ['Angular', 'NgRx', 'Chart.js'],
            category: 'frontend',
            demoUrl: '#',
            githubUrl: '#'
        },
        {
            id: 2,
            title: 'Task Management API',
            description: 'RESTful API for team collaboration tools with authentication and real-time updates via WebSockets.',
            image: 'assets/project2.jpg',
            tags: ['Node.js', 'Express', 'MongoDB'],
            category: 'backend',
            githubUrl: '#'
        },
        {
            id: 3,
            title: 'Social Media App',
            description: 'Full stack social platform with posts, likes, comments, and user profiles.',
            image: 'assets/project3.jpg',
            tags: ['Angular', 'NestJS', 'PostgreSQL'],
            category: 'fullstack',
            demoUrl: '#'
        }
    ];

    get filteredProjects() {
        return this.filter === 'all'
            ? this.projects
            : this.projects.filter(p => p.category === this.filter);
    }

    setFilter(category: 'all' | 'frontend' | 'backend' | 'fullstack') {
        this.filter = category;
    }
}
