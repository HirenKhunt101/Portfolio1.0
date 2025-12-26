import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { fadeInUp, staggerFadeInUp } from '../../../../animations/element.animations';

@Component({
    selector: 'app-hero',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './hero.component.html',
    styleUrls: ['./hero.component.scss'],
    animations: [fadeInUp, staggerFadeInUp]
})
export class HeroComponent {
    // Can add dynamic text or stats here
    scrollTo(id: string, event: Event) {
        event.preventDefault();
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
    }
}
