import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from '../../../../shared/components/section-title/section-title.component';
import { staggerFadeInUp, scaleIn } from '../../../../animations/element.animations';
import { APP_CONSTANTS } from '../../../../core/constants/app.constants';

@Component({
    selector: 'app-projects',
    standalone: true,
    imports: [CommonModule, SectionTitleComponent],
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss'],
    animations: [staggerFadeInUp, scaleIn]
})
export class ProjectsComponent {
    constants = APP_CONSTANTS;
    // filter: 'all' | 'frontend' | 'backend' | 'fullstack' = 'all';

    // get filteredProjects() {
    //     return this.filter === 'all'
    //         ? this.projects
    //         : this.projects.filter(p => p.category === this.filter);
    // }

    // setFilter(category: 'all' | 'frontend' | 'backend' | 'fullstack') {
    //     this.filter = category;
    // }
}
