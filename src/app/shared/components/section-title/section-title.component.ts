import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-section-title',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="section-title">
      <h2 [attr.data-text]="title">{{ title }}</h2>
      <div class="line"></div>
      <p *ngIf="subtitle" class="subtitle">{{ subtitle }}</p>
    </div>
  `,
    styleUrls: ['./section-title.component.scss']
})
export class SectionTitleComponent {
    @Input() title: string = '';
    @Input() subtitle: string = '';
}
