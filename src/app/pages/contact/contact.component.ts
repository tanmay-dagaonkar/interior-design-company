import { Component, PLATFORM_ID, inject, signal } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../../emailjs.config';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  private fb = inject(FormBuilder);
  private platformId = inject(PLATFORM_ID);

  submitted = signal(false);
  sending = signal(false);
  sendError = signal(false);

  form = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: [''],
    projectType: ['Residential Interiors'],
    message: ['', Validators.required]
  });

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.sending.set(true);
    this.sendError.set(false);

    const { name, email, phone, projectType, message } = this.form.value;
    const templateParams = {
      name,
      email,
      phone,
      title: projectType,
      message,
      time: new Date().toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' }),
    };

    emailjs
      .send(EMAILJS_CONFIG.serviceId, EMAILJS_CONFIG.templateId, templateParams, {
        publicKey: EMAILJS_CONFIG.publicKey,
      })
      .then(() => {
        this.submitted.set(true);
        this.form.reset({ projectType: 'Residential Interiors' });
      })
      .catch(() => {
        this.sendError.set(true);
      })
      .finally(() => {
        this.sending.set(false);
      });
  }
}
