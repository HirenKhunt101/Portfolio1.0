import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SectionTitleComponent } from '../../../../shared/components/section-title/section-title.component';
import { fadeInUp } from '../../../../animations/element.animations';
import { APP_CONSTANTS } from '../../../../core/constants/app.constants';

@Component({
    selector: 'app-contact',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, SectionTitleComponent],
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss'],
    animations: [fadeInUp]
})
export class ContactComponent {
    contactForm: FormGroup;
    isSubmitting = false;
    constants = APP_CONSTANTS;


    constructor(private fb: FormBuilder) {
        this.contactForm = this.fb.group({
            name: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            message: ['', Validators.required]
        });
    }

    onSubmit() {
        if (this.contactForm.valid) {
            this.isSubmitting = true;
            // Simulate API call
            setTimeout(() => {
                this.isSubmitting = false;
                alert('Message sent successfully!');
                this.contactForm.reset();
            }, 1500);
        } else {
            Object.keys(this.contactForm.controls).forEach(key => {
                this.contactForm.get(key)?.markAsTouched();
            });
        }
    }
}
