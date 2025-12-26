import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeService } from '../../core/services/theme.service';

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [CommonModule, RouterLink, RouterLinkActive],
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
    themeService = inject(ThemeService);
    isMenuOpen = false;

    links = [
        { path: '/', label: 'Home', fragment: 'hero' },
        { path: '/', label: 'About', fragment: 'about' },
        { path: '/', label: 'Skills', fragment: 'skills' },
        { path: '/', label: 'Projects', fragment: 'projects' },
        { path: '/', label: 'Contact', fragment: 'contact' },
    ];

    toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
    }

    toggleTheme() {
        this.themeService.toggleTheme();
    }
}
